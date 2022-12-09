import createArgs from './utils/createArguments.js';
import { sayBi, sayHi } from './utils/greetings.js';

const cliArgs = createArgs();
const fullname = cliArgs['--username'] || 'Student';
sayHi(fullname);
sayBi(fullname);




// process.stdout.write(cliArgs);
