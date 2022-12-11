export default function () {
  const arrayKeyValue = process.argv.slice(2).map((arg) => {
    return arg.split('=')
  });
  return Object.fromEntries(arrayKeyValue);
}
