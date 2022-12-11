import { goUp, changeDirectory, printFiles } from "./operations/cd/index.js";

export const msgError = 'Operation failed';
export const invalidInputError = 'Invalid input';

export const commandProxy = {
  get up() {
    return goUp
  },
  get cd() {
    return changeDirectory
  },
  get ls() {
    return printFiles
  },
}