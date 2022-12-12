import { createReadStream, createWriteStream } from 'fs';
import { parse, resolve } from 'path';
import { pipeline } from 'stream/promises';
import { createBrotliDecompress } from 'zlib';
import isDirectory from '../../../../file-manager/src/helpers/isDirectory.js';
import isFile from '../../../../file-manager/src/helpers/isFile.js';
import { operationError } from '../../utils/globalVar.js';

export default async function ([sourceFile, pathTo]) {
  if (!(await isDirectory(pathTo))) {
    console.error('Path destination is not directory')
  } else if (!(await isFile(sourceFile))) {
    console.error('Source is not a file')
  } else {
    try {
      const fromFile = resolve(sourceFile);
      const { name, ext } = parse(fromFile);

      if (!ext.startsWith('.br')) {
        throw new Error();
      }

      const targetDest = resolve(pathTo, name);
      const readStream = createReadStream(fromFile);
      const writeStream = createWriteStream(targetDest);
      const decompressBr = createBrotliDecompress();

      await pipeline(
        readStream,
        decompressBr,
        writeStream
      )
    } catch (err) {
      console.error(operationError);
    }
  }
}