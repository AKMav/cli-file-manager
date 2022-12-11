import goUp from "./operations/cd/goUp.js";

export const msgError = 'Operation failed';

export const commandProxy = {
  'cd': goUp,
}