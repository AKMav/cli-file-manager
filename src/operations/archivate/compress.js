import { createReadStream, createWriteStream } from 'fs';
import { parse, resolve } from 'path';
import { pipeline } from 'stream/promises';
import { createBrotliCompress } from 'zlib';
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
      const { base } = parse(fromFile);
      const targetFileName = `${base}.br`;
      const targetDest = resolve(pathTo, targetFileName);

      const readStream = createReadStream(fromFile);
      const writeStream = createWriteStream(targetDest);
      const compressBr = createBrotliCompress();

      await pipeline(
        readStream,
        compressBr,
        writeStream
      )
    } catch (err) {
      console.error(operationError);
    }
  }
}