// command line utility
function clu() {
	var greet = require('./greet.js');
	var result = greet(process.argv[2]);
	process.stdout.write(result);
	return result;
}

module.exports = clu;