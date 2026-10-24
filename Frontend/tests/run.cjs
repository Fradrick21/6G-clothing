const { fork, spawn } = require('node:child_process');
const path = require('node:path');
const root = path.resolve(__dirname, '..');
let api, vite, tests;
let stopping = false;
async function cleanup() {
  if (stopping) return;
  stopping = true;
  vite?.kill();
  if (api?.connected) {
    await new Promise((resolve) => {
      const timer = setTimeout(() => { api.kill(); resolve(); }, 10000);
      api.once('exit', () => { clearTimeout(timer); resolve(); });
      api.send('stop');
    });
  }
}
async function main() {
  api = fork(path.resolve(root, '../Backend/tests/server.js'), [], { stdio: ['ignore', 'inherit', 'inherit', 'ipc'] });
  await new Promise((resolve, reject) => {
    const timer = setTimeout(() => reject(new Error('Test API startup timed out')), 20000);
    api.once('message', () => { clearTimeout(timer); resolve(); });
    api.once('error', (error) => { clearTimeout(timer); reject(error); });
    api.once('exit', (code) => { clearTimeout(timer); reject(new Error(`Test API exited: ${code}`)); });
  });
  vite = spawn(process.execPath, ['node_modules/vite/bin/vite.js', '--host', '127.0.0.1', '--strictPort'], {
    cwd: root, env: { ...process.env, API_PROXY_TARGET: 'http://127.0.0.1:5001' }, stdio: 'inherit',
  });
  await new Promise((resolve, reject) => {
    let tries = 0;
    async function poll() {
      try { const response = await fetch('http://127.0.0.1:5173/api/health'); if (response.ok) return resolve(); } catch { /* Wait for Vite startup. */ }
      if (++tries >= 50) return reject(new Error('Test frontend startup timed out'));
      setTimeout(poll, 200);
    }
    vite.once('error', reject);
    vite.once('exit', (code) => reject(new Error(`Test frontend exited: ${code}`)));
    poll();
  });
  tests = spawn(process.execPath, ['node_modules/@playwright/test/cli.js', 'test', ...process.argv.slice(2)], { cwd: root, stdio: 'inherit' });
  const code = await new Promise((resolve, reject) => { tests.once('error', reject); tests.once('exit', resolve); });
  await cleanup();
  process.exitCode = code || 0;
}
process.on('SIGINT', () => { tests?.kill(); cleanup().then(() => { process.exitCode = 130; }); });
process.on('SIGTERM', () => { tests?.kill(); cleanup().then(() => { process.exitCode = 143; }); });
main().catch(async (error) => { console.error(error); await cleanup(); process.exitCode = 1; });
