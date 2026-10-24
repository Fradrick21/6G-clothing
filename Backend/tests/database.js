const path = require('node:path');
const { randomUUID } = require('node:crypto');
const mongoose = require('mongoose');
require('dotenv').config({ path: path.resolve(__dirname, '../.env'), quiet: true });
async function connectTestDatabase() {
  const name = `sixg_test_${randomUUID().replaceAll('-', '')}`;
  if (!process.env.MONGO_URI) throw new Error('Configure MONGO_URI in Backend/.env to run integration tests');
  await mongoose.connect(process.env.MONGO_URI, { dbName: name, serverSelectionTimeoutMS: 10000 });
  await Promise.all(Object.values(mongoose.models).map((model) => model.init()));
  return async () => {
    if (mongoose.connection.name !== name || !/^sixg_test_[a-f0-9]{32}$/.test(name)) throw new Error('Refusing to clean an unexpected database');
    await mongoose.connection.dropDatabase();
    await mongoose.disconnect();
  };
}
module.exports = { connectTestDatabase };
