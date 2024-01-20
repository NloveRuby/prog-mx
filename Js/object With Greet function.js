const person = {
    name: "John",
    age:12,
    greet: function() {
      console.log(`Hello, my name is  ${this.name} and my age is ${this.age}!`);
    }
  };
  
  person.greet(); // Outputs: Hello, John!
// //   use this keyword so that propos can be accessed.

const person2 = {
    firstName: 'John',
    lastName: 'Doe',
    greet: function() {
      console.log(`Hello, ${this.firstName} ${this.lastName}!`);
    }
  };
  
  console.log(person2.greet()); // Outputs: Hello, John Doe!
  