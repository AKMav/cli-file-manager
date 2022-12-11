import { createReadStream } from 'fs';
import { Writable } from 'stream';
import { resolve } from 'path';
import { msgError } from '../../utils/globalVar.js';


export default async function ([src]) {
  try {
    const filePath = resolve(src);
    const readStream = createReadStream(
      filePath,
      { encoding: 'utf8' }
    );
    readStream.on('error', () => {
      console.error(msgError);
    })
    const writer = new Writable({
      write(chunk) {
        console.log(chunk.toString())
      }
    });
    readStream.pipe(writer);
  } catch (err) {
    console.error(msgError);
  }
}