import transformCommandLine from "./cmdTransform.js";
import { invalidInputError, msgError } from "../utils/globalVar.js";
import { cmdDispatcher } from "./cmdDispatch.js";
import { commandProxy } from "./cmdProxy.js";

function commandHandler(command) {
  const [operator, ...args] = transformCommandLine(command);

  if (!commandProxy[operator]) {
    console.error(invalidInputError)
  } else {
    cmdDispatcher(commandProxy[operator], args);
  }
}

export {
  commandHandler
}