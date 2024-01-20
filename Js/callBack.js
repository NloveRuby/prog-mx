function greet(name, callback) {
    console.log('Hello, ' + name + '!');
    callback();
  }
  
  function sayGoodbye() {
    console.log('Goodbye!');
  }
  
  greet('John', sayGoodbye);
  
/*In this example, the greet function takes two parameters: name and callback. It logs a greeting message to the console and then calls the callback function. The sayGoodbye function is defined separately and serves as the callback function. When greet is called with the name 'John' and the sayGoodbye function as the callback, it logs "Hello, John!" and then executes the sayGoodbye function, which logs "Goodbye!" to the console.

The use of a callback function allows for the execution of code in a specific order or in response to certain events. It provides flexibility and enables asynchronous behavior in JavaScript.*/


// Example 2: Asynchronous Callback with setTimeout

function delayedGreeting(name, callback) {
  setTimeout(function() {
    console.log('Hello, ' + name + '!');
    callback();
  }, 2000);
}

function sayGoodbye() {
  console.log('Goodbye!');
}

delayedGreeting('John', sayGoodbye);


// Example 3: Callback with Parameters

function calculate(num1, num2, callback) {
  let result = num1 + num2;
  callback(result);
}

function displayResult(result) {
  console.log('The result is: ' + result);
}

calculate(5, 3, displayResult);


// Example 4: Callback in Array's forEach

let fruits = ['Apple', 'Banana', 'Orange'];

fruits.forEach(function(fruit) {
  console.log(fruit);
});


// Example 5: Callback in Array's map

let numbers = [1, 2, 3, 4, 5];

let doubledNumbers = numbers.map(function(number) {
  return number * 2;
});

console.log(doubledNumbers);


// Example 6: Callback in Array's filter

let numberk = [1, 2, 3, 4, 5];

let evenNumbers = numberk.filter(function(number) {
  return number % 2 === 0;
});

console.log(evenNumbers);


// Example 7: Callback in Array's reduce

let numberz = [1, 2, 3, 4, 5];

let sum = numbez.reduce(function(acc, number) {
  return acc + number;
}, 0);

console.log(sum);


// Example 8: Callback in Event Listener

let button = document.querySelector('button');

function handleClick() {
  console.log('Button clicked!');
}

button.addEventListener('click', handleClick);


// Example 9: Callback in AJAX Request

function fetchData(url, callback) {
  let xhr = new XMLHttpRequest();
  xhr.open('GET', url);
  xhr.onload = function() {
    if (xhr.status === 200) {
      callback(JSON.parse(xhr.responseText));
    }
  };
  xhr.send();
}

function displayData(data) {
  console.log(data);
}

fetchData('https://api.example.com/data', displayData);


// Example 10: Callback in Promises

function fetchData(url) {
  return new Promise(function(resolve, reject) {
    let xhr = new XMLHttpRequest();
    xhr.open('GET', url);
    xhr.onload = function() {
      if (xhr.status === 200) {
        resolve(JSON.parse(xhr.responseText));
      } else {
        reject(xhr.statusText);
      }
    };
    xhr.onerror = function() {
      reject('Network error');
    };
    xhr.send();
  });
}

function displayData(data) {
  console.log(data);
}

function handleError(error) {
  console.error(error);
}

fetchData('https://api.example.com/data')
  .then(displayData)
  .catch(handleError);


// These examples demonstrate different scenarios where callback functions are commonly used, such as in basic function calls, asynchronous operations, array methods, event listeners, AJAX requests, and Promises.