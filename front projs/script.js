const hourElment = document.getElementById("hour");
const minutElement = document.getElementById("minutes");
const secondsElement = document.getElementById("seconds");
const ampmEl = document.getElementById("ampm");

function updateClock() {
  let h = new Date().getHours();
  let m = new Date().getMinutes();
  let s = new Date().getSeconds();
  let ampm = "AM";
  if (h > 12) {
    h = h - 12;
    ampm = "PM";
  }

  h = h < 10 ? "0" + h : h;
  m = m < 10 ? "0" + m : m;
  s = s < 10 ? "0" + s : s;

  hourElment.innerText = h;
  minutElement.innerText = m;
  secondsElement.innerText = s;
  ampmEl.innerText = ampm;
//   setTimeout(updateClock, 1000);
  setTimeout(() => {
    updateClock();
  }, 1000);
}

updateClock();

// how the code works
/*
The updateClock function is defined to update the time displayed on the clock. It retrieves the current hour, minute, and second using the getHours, getMinutes, and getSeconds methods of the Date object, respectively.

The code then checks if the hour is greater than 12. If it is, it subtracts 12 from the hour and sets the ampm variable to "PM". This conversion is done to display the time in a 12-hour format.

Next, the code adds leading zeros to the hour, minute, and second values if they are less than 10. This ensures that the time is displayed with two digits for each component.

The updated hour, minute, second, and am/pm values are then assigned to the corresponding HTML elements using the innerText property.

Finally, the setTimeout function is used to call the updateClock function again after a delay of 1 second (1000 milliseconds). This creates a continuous loop that updates the clock every second.

By calling the updateClock function initially, the clock is immediately updated with the current time.*/ 