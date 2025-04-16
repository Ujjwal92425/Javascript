// 🕒 Advanced Project 1: Digital Clock (Console Version)
// Goal: Har second mein current time print ho, like a real clock.

// 🧠 Hint: Use new Date() to get current time.

// TODO: Create a digital clock that prints HH:MM:SS every second
// Output Example: 14:23:07
//! My code
// let currentTime = setInterval (()=> {
//     let currTime =  new Date();
//     console.log("Time : "+currTime)
// },1000)

//* ChatGPT
// let currentTime = setInterval(() => {
//     let now = new Date();
//     let hours = String(now.getHours()).padStart(2, '0');
//     let minutes = String(now.getMinutes()).padStart(2, '0');
//     let seconds = String(now.getSeconds()).padStart(2, '0');
  
//     console.log(`⏰ Time: ${hours}:${minutes}:${seconds}`);
//   }, 1000);
  
//*⏱️ Advanced Project 2: Start/Stop Timer (Console Simulation)
// Goal:
// Timer start hote hi seconds count kare.
// 5 seconds baad automatically stop ho jaye.
//? Print: "Timer started...", "1 second passed", ... "Timer stopped."
// TODO: Start a timer that prints each second for 5 seconds
// Output Example:
// Timer started...
// 1 second passed
// 2 second passed
// ...
// Timer stopped.

// function Timer() {
//     console.log("Timer Started...");
//     let count = 1;
//     let stopWatch = setInterval(() => {
//         console.log(count + " second passed");
//         count++;

//         if (count > 5) {  // Jab count 5 se badh jaye, tab timer ko stop karo
//             clearInterval(stopWatch);
//             console.log("Timer stopped");
//         }
//     }, 1000);
// }

// Timer();

//? Timer with Pause Resume  😄

function TimerWithPause() {
    let count = 0;
    let isPaused = false;
    let timeoutId;

    console.log("Timer Started...");

    function startTimer() {
        timeoutId = setTimeout(() => {
            if (!isPaused) {
                count++;
                console.log(count + " second passed");
                startTimer(); // Recursively call to keep it running
            }
        }, 1000);
    }

    function pauseTimer() {
        clearTimeout(timeoutId);
        isPaused = true;
        console.log("Timer Paused...");
    }

    function resumeTimer() {
        if (isPaused) {
            isPaused = false;
            console.log("Timer Resumed...");
            startTimer();
        }
    }

    // Start the timer initially
    startTimer();

    // Simulating pause and resume after 3 seconds
    setTimeout(pauseTimer, 3000);
    setTimeout(resumeTimer, 6000); // Resume after another 3 seconds
}

TimerWithPause();

