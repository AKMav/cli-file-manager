export function sayHi(name) {
  const phrase = 'Welcome to the File Manage';
  process.stdout.write(`${phrase}, ${name || 'Student'}!\n`);
}

export function sayBi(name) {
  const phrase = 'Thank you for using File Manager';
  process.stdout.write(`${phrase}, ${name}, goodbye!\n`);
}