var fs = require('fs');


module.exports = {
	pwd: function() {
		process.stdout.write("\n" + process.cwd());  
	},
	date: function() {
		process.stdout.write("\n" + new Date());
	},
	ls: function(){
		fs.readdir('.', function(err, files) {
		  if (err) throw err;
		  files.forEach(function(file) {
		    process.stdout.write(file.toString() + "\n");
		  })
		  process.stdout.write("prompt > ");
		});
	}
}