import { logOut } from "../operations/authorization/index.js";
import { goUp, changeDirectory, printFiles } from "../operations/fileSystem/index.js";
import { catFile, addFile } from '../operations/filesBasic/index.js'

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
  get cat() {
    return catFile
  },
  get add() {
    return addFile
  }
}