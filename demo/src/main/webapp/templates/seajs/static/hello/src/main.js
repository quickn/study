define(function(require) {

  var Spinning = require('./spinning');
  console.log(Spinning);
  var s = new Spinning('#container');
  s.render();
  
  var test = require('./test');
  
  console.log(test);
  
  console.log(test.foo);
  test.doSomething();
});

