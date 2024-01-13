

function greet(name) {
  alert("Hello, " + name + "!");
}
greet("Nasr");

function add(a, b) {
  return a + b;
}
var result = add(3, 5);
console.log(result);
function multiply(a, b) {
  return a * b;
}
var result = multiply(3, 5);
console.log(result);
function divide(a, b) {
  return a / b;
}
var result = divide(10, 2);
console.log(result);
function subtract(a, b) {
  return a - b;
}
var result = subtract(10, 2);
console.log(result);
function square(a) {
  return a * a;
}
var result = square(5);
console.log(result);
function cube(a) {
  return a * a * a;
}
var result = cube(5);
console.log(result);
function isEven(number) {
  return number % 2 === 0;
}
var result = isEven(4);
console.log(result);
var result = isEven(7);
console.log(result);
function factorial(number) {
  if (number === 0 || number === 1) {
    return 1;
  } else {
    return number * factorial(number - 1);
  }
}
var result2 = factorial(5);
console.log(result2);


function printNumbers() {
  for (let i = 1; i <= 10; i++) {
    console.log(i);
  }
}
printNumbers();

function printEvenNumbers() {
  for (let i = 2; i <= 10; i += 2) {
    console.log(i);
  }
}
printEvenNumbers();  // Corrected function call

// create an object
var person = {
  name: "John",
  age: 30,
  city: "New York"
};
// access object properties
console.log(person.name); // Output: "John"
console.log(person.age); // Output: 30
console.log(person.city); // Output: "New York"
// modify object properties
person.age = 31;
console.log(person.age); // Output: 31
// add new property
person.country = "USA";
console.log(person.country); // Output: "USA"
// remove property
delete person.city;
console.log(person.city); // Output: undefined
// check if property exists
console.log("name" in person); // Output: true
console.log("city" in person); // Output: false
// loop through object properties
for (var key in person) {
  console.log(key + ": " + person[key]);
}
// create an array
var numbers = [1, 2, 3, 4, 5];
// access array elements
console.log(numbers[0]); // Output: 1
console.log(numbers[2]); // Output: 3
// modify array elements
numbers[1] = 10;
console.log(numbers[1]); // Output: 10
// add new element to the end of the array
numbers.push(6);
console.log(numbers); // Output: [1, 10, 3, 4, 5, 6]
// remove element from the end of the array
numbers.pop();
console.log(numbers); // Output: [1, 10, 3, 4, 5]
// add element to the beginning of the array
numbers.unshift(0);
console.log(numbers); // Output: [0, 1, 10, 3, 4, 5]
// remove element from the beginning of the array
numbers.shift();
console.log(numbers); // Output: [1, 10, 3, 4, 5]
// check if element exists in the array
console.log(numbers.indexOf(3) !== -1); // Output: true
console.log(numbers.indexOf(7) !== -1); // Output: false
// loop through array elements
for (var i = 0; i < numbers.length; i++) {
  console.log(numbers[i]);
}

const fruits = ["apple", "banana", "orange"];
// Add a new fruit to the end

const list=[
  name:"Nasr",
  age:20,
  city:"Karachi",
  country:"Pakistan",
  greet:function(){
    console.log("Hello, my name is " + this.name + " and I am " + this.age)
  }
];
consol.log(list.greet());  

// create a nested array
const matrix = [
  [1, 2, 3],
  [4, 5, 6],
  [7, 8, 9]
];

// access elements
console.log(matrix[0][0]); // Output: 1
console.log(matrix[1][1]); // Output: 5
console.log(matrix[2][2]); // Output: 9

// modify elements
matrix[1][1] = 10;
console.log(matrix[1][1]); // Output: 10

// add a new row
matrix.push([10, 11, 12]);
console.log(matrix); // Output: [[1, 2, 3], [4, 10, 6], [7, 8, 9], [10, 11, 12]]

// array methods
const numbers = [1, 2, 3, 4, 5];

// convert array to string
const string = numbers.toString();
console.log(string); // Output: "1,2,3,4,5"

// join elements of an array
const joined = numbers.join("-");
console.log(joined); // Output: "1-2-3-4-5"

// remove last element from an array
const popped = numbers.pop();
console.log(numbers); // Output: [1, 2, 3, 4]
console.log(popped); // Output: 5

// remove first element from an array
const shifted = numbers.shift();
console.log(numbers); // Output: [2, 3, 4]
console.log(shifted); // Output: 1

// add element to the beginning of an array
numbers.unshift(1);
console.log(numbers); // Output: [1, 2, 3, 4]

// add element to the end of an array
numbers.push(5);
console.log(numbers); // Output: [1, 2, 3, 4, 5]

// find index of an element in an array
const index = numbers.indexOf(3);
console.log(index); // Output: 2

// remove element by index
numbers.splice(index, 1);
console.log(numbers); // Output: [1, 2, 4, 5]

// remove elements by index
numbers.splice(1, 2);
console.log(numbers); // Output: [1, 5]

// remove elements by value
numbers.splice(numbers.indexOf(4), 1);
console.log(numbers); // Output: [1, 5]

// slice an array
const sliced = numbers.slice(1, 3);
console.log(sliced); // Output: [5, 4]

// sort an array
const sorted = numbers.sort();
console.log(sorted); // Output: [1, 2, 3, 4, 5]

// reverse an array
const reversed = numbers.reverse();
console.log(reversed); // Output: [5, 4, 3, 2, 1]

// concatenate arrays
const concatenated = numbers.concat([6, 7, 8]);
console.log(concatenated); // Output: [5, 4, 3, 2, 1, 6, 7, 8]

// null vs undefined
let x = null;
console.log(typeof x); // Output: object

let y;
console.log(typeof y); // Output: undefined

// booleans
let isTrue = true;
let isFalse = false;

// comparison operators
let a = 5;
let b = 10;
console.log(a == b); // Output: false
console.log(a != b); // Output: true
console.log(a > b); // Output: false
console.log(a < b); // Output: true
console.log(a >= b); // Output: false
console.log(a <= b); // Output: true

// logical operators
let c = true;
let d = false;
console.log(c && d); // Output: false
console.log(c || d); // Output: true
console.log(!c); // Output: false

// ternary operator
let marks = prompt('Enter your marks:');
let result = (marks >= 40) ? 'pass' : 'fail';
console.log(`You ${result} the exam.`);

// switch statement
let day = prompt('Enter a day of the week:');
let dayName;

switch (day) {
  case 'Monday':
    dayName = 'It\'s Monday!';
    break;
  case 'Tuesday':
    dayName = 'It\'s Tuesday!';
    break;
  case 'Wednesday':
    dayName = 'It\'s Wednesday!';
    break;
  case 'Thursday':
    dayName = 'It\'s Thursday!';
    break;
  case 'Friday':
    dayName = 'It\'s Friday!';
    break;
  case 'Saturday':
    dayName = 'It\'s Saturday!';
    break;
  case 'Sunday':
    dayName = 'It\'s Sunday!';
    break;
  default:
    dayName = 'Invalid day!';
}

console.log(dayName);function greet(name) {
    console.log("Hello, " + name + "!");
  }
  
  greet("Nasr");
  
  function add(a, b) {
    return a + b;
  }
  var resultAdd = add(3, 5);
  console.log(resultAdd);
  
  function multiply(a, b) {
    return a * b;
  }
  var resultMultiply = multiply(3, 5);
  console.log(resultMultiply);
  
  function divide(a, b) {
    return a / b;
  }
  var resultDivide = divide(10, 2);
  console.log(resultDividfunction greet(name) {
    console.log("Hello, " + name + "!");
  }
  
  greet("Nasr");
  
  function add(a, b) {
    return a + b;
  }
  var resultAdd = add(3, 5);
  console.log(resultAdd);
  
  function multiply(a, b) {
    return a * b;
  }
  var resultMultiply = multiply(3, 5);
  console.log(resultMultiply);
  
  function divide(a, b) {
    return a / b;
  }
  var resultDivide = divide(10, 2);
  console.log(resultDivide);
  
  function subtract(a, b) {
    return a - b;
  }
  var resultSubtract = subtract(10, 2);
  console.log(resultSubtract);
  
  function square(a) {
    return a * a;
  }
  var resultSquare = square(5);
  console.log(resultSquare);
  
  function cube(a) {
    return a * a * a;
  }
  var resultCube = cube(5);
  console.log(resultCube);
  
  function isEven(number) {
    return number % 2 === 0;
  }
  var resultIsEven1 = isEven(4);
  console.log(resultIsEven1);
  var resultIsEven2 = isEven(7);
  console.log(resultIsEven2);
  
  function factorial(number) {
    if (number === 0 || number === 1) {
      return 1;
    } else {
      return number * factorial(number - 1);
    }
  }
  var resultFactorial = factorial(5);
  console.log(resultFactorial);
  
  function printNumbers() {
    for (let i = 1; i <= 10; i++) {
      console.log(i);
    }
  }
  printNumbers();
  
  function printEvenNumbers() {
    for (let i = 2; i <= 10; i += 2) {
      console.log(i);
    }
  }
  printEvenNumbers();
  
  // create an object
  var person = {
    name: "John",
    age: 30,
    city: "New York"
  };
  // access object properties
  console.log(person.name); // Output: "John"
  console.log(person.age); // Output: 30
  console.log(person.city); // Output: "New York"
  // modify object properties
  person.age = 31;
  console.log(person.age); // Output: 31
  // add new property
  person.country = "USA";
  console.log(person.country); // Output: "USA"
  // remove property
  delete person.city;
  console.log(person.city); // Output: undefined
  // check if property exists
  console.log("name" in person); // Output: true
  console.log("city" in person); // Output: false
  // loop through object properties
  for (var key in person) {
    console.log(key + ": " + person[key]);
  }
  
  // create an array
  var numbers = [1, 2, 3, 4, 5];
  // access array elements
  console.log(numbers[0]); // Output: 1
  console.log(numbers[2]); // Output: 3
  // modify array elements
  numbers[1] = 10;
  console.log(numbers[1]); // Output: 10
  // add new element to the end of the array
  numbers.push(6);
  console.log(numbers); // Output: [1, 10, 3, 4, 5, 6]
  // remove element from the end of the array
  numbers.pop();
  console.log(numbers); // Output: [1, 10, 3, 4, 5]
  // add element to the beginning of the array
  numbers.unshift(0);
  console.log(numbers); // Output: [0, 1, 10, 3, 4, 5]
  // remove element from the beginning of the array
  numbers.shift();
  console.log(numbers); // Output: [1, 10, 3, 4, 5]
  // check if element exists in the array
  console.log(numbers.indexOf(3) !== -1); // Output: true
  console.log(numbers.indexOf(7) !== -1); // Output: false
  // loop through array elements
  for (var i = 0; i < numbers.length; i++) {
    console.log(numbers[i]);
  }
  
  const fruits = ["apple", "banana", "orange"];
  // Add a new fruit to the end
  fruits.push("grape");
  console.log(fruits);
  
  const list = {
    name: "Nasr",
    age: 20,
    city: "Karachi",
    country: "Pakistan",
    greet: function() {
      return "Hello, my name is " + this.name + " and I am " + this.age;
    }
  };
  console.log(list.greet());
  e);
  
  function subtract(a, b) {
    return a - b;
  }
  var resultSubtract = subtract(10, 2);
  console.log(resultSubtract);
  
  function square(a) {
    return a * a;
  }
  var resultSquare = square(5);
  console.log(resultSquare);
  
  function cube(a) {
    return a * a * a;
  }
  var resultCube = cube(5);
  console.log(resultCube);
  
  function isEven(number) {
    return number % 2 === 0;
  }
  var resultIsEven1 = isEven(4);
  console.log(resultIsEven1);
  var resultIsEven2 = isEven(7);
  console.log(resultIsEven2);
  
  function factorial(number) {
    if (number === 0 || number === 1) {
      return 1;
    } else {
      return number * factorial(number - 1);
    }
  }
  var resultFactorial = factorial(5);
  console.log(resultFactorial);
  
  function printNumbers() {
    for (let i = 1; i <= 10; i++) {
      console.log(i);
    }
  }
  printNumbers();
  
  function printEvenNumbers() {
    for (let i = 2; i <= 10; i += 2) {
      console.log(i);
    }
  }
  printEvenNumbers();
  
  // create an object
  var person = {
    name: "John",
    age: 30,
    city: "New York"
  };
  // access object properties
  console.log(person.name); // Output: "John"
  console.log(person.age); // Output: 30
  console.log(person.city); // Output: "New York"
  // modify object properties
  person.age = 31;
  console.log(person.age); // Output: 31
  // add new property
  person.country = "USA";
  console.log(person.country); // Output: "USA"
  // remove property
  delete person.city;
  console.log(person.city); // Output: undefined
  // check if property exists
  console.log("name" in person); // Output: true
  console.log("city" in person); // Output: false
  // loop through object properties
  for (var key in person) {
    console.log(key + ": " + person[key]);
  }
  
  // create an array
  var numbers = [1, 2, 3, 4, 5];
  // access array elements
  console.log(numbers[0]); // Output: 1
  console.log(numbers[2]); // Output: 3
  // modify array elements
  numbers[1] = 10;
  console.log(numbers[1]); // Output: 10
  // add new element to the end of the array
  numbers.push(6);
  console.log(numbers); // Output: [1, 10, 3, 4, 5, 6]
  // remove element from the end of the array
  numbers.pop();
  console.log(numbers); // Output: [1, 10, 3, 4, 5]
  // add element to the beginning of the array
  numbers.unshift(0);
  console.log(numbers); // Output: [0, 1, 10, 3, 4, 5]
  // remove element from the beginning of the array
  numbers.shift();
  console.log(numbers); // Output: [1, 10, 3, 4, 5]
  // check if element exists in the array
  console.log(numbers.indexOf(3) !== -1); // Output: true
  console.log(numbers.indexOf(7) !== -1); // Output: false
  // loop through array elements
  for (var i = 0; i < numbers.length; i++) {
    console.log(numbers[i]);
  }
  
  const fruits = ["apple", "banana", "orange"];
  // Add a new fruit to the end
  fruits.push("grape");
  console.log(fruits);
  
  const list = {
    name: "Nasr",
    age: 20,
    city: "Karachi",
    country: "Pakistan",
    greet: function() {
      return "Hello, my name is " + this.name + " and I am " + this.age;
    }
  };
  console.log(list.greet());
  

// loops
// for loop
for (let i = 1; i <= 5; i++) {
  console.log(i);
}

// while loop
let j = 1;
while (j <= 5) {
  console.log(j);
  j++;
}

// do-while loop
let k = 1;
do {
  console.log(k);
  k++;
} while (k <= 5);

// for-in loop
let person = {
  name: 'John',
  age: 30,
  city: 'New York'
};

for (let key in person) {
  console.log(key + ': ' + person[key]);
}

// for-of loop
let numberz = [1, 2, 3, 4, 5];

for (let number of numberz) {
  console.log(number);
}

// functions
function greet(name) {
  console.log('Hello, ' + name + '!');
}

greet('John');

// arrow function
let add = (a, b) => a + b;
console.log(add(2, 3));

// anonymous function
let multiply = function(a, b) {
  return a * b;
};
console.log(multiply(2, 3));

// IIFE (Immediately Invoked Function Expression)
(function() {
  console.log('Hello, world!');
})();

// closures
function outer() {
  let x = 10;

  function inner() {
    console.log(x);
  }

  return inner;
}

let closure = outer();
closure();

// promises
let promise = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve('Hello, world!');
  }, 1000);
});

promise.then((result) => {
  console.log(result);
});

// async/await
async function fetchData() {
  let response = await fetch('https://api.example.com/data');
  let data = await response.json();
  return data;
}

fetchData().then((data) => {
  console.log(data);
});

// classes
class Person {
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }

  greet() {
    console.log('Hello, my name is ' + this.name + ' and I am ' + this.age + ' years old.');
  }
}

let personn = new Person('John', 30);
person.greet();


// strings
let str = 'Hello, world!';
console.log(str.length); // Output: 13
console.log(str.toUpperCase()); // Output: HELLO, WORLD!
console.log(str.toLowerCase()); // Output: hello, world!
console.log(str.charAt(0)); // Output: H
console.log(str.indexOf('o')); // Output: 4
console.log(str.replace('world', 'universe')); // Output: Hello, universe!
console.log(str.split(',')); // Output: ['Hello', ' world!']
console.log(str.concat(' How are you?')); // Output: Hello, world! How are you?
console.log(str.slice(7, 12)); // Output: world
console.log(str.trim()); // Output: Hello, world!
console.log(str.match(/world/)); // Output: ['world']
console.log(str.includes('world')); // Output: true
console.log(str.startsWith('Hello')); // Output: true
console.log(str.endsWith('!')); // Output: true
// control flow
let age = prompt('Enter your age:');
if (age >= 18) {
  console.log('You are an adult.');
} else {
  console.log('You are a minor.');
}
// switch statement
let day = prompt('Enter a day of the week:');
switch (day) {
    case 'Sunday':
        console.log("It's Sunday!");
        break;
    case 'Monday':
        console.log("It's Monday");
        break;
    case 'Tuesday':
        console.log("It's Tuesday");
        break;
    case 'Wednesday':
        console.log("It's Wednesday");
        break;
    case 'Thursday':
        console.log("It's Thursday");
        break;
    case 'Friday':
        console.log("It's Friday");
        break;
    case 'Saturday':
        console.log("It's Saturday");
        break;
    default:
        console.log("Invalid day");
        break;
}
// loops
//loop string
let str2 = "Hello, world!";
for (let i = 0; i < str.length; i++) {
  console.log(str[i]);
}
// loop nested loop
for (let i = 1; i <= 5; i++) {
  for (let j = 1; j <= i; j++) {
    console.log(j);
  }

//append string
  let str = "Hello";
  str += ", world!";
  console.log(str); // Output: "Hello, world!"

    //format string
  let name = "John";
  let age = 30;
  let message = `My name is ${name} and I am ${age} years old.`;
  console.log(message); // Output: "My name is John and I am 30 years old."


  
//type conversion
let numStr = "10";
let num = parseInt(numStr);
console.log(num);
let strNum = 5;
let str = String(strNum);
console.log(str);
let isTrue = true;
let numBool = Number(isTrue);
console.log(numBool);


//type of
let x = 10;
console.log(typeof x); // Output: number

let y = "Hello, world!";
console.log(typeof y); // Output: string

let z = true;
console.log(typeof z); // Output: boolean


  //string concat
let str1 = "Hello";
let str2 = ", world!";
let result = str1.concat(str2);
console.log(result);

  //parse methods
let numStr = "10";
let num = parseInt(numStr);
console.log(num);
let strNum = 5;
let str = String(strNum);
console.log(str);
let isTrue = true;
let numBool = Number(isTrue);
console.log(numBool);
let x = 10;
console.log(typeof x); // Output: number
let y = "Hello, world!";
console.log(typeof y); // Output: string
let z = true;
console.log(typeof z); // Output: boolean

  // Date & time
  
let currentDate = new Date();
console.log(currentDate);

let currentDay = currentDate.getDay();
console.log(currentDay);

let currentMonth = currentDate.getMonth();
console.log(currentMonth);

let currentYear = currentDate.getFullYear();
console.log(currentYear);



  
