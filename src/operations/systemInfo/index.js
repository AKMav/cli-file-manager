import { cpus, EOL, userInfo } from 'os';
import { arch } from 'process';
import { operationError } from '../../utils/globalVar.js';

export default async function ([cmd]) {
  if (!cmd) {
    console.error('There is empty command params');
  } else {
    try {
      const { username, homedir } = userInfo();
      const cpusAmount = cpus().length;
      const cpusInfo = cpus().map(({ model, speed }) => {
        return {
          amount: cpusAmount,
          speed: `${speed / 1000} GHz`,
          model,
        }
      });

      const result = {
        '--EOL': JSON.stringify(EOL),
        '--homedir': homedir,
        '--username': username,
        '--architecture': arch,
        '--cpus': cpusInfo,
      }

      if (!result[cmd]) {
        console.error('command is not found')
      } else {
        console.table(result[cmd]);
      }
    } catch (err) {
      console.error(operationError);
    }
  }
}