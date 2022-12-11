import { chdir } from 'process';

export default async function goUp() {
  try {
    chdir('..')
  } catch (err) {
    throw err;
  }
}