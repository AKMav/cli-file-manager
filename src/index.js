import readline from 'readline';
import { sayBi } from './utils/greetings.js';
import { authorization, fullname } from './operations/authorization/index.js';
import { commandHandler } from './cli/commandHandler.js';

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

authorization();
rl.on('line', commandHandler)
  .on('close', () => {
    sayBi(fullname);
  });