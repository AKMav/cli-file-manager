import { readdir } from 'fs/promises';
import { resolve } from 'path';
import { cwd } from 'process';
import { operationError } from "../../utils/globalVar.js";

export default async function printFiles() {
  try {
    const currentDirectory = resolve(cwd());
    const files = await readdir(currentDirectory);
    console.table(files);
  } catch (err) {
    console.error(operationError);
  }
}