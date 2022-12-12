import { createHash } from 'crypto';
import { createReadStream } from 'fs';
import { resolve } from 'path';
import { Writable } from 'stream';
import { pipeline } from 'stream/promises';
import { operationError } from '../../utils/globalVar.js';

export default async function ([src]) {
  try {
    const pathToFile = resolve(src);
    const hash = createHash('sha256');
    const readableStream = createReadStream(pathToFile);
    const writer = new Writable({
      write(chunk) {
        console.log(chunk.toString())
      }
    });
    await pipeline(
      readableStream,
      hash.setEncoding('hex'),
      writer,
    )
  } catch (err) {
    console.error(operationError);
  }
}