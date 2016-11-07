const commands = require('./commands');
const chalk = require('chalk');

const prompt = chalk.blue("prompt > ")

// Output a prompt
process.stdout.write(prompt);

const done = function(output) {
  // show the output
  // show the prompt
  process.stdout.write(output);
  process.stdout.write("\n" + prompt);

}

// The stdin 'data' event fires after a user types in a line
process.stdin.on('data', function (data) {

  const cmd = data.toString().trim().split(" ");
  const command = cmd.shift();  // remove the newline

  if (commands[command])  commands[command](cmd.join(" "), done);
  else (done("Command not found: " + command))

});

