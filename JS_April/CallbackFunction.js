//* A callback function is a function that is passed as an argument to another function and is called later.

function greet(name, callback) {
    console.log("Hi " + name);
    callback(); // call the callback function
  }
  
  function sayBye() {
    console.log("Bye!");
  }
  
  greet("BhaiCoder", sayBye);

  
  /////////////////////////////////////////////

  function fetchData(callback) {
    console.log("Fetching data...");
  
    setTimeout(() => {
      console.log("Data fetched!");
      callback();
    }, 2000);
  }
  
  function processData() {
    console.log("Processing data...");
  }
  
  fetchData(processData);

  ///////////////////////////////////////


  //callback with this


  const user = {
    name: "BhaiCoder",
    greet: function(callback) {
      console.log("Welcome, " + this.name);
      callback();
    }
  };
  
  function sayThanks() {
    console.log("Thanks for visiting!");
  }
  
  user.greet(sayThanks);

  ////////////////////////////////////////


  function calculate(num1, num2, operation) {
    return operation(num1, num2);
  }
  
  function add(a, b) {
    return a + b;
  }
  
  console.log(calculate(5, 3, add));
  