import transformCommandLine from "./cmdTransform.js";
// import goUp from '../operations/cd/goUp.js';
// import pwd from "../utils/printWorkingDirectory.js";
import { cmdDispatcher } from "./cmdDispatch.js";
import { commandProxy } from "../global.js";

function commandHandler(command) {
  const [operator, ...args] = transformCommandLine(command);
  switch (operator) {
    case 'cd':
      cmdDispatcher(commandProxy[operator], args);
      break;
    default:
      console.log('Invalid operation')
      return;
  }
}

export {
  commandHandler
}