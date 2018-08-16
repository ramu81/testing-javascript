let expect = require('chai').expect;
let factorial = require('../src/factorial');
describe('factorial test',function(){
	it('Should pass this Canary Test',function(){
		expect(true).to.be.true;
	});
	it('It should return -1 for input -100',function(){
		expect(factorial(-100)).to.be.eql(-1);
	});
	it('It should return 0 for input 0',function(){
		expect(factorial(0)).to.be.eql(	1);
	});
	it('It should return 6 for input 3',function(){
		expect(factorial(3)).to.be.eql(6);
	});	
});