// 📘 Short Notes: var vs let in Loops + setTimeout
// ✅ 1. var is Function Scoped
// var ka scope function ke andar hota hai, block ({}) ke andar nahi.

// Loop ke har iteration me same variable reuse hota hai.

// Async functions (like setTimeout) jab chalein, toh unke paas final value hoti hai.

// for (var i = 0; i < 3; i++) {
//     setTimeout(() => console.log(i), 1000); 
// }
// // Output: 3, 3, 3
// ✅ 2. let is Block Scoped
// let ka scope block ke andar hota hai (jaise loop ka body {}).

// Har iteration me let naya copy banata hai of i.

// Isliye setTimeout ko correct value milti hai.

// for (let i = 0; i < 3; i++) {
//     setTimeout(() => console.log(i), 1000); 
// }
// // Output: 0, 1, 2
// ✅ 3. setTimeout is Asynchronous
// setTimeout ka callback delay ke baad chalta hai.

// Tab tak loop khatam ho chuka hota hai.

// Yehi reason hai var wale code me value change ho jaati hai.

// ✅ 4. Fix var using IIFE (Immediately Invoked Function Expression)

// for (var i = 0; i < 3; i++) {
//     (function(j) {
//         setTimeout(() => console.log(j), 1000);
//     })(i);
// }
// // Output: 0, 1, 2 ✅
// 🧠 Yahan j har baar naya value leta hai, closure ki wajah se store ho jaata hai.

// ✅ 5. Real-world Analogy
// 3 alarms lagaye (setTimeout), lekin i ek hi diary me likha. Jab alarm baja, sab jagah same value milti — kyunki i ek hi tha (var).
// let har alarm ke saath alag page pe likh ke gaya — toh har alarm ne correct value print ki.
