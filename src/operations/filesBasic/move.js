import { parse, resolve } from 'path';
import { createReadStream, createWriteStream } from 'fs';
import { unlink } from 'fs/promises';
import { pipeline } from 'stream/promises';
import { operationError } from '../../utils/globalVar.js';
import isDirectory from '../../utils/checkDirectory.js';

export default async function ([source, dest]) {
  const destIsDir = await isDirectory(dest);
  if (!destIsDir) {
    console.error(operationError);
  } else {
    try {
      const sourcePath = resolve(source);
      const { base } = parse(sourcePath);
      const destFile = resolve(dest, base);
      const readableStream = createReadStream(sourcePath);
      const writableStream = createWriteStream(destFile);
      await pipeline(readableStream, writableStream);
      await unlink(sourcePath);
    } catch (err) {
      console.error(operationError)
    }
  }
}