

// function greet(name) {
//     alert("Hello, " + name + "!");
//   }
//   greet("Nasr");
  
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