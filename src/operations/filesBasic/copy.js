import { parse, resolve } from 'path';
import { createReadStream, createWriteStream } from 'fs';
import { pipeline } from 'stream/promises';
import { operationError } from '../../utils/globalVar.js';

export default async function ([source, dest]) {
  try {
    const sourcePath = resolve(source);
    const { base } = parse(sourcePath);
    const destFile = resolve(dest, base);
    const readableStream = createReadStream(sourcePath);
    const writableStream = createWriteStream(destFile);
    await pipeline(readableStream, writableStream);
  } catch (err) {
    console.error(operationError)
  }
}