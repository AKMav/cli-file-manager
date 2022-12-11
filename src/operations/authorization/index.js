import args from '../../cli/createArguments.js';
import { sayHi } from '../../utils/greetings.js';
import pwd from '../../utils/printWorkingDirectory.js';

const fullname = args()['--username'] || 'Student';

function authorization() {
  sayHi(fullname);
  pwd();
}

export {
  fullname,
  authorization
}