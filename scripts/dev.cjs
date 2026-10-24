const { spawn } = require('node:child_process');
const path = require('node:path');
const root = path.resolve(__dirname, '..');
const services = [
  spawn(process.execPath, ['server.js'], { cwd: path.join(root, 'Backend'), stdio: 'inherit' }),
  spawn(process.execPath, ['node_modules/vite/bin/vite.js', '--host', '127.0.0.1'], { cwd: path.join(root, 'Frontend'), stdio: 'inherit' }),
];
let stopping = false;
function stop(code = 0) {
  if (stopping) return;
  stopping = true;
  for (const service of services) service.kill();
  process.exitCode = code;
}
for (const service of services) {
  service.on('error', (error) => { console.error(error.message); stop(1); });
  service.on('exit', (code) => { if (!stopping) stop(code || 0); });
}
process.on('SIGINT', () => stop());
process.on('SIGTERM', () => stop());
