import { parse, resolve } from 'path';
import { createReadStream, createWriteStream } from 'fs';
import { operationError } from '../../utils/globalVar.js';

export default async function ([source, dest]) {
  try {
    const sourcePath = resolve(source);
    const { base } = parse(sourcePath);
    const destFile = resolve(dest, base);
    const readableStream = createReadStream(sourcePath);
    const writableStream = createWriteStream(destFile);
    readableStream.on('error', () => {
      console.error(operationError, ' no such file or directory to read file')
    })
    writableStream.on('error', () => {
      console.error(operationError, 'no such file or directory to write file')
    })
    readableStream.pipe(writableStream);
  } catch (err) {
    console.error(operationError)
  }
}