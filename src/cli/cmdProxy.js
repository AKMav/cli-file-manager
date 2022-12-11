import { logOut } from "../operations/authorization/index.js";
import { goUp, changeDirectory, printFiles } from "../operations/fileSystem/index.js";

export const commandProxy = {
  get '.exit'() {
    return logOut
  },
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