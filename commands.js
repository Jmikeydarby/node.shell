

var fs = require('fs');
var request = require('request');


module.exports = {
	pwd: function(file, done) {
		done("\n" + process.cwd());
	},
	date: function(file, done) {
		done("\n" + new Date());
	},
	ls: function(file, done){
		var output = "";
		fs.readdir('.', function(err, files) {
		  if (err) throw err;
		  files.forEach(function(file) {
		    output += file.toString() + "\n";
		  })
		  done(output);
		});
	},
	echo: function(str, done){
		done(str);

	},
	cat: function(str, done){
		var filename = str;
		fs.readFile(filename, "utf8",  function (err,data) {  
			if (err) {    
				done("File does not exist");  
			}  
			done(data);
		});
	},
	head: function(str, done){
		var filename = str;
		var output = "";
		fs.readFile(filename, "utf8",  function (err,data) {  
			if (err) {    
				done("File does not exist");  
			}  
			var array = data.toString().split("\n");
			for(var i=0; i<5; i++){
				output += array[i] + "\n";
			}
			done(output);
		});
	},

	tail: function(str, done){
		var filename = str;
		var output = "";
		fs.readFile(filename, "utf8",  function (err,data) {  
			if (err) {    
				done("File does not exist");  
			}  
			var array = data.toString().split("\n");
			for(var i=array.length-6; i<array.length-1; i++){
				output += array[i] + "\n";
			}
			done(output);
		});
	},

	sort: function(str, done){
		var filename = str;
		fs.readFile(filename, "utf8",  function (err,data) {  
			if (err) {    
				done("File does not exist");  
			}  
			var array = data.toString().split("\n");
			done(array.sort().join("\n"));
		});
	},

	wc: function(str, done){
		var filename = str;
		fs.readFile(filename, "utf8",  function (err,data) {  
			if (err) {    
				done("File does not exist");  
			}  
			var array = data.toString().split("\n");
			done("Lines: " + array.length.toString());
		});
	},

	uniq: function(str, done){
		var filename = str;
		fs.readFile(filename, "utf8",  function (err,data) {  
			if (err) {    
				done("File does not exist");  
			}
			var array = data.toString().split("\n");
			for(var i=0; i<array.length; i++){
				if (array[i] === array[i+1]){
					array.splice(i, 1);
					i--;
				};
			};
			fs.writeFile(filename, array.join("\n"), function (err) {
  				if (err) throw err;
  				done("File saved as uniq");
			})
		});
	},

	curl: function(str, done){
		if ((str.indexOf("http") !== 0) || (str.indexOf("https") !== 0)){
			if (str.indexOf("www.") !== 0){
				str = "http://www." + str;
			}else{
				str = "http://" + str;
			}
		}
		request(str, function (error, response, body) {
			if (!error && response.statusCode == 200) {
				done("Requesting");    
				done(body); // Show the HTML for the Google homepage.  
			}

		})


	}

}