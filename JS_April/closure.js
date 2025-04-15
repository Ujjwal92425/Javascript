//! Ek function banao jo kisi bhi number ko multiply kare ek fixed number se:
/*

function multiply(fixedNum) {
    return function (num) {
      console.log(num * fixedNum);
    };
  }
  
  const multiplyBy2 = multiply(2);  // fixedNum = 2
  multiplyBy2(5); // Output: 10
  multiplyBy2(10); // Output: 20
  
  const multiplyBy5 = multiply(5);  // fixedNum = 5
  multiplyBy5(3); // Output: 15


  */


  //^ Ek function banao jo ek private counter return kare:
/*
  function counter () {
    let count =0;
    function increaseCount () {
        count++;
        console.log(count)
    }
    return increaseCount;
  }
  const ctr = counter();
  ctr();
  ctr();
*/
  //! Ek once() function banao jo sirf pehli baar hi chale:

  /*
  function once(fn) {
    let called = false;
  
    return function (...args) {
      if (!called) {
        called = true;
        return fn(...args);  // yahan fn ko pass kiye gaye arguments mil jaate hain
      } else {
        console.log("Already called once.");
      }
    };
  }
  function greet(name) {
    console.log("Hi " + name);
  }
  
  const greetOnce = once(greet);
  
  greetOnce("Bhai"); // Hi Bhai
  greetOnce("Code"); // Already called once.
   */
  
  //^ Q1: Private Counter with increment & get?

  /*
  function Counter() {
    let count = 0;
  
    function increaseCount() {
      count++;
      console.log("Increased to:", count);
    }
  
    function getCount() {
      console.log("Current count:", count);
    }
  
    return {
      increment: increaseCount,
      get: getCount
    };
  }
  
  const counter = Counter();
  
  counter.increment(); // Increased to: 1
  counter.increment(); // Increased to: 2
  counter.get();       // Current count: 2
  */


 //!  ✅ Q2: Closure-based password locker 🔐
//  const locker = passwordLocker("meraSecret");

//  locker("wrong");  // ❌ Access Denied
//  locker("meraSecret"); // ✅ Access Granted

function setPassword(setPassword) {
    function Check(checkPassword) {
        if (setPassword === checkPassword) {
            return "Access Granted 🔓";
        } else {
            return "Access Denied ❌";
        }
    }

    return Check; // 👈 Yeh zaroori hai
}

const locker = setPassword("Ujju");

console.log(locker("Apple"));  // Access Denied ❌
console.log(locker("Ujju"));   // Access Granted 🔓

//Once running
function formSubmit () {
  console.log("Form Submitted");
  return "Already Submit";
}

const check = once(formSubmit);

check(); // ✅ runs formSubmit
check(); // ❌ doesn't run again
check(); // ❌ still doesn't run again

