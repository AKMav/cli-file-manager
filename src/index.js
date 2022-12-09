import createArgs from './utils/createArguments.js';
import pwd from './utils/printWorkingDirectory.js';
import { sayBi, sayHi } from './utils/greetings.js';

const cliArgs = createArgs();
const fullname = cliArgs['--username'] || 'Student';
sayHi(fullname);
pwd();



// process.stdout.write(cliArgs);
