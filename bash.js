var commands = require('./commands');

// Output a prompt
process.stdout.write('prompt > ');

var done = function(output) {
  // show the output
  // show the prompt
  process.stdout.write(output);
  process.stdout.write("\nprompt > ");

}

// The stdin 'data' event fires after a user types in a line
process.stdin.on('data', function (data) {

  var cmd = data.toString().trim().split(" ");
  var command = cmd.shift();  // remove the newline

  commands[command](cmd.join(" "), done);

});
