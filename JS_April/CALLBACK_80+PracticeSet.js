//! Always pass data in callbacks if the callback function needs that data. Agar nahi chahiye, tab na pass karein — warna unexpected behavior ho sakta hai.

// 1.	Create a function that takes another function and calls it after a delay

/*
function greet(name, callback) {
  console.log(`Hello ${name}`);
  setTimeout(() => {
    callback();
  }, 2000);
}
function wish() {
  console.log("Thankyou");
}

greet("Ujjwal", wish);

*/

//* 2.	Implement your own version of map using callbacks

/*
function customMap(arr, callback) {
  let res = [];
  for (let i = 0; i < arr.length; i++) {
    res.push(callback(arr[i], i));
  }
  return res;
}

function double(num) {
  return num * 2;
}

arr = [2, 3, 5, 6, 7, 8, 9, 1];
result = customMap(arr, double);
console.log("Modified Array: ", result);

//////////////////////////////////////////////////////////////////////////////////

function customFilter(arr, callback) {
  let result = [];
  for (let i = 0; i < arr.length; i++) {
    if (callback(arr[i])) {
      result.push(arr[i]);
    }
  }
  return result;
}

function checkEven(num) {
  if (num % 2 == 0) {
    return true;
  }
}
const arr = [2, 3, 4, 5, 6, 7, 8, 9];
const res = customFilter(arr, checkEven);
console.log(res)
*/

//3.	Write a function that accepts a callback and data and logs modified data.

/*
function data(name, callback) {
  console.log("Initial Name : ", name);
  let modifiedData = callback(name);
  console.log("Modified Name : ", modifiedData);
}
function modifiedData(name) {
  let newName = "Chat Gpt";
  return newName;
}
const res = data("Ujjwal", modifiedData);
*/

//4.	Create a calculator that accepts operation as a callback.
/*
function calculate(num1, num2, operationCallback) {
    const result = operationCallback(num1, num2);
    console.log("Result:", result);
  }
  
  // Callback functions for operations
  function add(a, b) {
    return a + b;
  }
  function sub(a, b) {
    return a - b;
  }
  function mul(a, b) {
    return a * b;
  }
  function div(a, b) {
    return b !== 0 ? a / b : "Cannot divide by zero";
  }
  
  // Usage
  calculate(10, 5, add);  // Result: 15
  calculate(10, 5, sub);  // Result: 5
  calculate(10, 5, mul);  // Result: 50
  calculate(10, 5, div);  // Result: 2

  */

//"Write a function fetchUserData that takes a username and two callbacks – one for success and one for error. If username is not empty, call the success callback with message. Otherwise, call error callback with error message."

/*
function fetchData(username,callback1,callback2) {
    if(username != "") {
        callback1(username);
    }
    else {
        callback2();
    }
}
function success (name) {
    console.log("Success woooooo ",name)
}
function reject() {
    console.log("Enter ur username broo...")
}

fetchData("Ujju",success,reject);
fetchData(success,reject);
fetchData("",success,reject);
*/

// //7.	Call multiple callbacks in order from a main function
// function multipleCallback(name, callback1, callback2, callback3) {
//   console.log("Greetings");
//   const res1 = callback1(name);
//   const res2 = callback2(name);
//   const res3 = callback3(name);
//   const main = res1 + " " + res2 + " " + res3;
//   console.log(main);
// }
// function Hello() {
//   return "Hello";
// }
// function nameP(nm) {
//   return nm;
// }
// function gd() {
//   return "Good Morning";
// }
// multipleCallback("Ujjwal",Hello,nameP,gd)


//! ADVANCE 🔥 PROBLEMS 📝
/*1. Error-First Callback (with callback chaining)
Write a function that fetches user data by ID. If the ID is not a number, it should return an error message. Chain multiple callbacks for success and failure handling.*/

function getUserById(id, callback) {
  if (typeof id !== 'number') {
    return callback("Error: ID must be a number", null);
  }
  // Simulate async data fetch
  setTimeout(() => {
    const user = { id, name: "User" + id };
    callback(null, user);
  }, 1000);
}

getUserById(5, function(err, user) {
  if (err) return console.log(err);
  console.log("User fetched:", user);
  // Do more async stuff here with user...
});


/*
2. Callback with Multiple Parameters (custom logger)
Create a custom logger that accepts a callback and logs different types of data (string, object, number) depending on the type. Call the logger with various data.*/

function customLogger(data, callback) {
  if (typeof data === 'string') {
    callback('Logging string:', data);
  } else if (typeof data === 'object') {
    callback('Logging object:', JSON.stringify(data));
  } else if (typeof data === 'number') {
    callback('Logging number:', data);
  } else {
    callback('Unknown data type:', data);
  }
}

customLogger("Hello", console.log);   // String
customLogger({ key: "value" }, console.log); // Object
customLogger(42, console.log);   // Number
customLogger(true, console.log); // Unknown


/*
3. Simulate Asynchronous File Reading (callback chaining)
Simulate reading from a file (asynchronous), where the first callback reads the file, and the second processes it. Chain them together. */

function readFile(callback) {
  setTimeout(() => {
    const fileContent = "Data from file!";
    callback(fileContent);
  }, 1000);
}

function processFile(content, callback) {
  setTimeout(() => {
    const processedContent = content.toUpperCase();
    callback(processedContent);
  }, 1000);
}

readFile(function(content) {
  console.log("File read:", content);
  processFile(content, function(processedContent) {
    console.log("Processed content:", processedContent);
  });
});

/*

/*
4. Timeout Callback Execution (callback inside timeout)
Simulate a timeout where after a 2-second delay, a callback is called to display a message.  */

function delayedExecution(callback) {
  setTimeout(() => {
    callback("Task completed after delay!");
  }, 2000);
}

delayedExecution(function(message) {
  console.log(message);  // Should log after 2 seconds
});


/*
5. Validate and Transform Data (using callbacks for validation)
Write a function that accepts an array of numbers and a validation function (callback). It should return only valid numbers that pass the validation.*/

function validateAndTransform(arr, validator, callback) {
  const validNumbers = arr.filter(validator);
  callback(validNumbers);
}

function isValidNumber(num) {
  return num >= 0;  // Allow only non-negative numbers
}

function printValidNumbers(numbers) {
  console.log("Valid Numbers:", numbers);
}

validateAndTransform([10, -5, 30, -1, 25], isValidNumber, printValidNumbers);

