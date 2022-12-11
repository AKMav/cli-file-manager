import { goUp, changeDirectory, printFiles } from "../operations/fileSystem/index.js";

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