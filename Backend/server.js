const path = require('node:path');
require('dotenv').config({ path: path.join(__dirname, '.env') });
const connectDB = require('./src/config/db');
const app = require('./src/app');

async function start() {
  if (!process.env.JWT_SECRET || process.env.JWT_SECRET.length < 32) {
    throw new Error('Set JWT_SECRET to a random value of at least 32 characters');
  }
  if (!process.env.MONGO_URI) throw new Error('MONGO_URI is required');
  await connectDB();
  const port = process.env.PORT || 5000;
  return new Promise((resolve, reject) => {
    const server = app.listen(port, (error) => {
      if (error) { reject(error); return; }
      console.log(`6G API listening on http://localhost:${port}`);
      resolve(server);
    });
    server.once('error', reject);
  });
}
if (require.main === module) start().catch(async (error) => {
  console.error('Startup failed:', error.message);
  await require('mongoose').disconnect();
  process.exitCode = 1;
});
module.exports = { start };
