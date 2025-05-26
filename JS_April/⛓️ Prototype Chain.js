// If JS can't find a property directly in object, it looks up the chain:
const a = { a: 1 };
const b = Object.create(a); // b's prototype is a
const c = Object.create(b); // c's prototype is b

console.log(c.a); // 1 (found via prototype chain)

//2nd

function Animal(name) {
  this.name = name;
}

Animal.prototype.speak = function () {
  console.log(`${this.name} makes a sound.`);
};

const dog = new Animal("Doggo");
dog.speak(); // Doggo makes a sound.

//   speak() is not inside dog, but it still works via prototype chain.

// Summary:

// Prototypes JS ka built-in inheritance system hai.

// Memory efficient hai: common methods ko har object mein copy nahi karta.

// Aap Object.create() se ya .prototype property se prototype set kar sakte ho.
