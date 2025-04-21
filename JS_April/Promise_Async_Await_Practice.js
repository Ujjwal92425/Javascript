//Task: Create a promise that resolves with "Hello World" after 1 second and logs it.
/*
const p = new Promise((resolve, reject) => {
  setTimeout(() => {
    console.log("Hello World");
    resolve();
  }, 1000);
});

p.then(() => {
  console.log("Promise Resolved");
});
*/

//Task: Create a promise that rejects with "Something went wrong" after 2 seconds. Use .catch() to handle it.
/*
const p2 = new Promise((resolve, reject) => {
    reject("Something went Wrong");
  });
  
  p2.catch((e) => {
    console.log(e); // Output: Something went Wrong
  });

  Promise.reject("Some error").catch((e) => {
    console.log("Caught error:", e);
  });
  */

//Task: Make a promise that resolves with number 3. Then chain: •	Multiply by 2 •	Add 4 •	Print the final result
/*
const p = new Promise((resolve,reject)=> {
    Promise.resolve(5)
    .then(num => num*2)
    .then(num=>num+4)
    .then(result => console.log("Result : ",result))
})

*/

//Task: Create a function doubleAfter2Sec(num) that returns a promise to double the number after 2 sec. Then use: doubleAfter2Sec(5).then(consolelog); // should print 10
function doubleAfter2Sec(num) {
  try {
    const p = new Promise((resolve, reject) => {
      setTimeout(() => {
        console.log("Double: ", num * 2);
      }, 2000);
      resolve();
    });
  } catch {
    console.log("Error");
  }
}
doubleAfter2Sec(5);
