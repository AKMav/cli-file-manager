import { unlink } from 'fs/promises';
import { resolve } from 'path';
import { operationError } from '../../utils/globalVar.js';

export default async function ([deletePath]) {
  try {
    const filePath = resolve(deletePath);
    await unlink(filePath)
  } catch (err) {
    console.error(operationError);
  }
}