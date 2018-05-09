'use strict';

//  write code for the createMyObject function so that it returns an object with the following key value pairs:

function createMyObject() {
  const obj = {
    foo: 'bar',
    answerToUniverse: 42,
    'olly olly': 'oxen free',
    sayHello: function() {
      return 'hello';
    }
  };
  return obj;
}

console.log(createMyObject());
