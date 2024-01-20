// Concise Method Syntax (ES6):

const person = {
  firstName: 'John',
  lastName: 'Doe',
  greet() {
    console.log(`Hello, ${this.firstName} ${this.lastName}!`);
  }
};

person.greet(); // Outputs: Hello, John Doe!
