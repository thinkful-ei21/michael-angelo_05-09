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

function keyDeleter(obj) {
  delete obj.foo;
  delete obj.bar;
  return obj;
}

var sampleObj = {
  foo: 'foo', 
  bar: 'bar', 
  bizz: 'bizz', 
  bang: 'bang'
}

// console.log(keyDeleter(sampleObj));

/*
a function called makeStudentReport that takes a single argument, data. 
data is an array of objects. Each object in the array represents a 
student and their letter grade for a course — 
for example, {name: 'Johnny Robot', grade: 'C'}.
akeStudentReport should return an array of strings. 
For each item in data, 
return a string that looks like this: '[name]: [grade]'.
*/
function makeStudentReport(data) {
  let newArr = [];
  // for(let i=0; i<data.length; i++) {
  //   newArr.push(`${data[i].name}: ${data[i].grade}`);
  // }
  data.forEach(key => 
    newArr.push(`${key.name}: ${key.grade}`));
  return newArr;
}

const data = [
  { name: 'Jane Doe', grade: 'A' },
  { name: 'John Dough', grade: 'B' },
  { name: 'Jill Do', grade: 'A' },
];
// console.log(makeStudentReport(data));

function enrollInSummerSchool(students) {
  students.forEach(function (student) {
    student.status = 'In Summer school';
  });
  return students;
};

const studentData = [
  {
    name: 'Tim',
    status: 'Current student',
    course: 'Biology',
  },
  {
    name: 'Sue',
    status: 'Withdrawn',
    course: 'Mathematics',
  },
  {
    name: 'Liz',
    status: 'On leave',
    course: 'Computer science',
  },
];

// console.log(enrollInSummerSchool(studentData));

/*
This function takes 2 arguments, items and idNum. 
items is an array of objects. 
idNum is the id we're trying to find in items. 
The function should look for an item with the id idNum 
in the array items. If found, it should return that item.
*/

const scratchData = [
  { id: 22, foo: 'bar' },
  { id: 28, foo: 'bizz' },
  { id: 19, foo: 'bazz' },
];

function findById(items, idNum) {
  let newObj = {};
  items.forEach(function (key) {
    if (key.id === idNum ) {
      newObj = key;
    }
  });
  return newObj;
}

// console.log(findById(scratchData, 22));

const objectA = {
  id: 2,
  name: 'Jane Doe',
  age: 34,
  city: 'Chicago',
};

// running the function with `objectB` and `expectedKeys`
// should return `false`
const objectB = {
  id: 3,
  age: 33,
  city: 'Peoria',
};

const expectedKeys = ['id', 'name', 'age', 'city'];

function validateKeys(object, expectedKeys) {
  let match = false;

  if (Object.keys(object).length === expectedKeys.length) {
    compareKeys(Object.keys(object), expectedKeys);
  } 
  
  function compareKeys (obj, keys) {
    for (let i = 0; i < obj.length; i++) {
      for (let j = 0; j < keys.length; j++) {
        if (obj[i].indexOf(keys[j]) >= 0) {
          match = true;
        } else {
          match = false;
        }
      }
    }
  }
  console.log(match);
}

validateKeys(objectA, expectedKeys);
validateKeys(objectB, expectedKeys);