//1.	Rewrite a Promise function using async/await.

// function resolveAfter1Sec() {
//     return new Promise((resolve) => {
//       setTimeout(() => {
//         resolve("Promise Resolved");
//       }, 1000);
//     });
//   }

//   async function PromiseAsync() {
//     const result = await resolveAfter1Sec();
//     console.log(result);
//   }

//   PromiseAsync();

//2.	Await two time-based tasks sequentially

// async function task() {
//     return new Promise((resolve, reject) => {
//         setTimeout(() => {
//             resolve("Promise Resolved")
//         },2000)
//     })
// }
// async function task1() {
//     const res1 =  await task()
//     console.log("Task 1 Resolved ", res1)
// }
// async function task2() {
//     const res2 =  await task()
//     console.log("Task 2 Resolved ", res2)
// }

// async function runSequentialTasks() {
//     await task1(); // First task runs
//     await task2(); // Then second task starts after first completes
//   }

//   runSequentialTasks();

// //4.	Use try/catch in async function. 5.	Return value from async function and use it.

// async function returnVal() {
//   try {
//     let num = Math.floor(Math.random() * 10);
//     console.log("Loading Data ...");
//     return new Promise((resolve, reject) => {
//       setTimeout(() => {
//         resolve(num);
//         console.log("Featched Data");
//       }, 3000);
//     });
//   } catch (error) {
//     console.log("Error in getting data");
//   }
// }
// async function getData() {
//     const res = await returnVal();
//     console.log("Data : ",res);
// }
// getData()

// ////Q1. Create a delay function that resolves after given seconds
// async function delay() {
//   const p = new Promise((resolve, reject) => {
//     setTimeout(() => {
//       console.log("Promise Resolved");
//       resolve("Ujjwal");
//     },2000);
//   });

//   const res = await p;
//   console.log(res);
// }
// delay();

//Q7. Call an async function inside a for loop
async function logDelay(i) {
  return new Promise((resolve) => {
    setTimeout(() => {
      console.log("Logging", i);
      resolve();
    }, 1000);
  });
}

async function loopWithAwait() {
  for (let i = 1; i <= 3; i++) {
    // Await here to run 1 by 1
    const res = await logDelay(i);
  }
}
loopWithAwait();
