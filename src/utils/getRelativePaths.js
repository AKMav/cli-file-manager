import { fileURLToPath } from 'url';
import { dirname } from 'path';

function getFilename(importMetaUrl) {
  return fileURLToPath(importMetaUrl)
}

function getDirname(importMetaUrl) {
  return dirname(getFilename(importMetaUrl))
}

export {
  getDirname
}