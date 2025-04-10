//^ Multiply all array elements by 5 using map().
const arr = [1,2,3,4,5];
const arr2 = arr.map(nums=>nums*5);
console.log(arr2);


//^ Filter out only odd numbers from an array.
const arr3 = [2,3,4,5,7,8];
const arr4 = arr3.filter(nums => nums%2 != 0);
console.log(arr4);


//^ Use reduce() to calculate the total sum of an array.
const price = [20,40,60,80];
const total = price.reduce((acc,crr) => acc+crr,0);
console.log(total);


//^ Find the first number greater than 10 in an array
const arr5 = [2,8,12,15,20,30,40];
const ans = arr5.filter(nums=>nums > 10);
console.log(ans[0]);


//^ Slice an array from index 2 to 4
const sliced = arr5.slice(2,5);
console.log(sliced);


//^ Filter users older than 18
const users = [
    { name: "Amit", age: 17 },
    { name: "Ujjwal", age: 22 }
  ];
  const user = users.filter(nums => nums.age > 18);
  console.log(user);


//^ From a list of products, calculate total price using reduce()
const product = [
    { name: "Smartphone", pprice: 17000 },
    { name: "Ac", pprice: 50000 },
    { name: "Cooler", pprice: 20000 },
    { name: "Laptop", pprice: 70000 },
  ];
  const PSum = product.reduce((val,curr) => val+curr.pprice,0);
  console.log(PSum);


  //^ Display active tasks using filter()
  const task = [
    { name: "Eat", status: "active" },
    { name: "Drink", status: "done" },
    { name: "Sleep", status: "done" },
    { name: "Study", status: "active" },
    { name: "Play", status: "active" },
  ];
  const result = task.filter(tsk => tsk.status != "done");
  console.log(result);


  //^ Get all names starting with 'A' using filter() and string methods.
  const s = ["Ujju","Ram","Apple","Amla","Ravi","Anish"];
  const nameA = s.filter(nums => nums.charAt(0)=='A');
  console.log(nameA);


//^ Combine two arrays and remove duplicates using filter and indexOf.
const carr1 = [2, 4, 67, 9, 0];
const carr2 = [3, 5, 7, 9, 3, 6];

// Step 1: Combine both arrays using spread
const combined = [...carr1, ...carr2];

// Step 2: Remove duplicates using filter and indexOf
const unique = combined.filter((item, index) => {
  return combined.indexOf(item) === index;
});

console.log(unique); 

// indexOf(item) → yeh hamesha pehli baar jahan item mila uska index deta hai.

// filter((item, index) => indexOf(item) === index) → iska matlab hai:

// Agar current index hi us item ka first occurrence hai, toh usko rakh lo.

// Agar current index > indexOf(item), toh wo duplicate hai → ignore kar do.



//^💡 Practice Question 1: Filter products by category and get only their names
// Given this array of products:
const products = [
    { name: "Shirt", category: "Clothing" },
    { name: "Jeans", category: "Clothing" },
    { name: "Laptop", category: "Electronics" },
    { name: "Phone", category: "Electronics" },
    { name: "Shoes", category: "Footwear" },
  ];
  
  // 👉 Task:
  // 1. Filter only "Electronics" category
  // 2. Extract only their names into a new array
  // Output should be: ["Laptop", "Phone"]
  
  const result1 = products
    .filter(item => item.category === "Electronics")
    .map(item => item.name);
  
  console.log(result1);


  
  //^💡 Practice Question 2: Create a user greeting array with names in uppercase

  // Given this array of user objects:
const users4 = [
    { name: "ujjwal", loggedIn: true },
    { name: "amit", loggedIn: false },
    { name: "rahul", loggedIn: true },
    { name: "sita", loggedIn: true },
  ];
  
  // 👉 Task:
  // 1. Filter only loggedIn users
  // 2. Create an array like:
  //    ["WELCOME UJJWAL", "WELCOME RAHUL", "WELCOME SITA"]
  
  const greetings = users4
    .filter(user => user.loggedIn==true)
    .map(user => `WELCOME ${user.name.toUpperCase()}`);
  
  console.log(greetings);
  
  


