import createArgs from './utils/createArguments.js';

function enterName(args, command) {
  const greeting = 'Welcome to the File Manage';
  process.stdout.write(`${greeting}, ${args[command] || 'Student'}!`)
}


const cliArgs = createArgs();
enterName(cliArgs, '--username')

// process.stdout.write(cliArgs);
