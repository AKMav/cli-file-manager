import { chdir } from 'process';
import { operationError } from "../../utils/globalVar.js";

export default async function goUp() {
  try {
    chdir('..')
  } catch (err) {
    console.error(operationError);
  }
}