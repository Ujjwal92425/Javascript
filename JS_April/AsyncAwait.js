//Fast Process
/*
const arr = [1, 2, 3];  // Array of numbers

async function fastPrint() {
  // Step 1: Create an array of promises using map
  const tasks = arr.map(num => {
    return new Promise(res => {
      setTimeout(() => {
        console.log("Num:", num);  // Print each number after 1 sec
        res();  // Resolve the promise after the task is done
      }, 1000);  // 1 second delay for each task
    });
  });

  // Step 2: Use Promise.all to wait for all promises to resolve
  await Promise.all(tasks);  // Wait for all promises to finish
  console.log("All done!");  // Print when all tasks are completed
}

fastPrint();
*/

// 🔥 Challenge: Print squares of numbers in parallel (after 1s delay)

// const nums = [2, 4, 6];
// ✅ Create a function printSquares()
// ✅ For each number:

// Wait 1 second (simulate async with setTimeout)

// Print: Square of 2 is 4, Square of 4 is 16...

// ✅ Sab squares ek saath print ho 1 second baad
// ✅ At the end, print: "Squares printed!"

// Hint: Use: map() , new Promise() ,setTimeout() ,Promise.all() ,await

// const arr = [2, 4, 6, 8, 10];
// async function printSquare() {
//   const task = arr.map((nums) => {
//     return new Promise((res) => {
//       setTimeout(() => {
//         console.log("Square : " + nums * nums);
//         res();
//       }, 1000);
//     });
//   });

//   let result = await Promise.all(task);
//   console.log("All done!");
// }

// printSquare();

const number = [1, 2, 3, 4, 5, 6, 7, 8, 9];

async function getEven() {
  const task = number.map(num => {
    // Creating a promise that resolves after 1 second if the number is even
    return new Promise(res => {
      setTimeout(() => {
        if (num % 2 === 0) {
          console.log("Even:", num);
        }
        res(); // Resolving the promise after the log
      }, 1000);
    });
  });

  // Wait for all promises to resolve
  await Promise.all(task);
  console.log("Done");
}

getEven();
