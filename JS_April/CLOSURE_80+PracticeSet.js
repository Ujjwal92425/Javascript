// 1. Closure (10 Questions)
//1. Create a function that returns another function to add 5 to a number.

/*
function addnum(num) {
    let number = num;
    function add5 () {
        console.log("After adding 5 the new num is : ",number+5);
    }
    return add5;
}

const result = addnum(5);
result();
*/

//2. Build a counter with private count using closure.
/*
function counter () {
    let count =0;
    function increseCount () {
        count++;
        console.log("Count : ",count)
    }
    return increseCount;
}

const result = counter();
result()
result()
*/

//3. Return multiple functions from one closure.

/*
function multipleFun() {
  let num = 10;
  return {
    addbyone: function () {
      console.log("After adding : ", (num += 1));
    },
    subbyone: function () {
      console.log("After adding : ", num -=1);
    },
    mulbytwo: function () {
      console.log("After adding : ", num *= 2);
    },
  };
}

const result = multipleFun();
result.addbyone();
result.subbyone();
result.mulbytwo();
*/

//4. Create a multiplier using closure (double, triple, etc.).

/*
function multiplier (num) {
    return {
        double: function () {
            num=num*2;
            console.log("Double : ",num)

        },
        triple: function () {
            num=num*3;
            console.log("triple : ",num)


        },
        four: function () {
            num=num*4;
            console.log("Four times  : ",num)


        }
    }
}

const result = multiplier(40)
result.double();
result.triple();
result.four();
*/

//* 5. Implement a closure inside a loop (fix the classic var problem).
//^ ✅ Fix #2: Create a closure using IIFE
/*
function VarClassic() {
    function slovingVar() {
      for (var i = 0; i < 5; i++) {
        (function(j) {
          setTimeout(() => {
            console.log("Iteration : ", j);
          }, 1000);
        })(i);
      }
    }
    return slovingVar;
  }

  const result = VarClassic();
  result();
  */

//6. Use closure to encapsulate secret message (get/set methods).
/*
function secretMessage(message) {
    let secret = message;

    return {
        getMessage: function () {
            console.log("Secret Message: ", secret);
        },
        setMessage: function (newMsg) {
            secret = newMsg;
            console.log("Message Updated ✅");
        }
    };
}

const result = secretMessage("I love ChatGPT");
result.getMessage();  
result.setMessage("Bhai tu genius hai!");
result.getMessage();
*/
//! NOTE : closure reference hold karta hai, not value snapshot.
//7. Use setTimeout in closure to print variable after 1s delay.

/*
function printAfterDely () {
    let number = 5;
    function delayOneSec () {
        setTimeout(()=> {
            console.log("number : ",number)
        },1000)
    }
    //number = 100;
    return delayOneSec;
}
const result = printAfterDely();
result();//number = 100 , in 2nd case

*/

//8. Write a function that remembers the last argument passed to it.
/*
function outer () {
    let lstArgument =null;
    function rememberArgument(number) {
        console.log("Last Argument : ",lstArgument)
        lstArgument = number;
    }
    return rememberArgument;
}
const result = outer();
result(5);
result(10);
result(15);
*/

//9. Return a function that maintains running sum of passed numbers.
/*
function sum() {
  let totalSum = 0;
  function maintainsSum(num) {
    totalSum += num;
    console.log("Total Sum : ", totalSum);
  }
  return maintainsSum;
}
const result = sum();
result(10);
result(5);
result(7);
*/

//10. Closure to create a function that executes only once.

function greeting(name) {
    console.log("Hello", name);
  }
  
  // Attach .once method manually to greeting
  greeting.once = (function () {
    let called = false;
    return function (name) {
      if (!called) {
        called = true;
        greeting(name);
      } else {
        console.log("❌ Already greeted!");
      }
    };
  })();
  
  // ✅ Usage
  greeting.once("Raj");   // ✅ Hello Raj
  greeting.once("Aman");  // ❌ Already greeted!
  greeting.once("Neha");  // ❌ Already greeted!
//^ SEE AGAIN AND AGAIN   



/*

🔧 Improvement Tips (thoda aur sharp karne ke liye):
Callback with Closure Practice:
Practice closure inside callbacks — like in setTimeout, event listeners, async patterns.

Closure in Loops & Async
e.g., for loop + setTimeout (var vs let) — jo tu already touch kar chuka hai.

Project me Closure Use:
Build a small project (like counter app, dark mode toggle, secret manager) — closure ke saath banake full real feel aayega.

*/