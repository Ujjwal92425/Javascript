/*
Inheritance in JavaScript means ek object doosre object ke properties aur methods "inherit" (yaani access) kar sakta hai — bina unhe khud define kiye.
Ye kaam hota hai Prototype Chain ke through.

Property Lookup: Jab aap kisi object se property access karte ho, toh JavaScript:

Pehle object mein check karti hai.

Agar wahan nahi mili, toh uske prototype mein check karti hai.

Ye process tab tak chalta hai jab tak prototype chain null tak nahi pahunchti.
*/

//✅ Using Object.create() (Classless Inheritance)

const animal = {
  eats: true,
  walk() {
    console.log("Animal walks");
  },
};

const rabbit = Object.create(animal);
rabbit.hops = true;

console.log(rabbit.eats); // true (from prototype)
rabbit.walk(); // Animal walks

//rabbit inherits eats and walk() from animal.

//✅ Using Constructor Function + Prototype

function Person(name) {
  this.name = name;
}

Person.prototype.sayName = function () {
  console.log(`My name is ${this.name}`);
};

const user1 = new Person("Ali");
user1.sayName(); // My name is Ali

/*🔍 Kab use karein:
Jab aapko same structure ke multiple objects banane ho (e.g., many users, many products, etc.)

Jab aapko ek baar method banani ho aur sab instances use karein
*/

//🧪 Example: Inheritance Chain & Lookup

const grandParent = {
  glasses: true,
};

const parent = Object.create(grandParent);
parent.hasHouse = true;

const child = Object.create(parent);
child.ownsPhone = true;

console.log(child.glasses); // true (via grandParent)
console.log(child.hasHouse); // true (via parent)
console.log(child.ownsPhone); // true (directly in child)
//Chain: child → parent → grandParent → Object.prototype → null

//🧠 Extra Tip: If a property is redeclared in child, it overrides the inherited one:

const human = {
  speak: () => console.log("Hello"),
};

const dev = Object.create(human);
dev.speak = () => console.log("Hi, I’m a developer");

dev.speak(); // Hi, I’m a developer
