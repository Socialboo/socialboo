import { spawnSync } from 'node:child_process';

const nodeOptions = [process.env.NODE_OPTIONS, '--require tsconfig-paths/register']
  .filter(Boolean)
  .join(' ');

const result = spawnSync(
  process.execPath,
  ['x', 'auth@latest', 'generate', '--config', './auth.ts', ...process.argv.slice(2)],
  {
    env: {
      ...process.env,
      NODE_OPTIONS: nodeOptions,
    },
    stdio: 'inherit',
  },
);

if (result.error) {
  throw result.error;
}

process.exit(result.status ?? 1);
