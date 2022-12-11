import { rename } from 'fs/promises';
import { resolve, parse } from 'path';
import { invalidFIleName, operationError } from '../../utils/globalVar.js';

export default async function ([oldFilePath, newName]) {
  let validNewName = false;
  if (newName) {
    validNewName = newName.split('').every(char => {
      return char.toLowerCase().match(/[a-z0-9.]/i)
    });
  }

  if (!validNewName) {
    console.error(invalidFIleName)
  } else {
    try {
      const from = resolve(oldFilePath);
      const { dir } = parse(from);
      const to = resolve(dir, newName);
      await rename(from, to);
    } catch (err) {
      console.error(operationError);
    }
  }
}