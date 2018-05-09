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
};

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
}

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

// function validateKeys(object, expectedKeys) {
//   let match = false;

//   if (Object.keys(object).length === expectedKeys.length) {
//     compareKeys(Object.keys(object), expectedKeys);
//   } 
  
//   function compareKeys (obj, keys) {
//     for (let i = 0; i < obj.length; i++) {
//       for (let j = 0; j < keys.length; j++) {
//         if (obj[i].indexOf(keys[j]) >= 0) {
//           match = true;
//         } else {
//           match = false;
//         }
//       }
//     }
//   }
//   console.log(match);
// }

// validateKeys(objectA, expectedKeys);
// validateKeys(objectB, expectedKeys);

// Or
function validateKeys(object, expectedKeys) {
  
  if (Object.keys(object).length !== expectedKeys.length) {
    return false;
  } 
  
  // iterate over each expected key and verify that it's found in `object`.
  for (let i = 0; i < expectedKeys.length; i++) {
    if (!Object.keys(object).find(key => key === expectedKeys[i])) {
      return false;
    }
  }
  
  return true;
}

/*
Create an object called loaf using an object initializer ({}) with two properties: 
flour, which should be set to 300 and water which should be set to 210.
Use console.log to print the flour and water properties.
Add an empty method to the loaf object called hydration.
Fill in the body of the method to return the hydration of the loaf 
(the water divided by the flour multiplied by 100).
Call the hydration method and use console.log to print the result.
*/

const loaf = {
  flour: 300,
  water: 210,
  hydration: function() {
    return (loaf.water / loaf.flour) * 100;
  }
};
// console.log(loaf.hydration());

let myObj = {
  'foo': 424,
  'bar': 'asdfaf',
  'fum': 5,
  'quuz': true,
  'spam': function () {
    return false;
  }
}

function objectLoop(obj) {
  for (let key in obj) {
 //   console.log(obj[key]);
  }
}

objectLoop(myObj);

/*
Create an object with a property called meals which is an array of strings: 
'breakfast', 'second breakfast', 'elevenses', 'lunch', 'afternoon tea', 'dinner', 'supper'.
Use console.log to show the name of a hobbit's fourth meal of the day.
Don't forget that humans and hobbits count from 1, but computers count from 0.
*/

const meal = {
  meals: ['breakfast', 'second breakfast', 'elevenses', 'lunch', 'afternoon tea', 'dinner', 'supper']
};

// console.log(meal.meals[3]);

let people = [
  { 
    name: 'bill', 
    jobTitle: 'builder'
  },
  { 
    name: 'steven',
    jobTitle: 'painter'
  },
  {
    name: 'william',
    jobTitle: 'drawing'
  } ,
  {
    name: 'josh',
    jobTitle: 'baseball'
  },
  {
    name: 'tarren',
    jobTitle: 'plays fortnite'
  }
]

function showInfo(arr) {
  arr.forEach(function (item) {
    console.log(`${item.name}: ${item.jobTitle}`);
  });
}

// showInfo(people);

/*

Expand on the previous example by adding a boss property to everyone except the owner of the company.
Change the iteration to print out messages in this format: "${title} ${name} reports to ${boss}.". 
For example: Junior Engineer Bob reports to Fred..
What gets printed out for the owner?
Adjust the message so that people with no boss display "${title} ${name} doesn't report to anybody." 
- for example, Founder John doesn't report to anybody.
*/


let people2 = [
  { 
    name: 'bill', 
    jobTitle: 'owner'
  },
  { 
    name: 'steven',
    jobTitle: 'painter'
  },
  {
    name: 'william',
    jobTitle: 'drawing'
  } ,
  {
    name: 'josh',
    jobTitle: 'baseball'
  },
  {
    name: 'tarren',
    jobTitle: 'plays fortnite'
  }
]

function addOwner(arr) {
  arr.forEach(function(item) {
    if(item.jobTitle !== 'owner') {
      item.boss = 'bill';
      console.log(`${item.jobTitle} ${item.name} reports to ${item.boss}`);
    } else {
      console.log(`${item.jobTitle} ${item.name} doesn't report to anybody`);
    }
  });
}

// addOwner(people2);
