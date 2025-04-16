//^ ✅ Practice Questions Set – 5 per topic
/*
//* 🔁 IIFE – Practice Questions
// Make an IIFE that logs "App Started" once.
(function LogOnce() {
  console.log("App Started");
})();

// IIFE that takes a parameter (name) and greets it.
(function (name) {
  console.log(`Good Morning ${name}`);
})("Chat GPT");

// Create an IIFE that generates a random number and logs it.
(function RandomNumber() {
  console.log(Math.floor(Math.random() * 10));
})();

// Use IIFE to make a private counter function.
// (function Counter () {
//     let count = 0;
//     return function increment () {
//         count++;
//         console.log(count);
//     }
// })();
const counter = (function Counter() {
  let count = 0;
  return function increment() {
    count++;
    console.log(count);
  };
})();

//* 🔁 Callback Functions – Practice
function add(a, b) {
    return a + b;
  }
  
  function sub(a, b) {
    return a - b;
  }
  
  function mul(a, b) {
    return a * b;
  }
  
  function calculator(a, b, callback) {
    console.log("Result:", callback(a, b));
  }
  
  calculator(20, 80, add);  // Result: 100
  calculator(60, 2, mul);   // Result: 120
  calculator(50, 10, sub);  // Result: 40
 ///////////////////////////////////////////////////////////////////////////////////////////////

// Simulate a login system: pass username and callback to validate.
// Function that returns stored (valid) credentials
function credential() {
    return "Ujju";
  }
  
  // Function that checks input username against valid one using a callback
  function checkCredential(username, callback) {
    const validUsername = callback(); 
    if (username === validUsername) {
      console.log("Login Successful!");
    } else {
      console.log("Invalid Username!");
    }
  }

  checkCredential("Ujju", credential);      
  checkCredential("SomeoneElse", credential);
  
/////////////////////////////////////////////////////////////////////////////////////////////////

// Create fetchData(url, callback) function (simulate with setTimeout).
function fetchData(url, callback) {
    console.log("Fetching data from", url);
    
    // Simulate network delay
    setTimeout(() => {
        console.log("Data fetched from", url);
        callback(); 
    }, 1000);
}

function processData() {
    console.log("Processing the fetched data...");
}

// Call the function
fetchData("https://chatgpt.com", processData);

// Build a quiz app that checks answers via callback.

// function quize (q1,q2,callback) {
//     q1="National Animal of India ?"
//     q2 = "National Bird of India ?"
// }
// function checkQuize (ans1,ans2,callback) {
//     callback()
//     if(ans1=="Bengal Tiger") {
//         console.log("Right")
//     }
//     else {
//         console.log("Wrong")
//     }
//     if(ans2=="Peacock") {
//         console.log("Right")
//     }
//     else {
//         console.log("Wrong")
//     }
// }
// checkQuize("Ujjwal","Peacock",quize)
// checkQuize("Bengal Tiger","Peacock",quize)
function quiz(callback) {
    console.log("Q1: National Animal of India?");
    console.log("Q2: National Bird of India?");
    callback();
}

function checkQuiz(ans1, ans2) {
    if (ans1 === "Bengal Tiger") {
        console.log("Q1: Right ✅");
    } else {
        console.log("Q1: Wrong ❌");
    }

    if (ans2 === "Peacock") {
        console.log("Q2: Right ✅");
    } else {
        console.log("Q2: Wrong ❌");
    }
}

// Call like this:
quiz(function () {
    checkQuiz("Ujjwal", "Peacock");
});

quiz(function () {
    checkQuiz("Bengal Tiger", "Peacock");
});


// Write a callback chain: step1 → step2 → step3.
function step (callback) {
    callback();
}
function step1(callback) {
    console.log("Step 1")
    callback();

}
function step2(callback) {
    console.log("Step 2")
    callback();

}
function step3(callback) {
    console.log("Step 3")
    callback();

}
function step4(callback) {
    console.log("Step 4")
    

}
step(() => {
    step1(() => {
        step2(() => {
            step3(() => {
                step4();
            });
        });
    });
});
//Correct way for chain

//* 🔁 Higher-Order Functions (HOF) – Practice
// Use .map() to square all elements in an array.
const arr = [1,2,3,4,5]
const res = arr.map(nums => nums*nums);
console.log(res);

// Use .filter() to get all even numbers from an array.
const res2 = arr.filter(nums=> nums %2==0);
console.log(res2)

// Use .reduce() to sum all numbers.
const res3 = arr.reduce((crr,sum) => sum+crr,0);
console.log(res3)

////////////////////////////////////////////////////////////////////////
*/

//* 🔁 OOP – Practice
// Create Person class with name, age, and introduce() method.
class Person {
    name="Ujju";
    age = 99;
    introduce() {
        console.log(`Hello , my name is  ${this.name} and age is ${this.age}`)
    }

}
const p = new Person();
p.introduce()
// Extend it with Student class with course and study() method.
class Student extends Person {
    study() {
        console.log(`Hello , my name is  ${this.name} and age is ${this.age} and studying JavaScript`)
    }
}
const p2 = new Student()
p2.study()
// Use # to make password private and checkPassword() method.
class PassCheck {
    #password = 123;
    check(pass) {
        if(pass=== this.#password) {
            console.log("PERMISSION  GRANTED")
        }
        else{
            console.log("WRONG PASSWORD")
        }
    }
}
const obj =new PassCheck;
obj.check(123);
obj.check(367);

// Override introduce() in Student to include course.
class Ujjwal extends Student {
    introduce() {
        console.log("Ujjwal here")
    }
}
const obj2=new Ujjwal();
obj2.introduce()


// Create a class with getter/setter for email and validate it.

class EmailValidation {
    setEmail (address) {
        if(address==" ") {
            console.log("Enter email")
        }
    }
    getEmail () {
        console.log(this.address);
    }
}
const obj3 = new EmailValidation();
obj3.setEmail();
obj3.setEmail("ujju@134")
obj3.getEmail();


//* 🏦 OOP Mini Project – Bank System
// Required Features:

// Account class → properties: name, #balance

// Methods: deposit(), withdraw(), checkBalance()

// Inherit SavingAccount and CurrentAccount

// Add interest logic in SavingAccount

// Method override: e.g., withdraw() limited in SavingAccount

// ✅ Bonus: Add transaction history array to each account

