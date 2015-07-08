var greet = require('../greet'),
		clu = require('../require'),
		expect = require('chai').expect;


// testing cases for 1. passing name variable to the func. 2. passing variable from command line

describe('greet.js', function() {
	it('will return "hello Meng" when entered Meng', function() {
		expect(greet('Meng')).to.equal('hello Meng');
	});
	it('will log "hello [user input name]" in the command line', function() {
		expect(clu()).to.equal('hello '+ process.argv[2]);
	});
});