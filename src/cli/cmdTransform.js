export default function (src) {
  const arrayCmd = src
    .trim()
    .split(' ')
    .filter(el => el.trim().length !== 0);
  return ([arrayCmd[0], ...arrayCmd.slice(1)])
}