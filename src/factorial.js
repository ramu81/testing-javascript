let _ = require('underscore');

let factorial = function(num){
	
	if (num < 0) throw new Error('Nagative input not expected.');    
	
	return _.range(1,num +1 )
			.reduce(function(p,e) { return p * e },1);
}
module.exports = factorial;