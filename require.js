var greet = require('./greet.js'),
		name = process.argv[2] || name;

// write to command line 
process.stdout.write(greet(name));