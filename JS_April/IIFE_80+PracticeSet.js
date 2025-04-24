//1.	Write a simple IIFE to log "Hello World".
// (function hello() {
//   console.log("Hello ChatGPT");
// })();

//2.	Use IIFE to create private variable counter.

const counter = (function private() {
  let count = 0;

  return function increseCount() {
    count++;
    console.log("Count : ", count);
  };
})();
counter();
counter();

//3.	Create a function using IIFE to hide data (e.g. password).
const hide = (function hideData() {
  let otp = 7869;
  return function showOTP() {
    console.log("OTP : ", otp);
  };
})();
hide();

//4.	Use IIFE to initialize a module with private config.

//5.	Create a stopwatch with start/stop using IIFE.
const stopwatch = (function () {
    let time = 0;
    let intervalId;
  
    return {
      start: function () {
        if (!intervalId) {
          intervalId = setInterval(() => {
            time++;
            console.log("Time:", time+"s");
          }, 1000);
        }
      },
      stop: function () {
        clearInterval(intervalId);
        intervalId = null;
        console.log("Stopped at:", time+"s");
      },
      reset: function () {
        clearInterval(intervalId);
        time = 0;
        intervalId = null;
        console.log("Reset to 0");
      }
    };
  })();
stopwatch.start() 
stopwatch.stop() //// Call stopwatch.stop() in console after a few seconds to stop
