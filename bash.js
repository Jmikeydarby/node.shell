var commands = require('./commands');
var userCommand = 'pwd';

// Output a prompt
process.stdout.write('prompt > ');

// The stdin 'data' event fires after a user types in a line
process.stdin.on('data', function (data) {
  var cmd = data.toString().trim(); // remove the newline

  if (cmd === "pwd"){
  	commands.pwd(pwd);
  }else if (cmd === "date"){
  	commands.date();
  }else if (cmd === "ls"){
  	commands.ls();
  }
  // process.stdout.write('You typed: ' + cmd);
  process.stdout.write('\nprompt > ');

});