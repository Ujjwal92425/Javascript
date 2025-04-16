//* 🔧 Practice 1: Simple Delay with setTimeout
// TODO: Write code to print "Hello Bhai!" after 3 seconds
let PrintHello = setTimeout(() => {
  console.log("Hello Bhai");
}, 3000);

//* 🔧 Practice 2: Repeating Message with setInterval
// TODO: Write code to print "Coding kar bhai!" every 2 seconds

let PrintInterval = setInterval(() => {
  console.log("Coding  kar bhai");
}, 2000);

//* 🔧 Practice 3: Countdown Timer
// TODO: Create a countdown from 5 to 0, one number per second

let initialCount = 5;
let counDown = setInterval(() => {
  console.log("Tic Tic " + initialCount--);
  if(initialCount < 0) {
    clearInterval(counDown)
  }
}, 1000);

//* 🔧 Practice 4: Clear Timeout Before It Runs
// TODO: Set a timeout to print "You won't see this"
// But cancel it immediately using clearTimeout

let viewFast = setTimeout(() => {
  console.log("You won't see this ");
}, 1000);
clearTimeout(viewFast);
