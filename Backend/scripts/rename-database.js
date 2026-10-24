const fs = require('node:fs/promises');
const path = require('node:path');
const { createHash } = require('node:crypto');
const mongoose = require('mongoose');
require('dotenv').config({ path: path.resolve(__dirname, '../.env'), quiet: true });
const { EJSON } = mongoose.mongo.BSON;
const encode = (value) => EJSON.stringify(value, { relaxed: false });
const digest = (value) => createHash('sha256').update(encode(value)).digest('hex');
const sourceName = '6G';
const targetName = '6g';
async function snapshot(db) {
  const collections = await db.listCollections().toArray();
  return Promise.all(collections.sort((a, b) => a.name.localeCompare(b.name)).map(async (collection) => {
    if (collection.type !== 'collection') throw new Error('Views require a separate migration');
    return {
      name: collection.name, options: collection.options,
      indexes: await db.collection(collection.name).indexes(),
      documents: await db.collection(collection.name).find({}, { promoteValues: false }).sort({ _id: 1 }).toArray(),
    };
  }));
}
async function restore(db, collections) {
  for (const collection of collections) {
    await db.createCollection(collection.name, collection.options);
    if (collection.documents.length) await db.collection(collection.name).insertMany(collection.documents);
    for (const index of collection.indexes) {
      if (index.name === '_id_') continue;
      const { key, v, ns, ...options } = index;
      await db.collection(collection.name).createIndex(key, options);
    }
  }
}
async function main() {
  await mongoose.connect(process.env.MONGO_URI, { dbName: sourceName });
  try {
    const client = mongoose.connection.getClient();
    const source = client.db(sourceName);
    if (process.argv[2] !== '--apply') {
      const collections = await snapshot(source);
      if (!collections.length) throw new Error('Source database is empty; refusing an unnecessary rename');
      const directory = path.resolve(__dirname, '../backups');
      await fs.mkdir(directory, { recursive: true });
      const file = path.join(directory, `6G-before-rename-${Date.now()}.json`);
      const backup = { source: sourceName, target: targetName, collections, checksum: digest(collections) };
      await fs.writeFile(file, encode(backup), { flag: 'wx' });
      const readback = EJSON.parse(await fs.readFile(file, 'utf8'), { relaxed: false });
      if (digest(readback.collections) !== backup.checksum) throw new Error('Backup verification failed');
      console.log(`Verified backup: ${file}`);
      console.log(`Collections: ${collections.length}; documents: ${collections.reduce((sum, c) => sum + c.documents.length, 0)}`);
      return;
    }
    const file = path.resolve(process.argv[3] || '');
    const running = await fetch(`http://127.0.0.1:${process.env.PORT || 5000}/api/health`, { signal: AbortSignal.timeout(1000) }).then((response) => response.ok).catch(() => false);
    if (running) throw new Error('Stop the backend before renaming its database');
    if (path.dirname(file) !== path.resolve(__dirname, '../backups')) throw new Error('Use a verified backup from Backend/backups');
    const backup = EJSON.parse(await fs.readFile(file, 'utf8'), { relaxed: false });
    if (backup.source !== sourceName || backup.target !== targetName || digest(backup.collections) !== backup.checksum) throw new Error('Invalid backup');
    if (digest(await snapshot(source)) !== backup.checksum) throw new Error('Source data changed after backup. Create a new backup before retrying.');
    // MongoDB cannot keep database names that differ only by case together.
    await source.dropDatabase();
    const target = client.db(targetName);
    try {
      await restore(target, backup.collections);
      if (digest(await snapshot(target)) !== backup.checksum) throw new Error('Restored data verification failed');
    } catch (error) {
      // Keep the on-disk backup and report the exact recovery input.
      throw new Error(`Migration requires recovery using ${file}: ${error.message}`);
    }
    console.log('Renamed 6G to 6g; all documents, collection options and indexes verified. Backup retained.');
  } finally { await mongoose.disconnect(); }
}
main().catch((error) => { console.error(error.message); process.exitCode = 1; });
