const { connectTestDatabase } = require('./database');
process.env.JWT_SECRET = 'test-only-secret-for-isolated-integration-tests';
const app = require('../src/app');
async function main() {
  const cleanup = await connectTestDatabase();
  const server = app.listen(5001, '127.0.0.1', () => {
    console.log('Isolated integration API on 5001');
    if (process.send) process.send('ready');
  });
  let stopping = false;
  async function stop() {
    if (stopping) return;
    stopping = true;
    server.closeAllConnections();
    server.close();
    await cleanup();
    process.exit(0);
  }
  process.on('SIGINT', stop);
  process.on('SIGTERM', stop);
  process.on('message', (message) => { if (message === 'stop') stop(); });
}
main().catch((error) => { console.error(error.message); process.exit(1); });
