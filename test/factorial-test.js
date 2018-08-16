let expect = require('chai').expect;
let factorial = require('../src/factorial');

describe('factorial test',function(){
		
	it('It should return 1 for input 0',function(){
		expect(factorial(0)).to.be.eql(	1);
	});
	
	it('It should return 6 for input 3',function(){
		expect(factorial(3)).to.be.eql(6);
	});	
	
	it('It should return Exception for input -1',function(){
		
		expect(function() { factorial(-1)}).to.throw("Nagative input not expected.")
		
	});
});