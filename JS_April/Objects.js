//^  Level 1: Basic Usage
//  1. User Profile Object
//    const user = {
//      name: "Aman",
//      age: 22,
//      isVerified: true
//    };
//  - Add a new key: email = "aman@gmail.com"- Update age to 23- Delete isVerified- Loop over the object and log all key-value pairs

const user = {
    name: "Aman",
    age: 22,
    isVerified: true
};
user.email="aman@gmail.com"
user.age=23
delete user.isVerified
for(let key in user) {
    console.log(key, user[key])
}
console.log("-------------")
//^ Level 2: Nested Object Access
/*  2. Student Record
  const student = {
    name: "Rahul",
    class: "10th",
    marks: {
      maths: 85,
      science: 90,
      english: 78
    }
  };
- Print marks of all subjects
- Add social: 82 in marks
- Find total marks (sum)
- Update english marks to 88 */

const student = {
    name:"Rahul",
    class: "10th",
    marks: {
        maths : 85,
        science:90,
        english:78
    }
};
for(let key in student.marks) {
    console.log(key,student.marks[key])
}
student.marks.social = 82;
let sum=0;
for(let key in student.marks) {
    sum+= (key,student.marks[key])
}
console.log(sum);
student.marks.english = 88;


//^ Level 3: Dynamic & Conditional Access
/* 3. Cart System (like eCommerce)
  const cartItem = {
    product: "Laptop",
    price: 45000,
    specs: {
      processor: "i5",
      ram: "16GB",
      storage: "512GB SSD"
    }
  };
  - Access and print the RAM
  - Add a new spec: graphics: "RTX 3060"
  - Write a function to print all specs
  - Check if discount key exists or not using Object.keys() or optional chaining */

  const cartItem = {
    product: "Laptop",
    price: 45000,
    specs: {
      processor: "i5",
      ram: "16GB",
      storage: "512GB SSD"
    }
  };
  console.log(cartItem.specs.ram);
  cartItem.specs.graphics ="RTX 3060";
  function printSpecs() {
    for(let item in cartItem.specs) {
        console.log(item,cartItem.specs[item])
    }
  }
  printSpecs();
  //Check if discount key exists or not using Object.keys()  ???

  //^ Level 4: Object Methods + Array of Objects
  /* 4. Array of Users
    const users = [
      { id: 1, name: "Aman", role: "admin" },
      { id: 2, name: "Riya", role: "user" },
      { id: 3, name: "Raj", role: "moderator" }
    ];
 - Find user with role = "admin"
 - Add a new user to the array
 - Change Raj's role to "admin"
 - Remove user with id = 2
 - Use map() to return only names of users
 - Use filter() to get only admins  */
 const users = [
    { id: 1, name: "Aman", role: "admin" },
    { id: 2, name: "Riya", role: "user" },
    { id: 3, name: "Raj", role: "moderator" }
  ];
 console.log(users.filter(user => user.role=="admin").map(names=> names.name))
let newusers = {id:4, name: "Ahmed", role: "staff" };
users.push(newusers);
users[2].role="admin";



const indexToRemove = users.findIndex(user => user.id === 2);
if (indexToRemove !== -1) users.splice(indexToRemove, 1);



const nameUser = users.map(user => user.name);
console.log(nameUser); // ['Aman', 'Raj', 'Ahmed']


const admins = users.filter(user => user.role === "admin");
console.log(admins);



//^    -------------------------------------------
/*
const users = [
    { id: 1, name: "Aman", role: "admin" },
    { id: 2, name: "Riya", role: "user" },
    { id: 3, name: "Raj", role: "moderator" }
  ];
  
  const adminUser = users.find(user => user.role === "admin");
  console.log("Admin User:", adminUser);
  
  const newUser = { id: 4, name: "Ahmed", role: "staff" };
  users.push(newUser);
  
  const raj = users.find(user => user.name === "Raj");
  if (raj) raj.role = "admin";
  
  const indexToRemove = users.findIndex(user => user.id === 2);
  if (indexToRemove !== -1) users.splice(indexToRemove, 1);
  
  const nameUser = users.map(user => user.name);
  console.log("Names:", nameUser);
  
  const admins = users.filter(user => user.role === "admin");
  console.log("Admins:", admins);
  
  */