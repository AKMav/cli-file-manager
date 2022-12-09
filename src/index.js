import createArgs from './utils/createArguments.js';
import pwd from './utils/printWorkingDirectory.js';
import { sayBi, sayHi } from './utils/greetings.js';
import readline from 'readline';

const cliArgs = createArgs();
const fullname = cliArgs['--username'] || 'Student';
sayHi(fullname);
pwd();

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

rl.on('close', () => {
  sayBi(fullname);
});


// process.stdout.write(cliArgs);
