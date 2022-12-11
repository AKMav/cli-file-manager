import { chdir } from 'process';
import { msgError } from "../../utils/globalVar.js";

export default async function changeDirectory([path]) {
  try {
    chdir(path)
  } catch (err) {
    console.error(msgError);
  }
}