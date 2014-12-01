define(function(require, exports, module) {

	exports.foo = 'bar';
	exports.doSomething  = function(){
		console.log('doSomething');
	};
	//也可以
	module.exports={
		foo : 'bar',
		doSomething:function(){
			console.log('dosome');
		}
	}
	
});
