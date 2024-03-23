function receivesAFunction(callback) {
    callback();
  }
  function returnsANamedFunction() {
    function namedFunction() {
      console.log("I am a named function");
    }
    return namedFunction;
  }
  function returnsAnAnonymousFunction() {
    return function () {
      console.log("I am an anonymus function");
    };
  }
  
  receivesAFunction(function () {
    console.log("Ofcos am a callback function, so I have been called back!");
  });
  
  const namedFunction = returnsANamedFunction();
  namedFunction(); 
  
  const anonymousFunction = returnsAnAnonymousFunction();
  anonymousFunction(); 
  