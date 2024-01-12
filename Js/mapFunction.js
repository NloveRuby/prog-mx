// Numerical Transformation:
const salaries = [60000, 55000, 75000, 65000];
let newSalaries = salaries.map((salary) => salary * 1.2);
console.log(newSalaries); // [72000, 66000, 90000, 78000]
//String Manipulation:
const names1 = ["Alice", "Bob", "Charlie"];
let greting = names1.map((name) => `Hello , ${name}!`);
console.log(greting);

const names = ["Alice", "Bob", "Charlie"];
let greetings = names.map((name) => `HI, ${name}!`);
console.log(greetings); // ["Hello, Alice!", "Hello, Bob!", "Hello, Charlie!"]

const dads = ['Nasr', 'Omar', 'x', 'y', 'z'];
let HiDads = dads.map((dad) => `hello, ${dad}!`);
console.log(HiDads);
// Object Transformation:

const users = [
    { id: 1, name: "Alice" },
    { id: 2, name: "Bob" },
    { id: 3, name: "Charlie" }
  ];
  let userIds = users.map((user) => user.id);
  console.log(userIds); // [1, 2, 3]
// Performing Mathematical Operations:
const numberz = [4, 9, 16, 25];
let squareRoots = numberz.map(Math.sqrt);
console.log(squareRoots); // [2, 3, 4, 5]

// map functions
function multiplyByTwo(arr) {
    return arr.map((num) => num * 2);
}
function addPrefix(arr, prefix) {
    return arr.map((word) => `${prefix}-${word}`);
}
multiplyByTwo([1, 2, 3]);
console.log(addPrefix(['one', 'two', 'three'], 'Word'));
// filter() method creates a new array with all elements that pass the test implemented by the
// provided function. It does not modify the existing array.Given arrays :
const numbers = [4, 2, 7, 5, 1];
let isEven = (n) => n % 2 === 0;
let evenNumbers = numbers.filter(isEven);
console.log(evenNumbers); //[4, 2, 6]
const words = ['apple', 'banana', 'cherry', 'date',
    'elderberry', 'fig', 'grapefruit'];
let hasVowels = (str) => /[aeiou]/i.test(str);
let fruitWords = words.filter(hasVowels);
console.log(fruitWords); //['apple', 'cherry', 'date


