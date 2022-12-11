import { open } from 'fs/promises';
import { resolve } from 'path';
import { cwd } from 'process';
import { operationError } from '../../utils/globalVar.js';

export default async function ([dest]) {
  try {
    const filePath = resolve(cwd(), dest);
    const newFile = await open(filePath, 'w');
    newFile.close();
  } catch (err) {
    console.error(operationError)
  }
}