const person = {
    firstName: "John",
    lastName: "Doe",
    age: 30,
    hobbies: ["reading", "coding", "traveling"],
    address: {
      street: "123 Main St",
      city: "New York",
      country: "USA"
    }
  };
  
  const jsonCode = JSON.stringify(person);
  console.log(jsonCode);
/*In the above code, we define an object called person with various properties such as firstName, lastName, age, hobbies, and address. The address property itself is an object with nested properties.

We then use the JSON.stringify() method to convert the person object into a JSON string. The resulting JSON string is stored in the jsonCode variable.

By calling console.log(jsonCode), you will see the JSON representation of the person object printed to the console.
Remember that JSON.stringify() is used to convert JavaScript objects into JSON strings. If you want to convert a JSON string back into a JavaScript object, you can use the JSON.parse() method.
*/   