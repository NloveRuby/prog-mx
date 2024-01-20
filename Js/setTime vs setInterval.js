function greet() {
    console.log('Hello, world!');
  }
  
  // Call the greet function after a delay of 2 seconds
  setTimeout(greet, 2000);

  
  let count = 0;

function timer() {
  count++;
  console.log(`Timer count: ${count}`);
  
  if (count === 5) {
    clearInterval(intervalId);
    console.log('Timer stopped.');
  }
}

// Call the timer function every 1 second
const intervalId = setInterval(timer, 1000);







/*The setTimeout() and setInterval() functions in JavaScript are used for scheduling code execution at specific time intervals. Here are the differences between the two:

    setTimeout():
        setTimeout() is used to execute a function once after a specified delay.
        It takes two parameters: the function to be executed and the delay in milliseconds.
        After the specified delay, the function is executed only once.
        Example: setTimeout(function() { console.log('Hello'); }, 1000);

    setInterval():
        setInterval() is used to repeatedly execute a function at a specified time interval.
        It takes two parameters: the function to be executed and the delay in milliseconds.
        The function is executed repeatedly at the specified interval until it is stopped.
        Example: setInterval(function() { console.log('Hello'); }, 1000);


The main difference between setTimeout() and setInterval() is that setTimeout() executes the function only once after the specified delay, while setInterval() continues to execute the function at the specified interval until it is stopped.

It's important to note that both setTimeout() and setInterval() return an identifier (timer ID) that can be used to cancel the scheduled execution using the clearTimeout() or clearInterval() functions, respectively.

When choosing between setTimeout() and setInterval, consider whether you need the code to execute only once or repeatedly at a specific interval.*/ 