import { chdir } from 'process';
import { msgError } from "../../utils/globalVar.js";

export default async function goUp() {
  try {
    chdir('..')
  } catch (err) {
    console.error(msgError);
  }
}