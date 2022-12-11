import transformCommandLine from "./cmdTransform.js";
import { msgError } from "../global.js";
import { invalidInputError } from "../global.js";
import { cmdDispatcher } from "./cmdDispatch.js";
import { commandProxy } from "../global.js";

function commandHandler(command) {
  const [operator, ...args] = transformCommandLine(command);

  if (!commandProxy[operator]) {
    console.error(invalidInputError)
  } else {
    try {
      cmdDispatcher(commandProxy[operator], args);
    } catch (err) {
      console.error(msgError)
    }
  }

  // switch (operator) {
  //   case 'up':
  //     cmdDispatcher(commandProxy[operator]);
  //     break;
  //   case 'cd':
  //     cmdDispatcher(commandProxy[operator], args);
  //     break;
  //   case 'cd':
  //     cmdDispatcher(commandProxy[operator], args);
  //     break;
  //   default:
  //     console.log('Invalid operation')
  //     return;
  // }
}

export {
  commandHandler
}