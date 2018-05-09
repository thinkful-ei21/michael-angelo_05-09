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

// console.log(createMyObject());

function updateObject(obj)
{
  obj.foo = 'foo';
  obj.bar = 'bar';
  obj.bizz = 'bizz';
  obj.bang = 'bang';

  return obj;
}

let oldObj = { color: 'green', foo: 'adfasdf'};

// console.log(updateObject(oldObj));

/*
Modify personMaker.fullName to be a function that uses self-reference 
(via this) in order to return the firstName and lastName properties separated by a space.
*/
function personMaker() {
  var person = {
    firstName: 'Paul',
    lastName: 'Jones',
    fullName: function() {
      return `${this.firstName}  ${this.lastName}`;
    }
  };
  return person.fullName();
}
// console.log(personMaker());