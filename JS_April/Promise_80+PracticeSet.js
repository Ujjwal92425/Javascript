//1.	Create a Promise that resolves after 2 seconds.
// const res = new Promise ((resolve,reject) => {
//     console.log("Loading....")
//     setTimeout(()=>{
//         console.log("Promise Resolved ");
//         resolve()
//     },2000)
// })

// const res = new Promise((resolve, reject) => {
//     console.log("Loading....");
//     setTimeout(() => {
//         console.log("Promise Resolved");
//         resolve("Success!"); // Resolve with a message
//     }, 2000);
// });

// res.then((message) => {
//     console.log("The promise was resolved with message: ", message);
// });

////////////////////////////////

//2.	Reject a Promise conditionally based on random number.

// function check(number) {
//   const res = new Promise((resolve, reject) => {
//     let num = Math.floor(Math.random() * 10);
//     console.log("Generated Number: ", num);
//     if (number === num) {
//       console.log("Nice guess");
//       resolve("Success");
//     } else {
//       reject("Failed! The number was " + num);
//     }
//   })
//     .then((msg) => {
//       console.log("Okk",msg);
//     })
//     .catch((err) => {
//       console.log("Promise failed");
//     });
// }
// check(7);
// check(4);
// check(9);

//3.	Chain .then() to modify resolved data.
// function modify(number) {
//   const res = new Promise((resolve, reject) => {
//     if (number > 0) {
//       console.log("Modify ....");
//       resolve(number);
//     } else {
//       reject("Number is negative or 0");
//     }
//   })
//     .then((num) => {
//       num += 2;
//       console.log("1st Modification: ", num);
//       return num;
//     })
//     .then((num) => {
//       num *= 2;
//       console.log("2nd Modification: ", num);
//       return num;
//     })
//     .then((num) => {
//       num /= 2;
//       console.log("3rd Modification: ", num);
//     })
//     .catch((err) => {
//       console.log("Error:", err);
//     });
// }

// modify(10);
// modify(-2);

//4.	Wrap setTimeout in a Promise
// function timeOutProm() {
//   console.log("Checking ......");
//   const res = new Promise((resolve, reject) => {
//     setTimeout(() => {
//       resolve("Success");
//       console.log("Promise Resolve ");
//     }, 2000);
//   });
// }
// timeOutProm();

// //Best Practice
// function timeOutProm() {
//     console.log("Checking ......");

//     return new Promise((resolve, reject) => {
//       setTimeout(() => {
//         console.log("Promise Resolve");
//         resolve("Success");
//       }, 2000);
//     });
//   }

//   timeOutProm().then((msg) => console.log("Message:", msg));

////////////////////

//5.	Create a function that returns a Promise and resolves square of a number.

// function square(number) {
//   const res = new Promise((resolve, reject) => {
//     if (number > 0) {
//       resolve(number);
//     } else {
//       reject("Number is negative or 0");
//     }
//   })
//     .then((num) => {
//       const result = num * num;
//       console.log("Square:", result);
//       return result;
//     })
//     .catch((err) => {
//       console.log("Error:", err);
//     });
// }

// square(10);
// square(-2);

//Chaining Questions
// 2.	Create Promise chain that simulates async steps: login → fetch data → show.
function login(user) {
  console.log("Login:", user);
  return user;
}

function fetchData(user) {
  console.log("Fetching data for:", user);
  return user;
}

function show(user) {
  console.log("Hello " + user + ", Welcome!");
}

function simulatesPromise(name) {
  const res = new Promise((resolve, reject) => {
    console.log("Getting data...");
    resolve(name);
  })
    .then(login)
    .then(fetchData)
    .then(show);
}

simulatesPromise("Ujjwal");
