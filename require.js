var greet = require('./greet.js'),
		name = process.argv[2] || name;

// take command line input 
process.stdout.write(greet(name));