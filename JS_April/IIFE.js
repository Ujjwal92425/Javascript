//* IIFE: Immediately Invoked Function Expression — ek aisa function jo turant define hote hi execute ho jata hai.

(function() {
    console.log("I am IIFE!");
  })();
///////////////////////////////////////////////////////////////////////


  //🔥 Example with private variable:
  const counter = (function() {
    let count = 0; // private variable
  
    return function() {
      count++;
      console.log("Count:", count);
    };
  })();
  
  counter(); // Count: 1
  counter(); // Count: 2
  counter(); // Count: 3
  

  ///////////////////////////////////////////////////////////////////////////////////////////////////


  //Arrow IIFE

  (() => {
    console.log("Arrow IIFE!");
  })();
  