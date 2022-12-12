import { logOut } from "../operations/authorization/index.js";
import { goUp, changeDirectory, printFiles } from "../operations/fileSystem/index.js";
import { catFile, addFile, renameFile, copyFile, moveFile, deleteFile } from '../operations/filesBasic/index.js'
import osInfo from '../operations/systemInfo/index.js'

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
  },
  get rn() {
    return renameFile
  },
  get cp() {
    return copyFile
  },
  get mv() {
    return moveFile
  },
  get rm() {
    return deleteFile
  },
  get os() {
    return osInfo
  }
}