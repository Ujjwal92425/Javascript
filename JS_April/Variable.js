// var a = 10;
// let b = 20;
// const c = 30;

// a = 100;
// b = 200;
// c = 300; // ❓ Yeh line run kar ke dekh, kya error aata?
 //c const hai issliye error ayega


 //^ Let 
/*let num = 5;
if (true) {
    let num = 10;
    console.log("Inside Block:", num);
}
console.log("Outside Block:", num);
*/

//^ Var
/*
var a = 1;
if (true) {
    var a = 2;
    console.log("Inside block:", a);
}
console.log("Outside block:", a);
*/
//See Notes


//^ Qn
/*
function checkEvenOdd(num) {
    // Your code here
    if(num %2 == 0) {
        return "Even";
    }
    else {
        return "Odd";
    }
}
function checkEvenOdd(num) {
    return (num % 2 === 0) ? "Even" : "Odd";
}


// Test
console.log(checkEvenOdd(5));  // should print "Odd"
console.log(checkEvenOdd(10)); // should print "Even"
*/


//! LOOP
function printEvenNumbers(n) {
    // your code here
    for(let i=1;i<n;i++) {
        if(i % 2 == 0) {
            console.log(i+" ");
        }
    }
}

printEvenNumbers(10);

//📌 Function Declaration:
function greet(name) {
    console.log("Hello, " + name);
}
greet("Ujjwal");

//📌 Function Expression:
const greet = function(name) {
    console.log("Hello, " + name);
};
greet("Ujjwal");

//& Arrow Function

const add = (a, b) => {
    return a + b;
};

const sayHi = () => console.log("Hi!");

const square = x => x * x;

//! Scope 

//Block Scope (let, const):
{
  let a = 10;
  const b = 20;
  console.log(a, b); // ✅ 10 20
}
// console.log(a); ❌ Error: a is not defined

//Function Scope

function test() {
    var x = 5;
    console.log(x); // ✅ 5
  }
  test();
  // console.log(x); ❌ Error
  



