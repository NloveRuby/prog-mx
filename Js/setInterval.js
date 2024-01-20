function greet() {
    console.log('Hello, world!');
  }
  
  // Call the greet function every 1 second
  const intervalId = setInterval(greet, 1000);
/*
In the above example, the greet() function is called every 1 second (1000 milliseconds) using setInterval(). The function will continue to be called until the interval is cleared.

To stop the interval and prevent further execution of the function, you can use the clearInterval() method and pass the interval ID as an argument:*/

clearInterval(intervalId);


// This will stop the execution of the function specified in setInterval().

// Remember to store the interval ID returned by setInterval() in a variable, as it is needed to clear the interval later.

// Create counter.

let count = 0;

function timer() {
  count++;
  console.log(`Timer count: ${count}`);
  
  if (count === 5) {
    clearInterval(intervalId);
    console.log('Timer stopped.');
  }
}

const intervalId2 = setInterval(timer, 1000);

/*let count = 0;

function timer() {
  count++;
  console.log(`Timer count: ${count}`);
  
  if (count === 5) {
    clearInterval(intervalId);
    console.log('Timer stopped.');
  }
}

const intervalId = setInterval(timer, 1000);
*/ 



// The setInterval() method in JavaScript is used to repeatedly call a function or execute a code snippet at a fixed time interval. Here's an overview of how to use setInterval():

// Syntax:

// setInterval(func, delay, arg1, arg2, ...);


// Parameters:

//     func: A function to be executed every delay milliseconds.
//     delay: The time interval between each execution of the function, in milliseconds.
//     arg1, arg2, ...: Optional arguments to be passed to the function.


// Return Value:

//     setInterval() returns an interval ID, which can be used to later cancel the interval using the clearInterval() method.
