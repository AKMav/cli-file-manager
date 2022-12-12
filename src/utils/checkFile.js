import { stat } from 'fs/promises';
import path from 'path';

export default async function (source) {
  try {
    const srcPath = path.resolve(source);
    const stats = await stat(srcPath);
    return stats.isFile();
  } catch (error) {
    return false
  }
}