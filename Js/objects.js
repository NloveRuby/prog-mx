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