import { cwd } from 'process';
export default function () {
  process.stdout.write(`You are currently in ${cwd()}\n`)
}