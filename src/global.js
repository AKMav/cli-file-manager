import { goUp, changeDirectory } from "./operations/cd/index.js";

export const msgError = 'Operation failed';

export const commandProxy = {
  get up() {
    return goUp
  },
  get cd() {
    return changeDirectory
  },
}