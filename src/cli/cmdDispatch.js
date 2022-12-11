import pwd from "../utils/printWorkingDirectory.js";
import { msgError } from "../global.js";

export function cmdDispatcher(action, args) {
  try {
    action(args);
    pwd();
  } catch (err) {
    console.error(msgError);
  }
}