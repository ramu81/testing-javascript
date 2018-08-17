let expect = require('chai').expect;
let factorial = require('../src/factorial');

describe('factorial test',function(){
		
	[[0,1],[1,1],[2,2],[3,6],[5,120]].forEach(function(i){
	
	it('It should return '+i[1]+' input '+i[0],function(){
			expect(factorial(i[0])).to.be.eql(i[1]);
		});
		
	});
	
	it('It should return Exception for input -1',function(){
		
		expect(function() { factorial(-1)}).to.throw("Nagative input not expected.")
		
	});
	
});