//^ 📚 Higher-Order Functions (HOFs)
// Higher-Order Functions wo functions hote hain jo:
// * Dusre functions ko argument ke roop mein accept karte hain, ya
// * Function return karte hain.



//🔥 Simple Example 1: Function passed as argument

function greet(name) {
    return `Hello, ${name}!`;
  }
  
  function processUserInput(callback) {
    const name = "BhaiCoder";
    return callback(name);
  }
  
  console.log(processUserInput(greet)); // Output: Hello, BhaiCoder!



  
//🔥 Simple Example 2: Function returning a function

function multiplier(x) {
    return function(y) {
      return x * y;
    }
  }
  
  const double = multiplier(2);
  console.log(double(5)); // Output: 10

  //*----------------------------------------------------




//! Map() : Ek array ke har element pe ek function apply karta hai aur modified array return karta hai.
const number = [1, 2, 3, 4];

const squaredNumbers = number.map((num) => num * num);

console.log(squaredNumbers); // [1, 4, 9, 16]



//! Filter : Array ke elements ko filter karta hai based on condition aur new array return karta hai.

const numbers = [1, 2, 3, 4, 5];

const evenNumbers = numbers.filter((num) => num % 2 === 0);

console.log(evenNumbers); // [2, 4]



//! Reduce : Array ke elements ko combine karta hai ek single value me — useful for summing, multiplication, etc
const num = [1, 2, 3, 4];

const sum = num.reduce((acc, nums) => acc + nums, 0);

console.log(sum); // 10



//* 💡 Custom Higher-Order Function:
//- Tu khud ka HOF bana sakta hai jo any function ko accept kare aur return kare!

function myMap(arr, callback) {
  let result = [];
  for (let i = 0; i < arr.length; i++) {
    result.push(callback(arr[i], i, arr));
  }
  return result;
}

const numbers1 = [1, 2, 3, 4];
const squaredNumbers1 = myMap(numbers1, (num) => num * num);

console.log(squaredNumbers1); // [1, 4, 9, 16]

//*------------------------------------------------- */
function customMap(arr, callback) {
    let result = [];
    for (let i = 0; i < arr.length; i++) {
      result.push(callback(arr[i], i, arr));
    }
    return result;
  }
  
  const products = [
    { name: "Shirt", price: 500 },
    { name: "Pants", price: 800 },
    { name: "Shoes", price: 1200 }
  ];
  
  const discountedProducts = customMap(products, product => {
    return { ...product, price: product.price * 0.9 }; // Applying 10% discount
  });
  
  console.log(discountedProducts);
  
