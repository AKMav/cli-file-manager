import args from '../../cli/createArguments.js';
import process from 'process';
import { sayHi, sayBi } from '../../utils/greetings.js';
import pwd from '../../utils/printWorkingDirectory.js';

const fullname = args()['--username'] || 'Student';

function logIn() {
  sayHi(fullname);
  pwd();
}

function logOut() {
  sayBi(fullname);
  process.exit();
}

export {
  fullname,
  logIn,
  logOut
}