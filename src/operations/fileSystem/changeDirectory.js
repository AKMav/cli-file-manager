import { chdir } from 'process';
import { operationError } from "../../utils/globalVar.js";

export default async function changeDirectory([path]) {
  try {
    chdir(path)
  } catch (err) {
    console.error(operationError);
  }
}