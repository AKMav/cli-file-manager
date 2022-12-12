import pwd from "../utils/printWorkingDirectory.js";

export function cmdDispatcher(action, args) {
  action(args);
  pwd();
}