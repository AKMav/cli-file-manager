import transformCommandLine from "./cmdTransfrom.js";
function commandHandler(command) {
  const [operator, arg1, arg2] = transformCommandLine(command);
  console.log(operator);
  console.log(arg1);
  console.log(arg2);
}

export {
  commandHandler
}