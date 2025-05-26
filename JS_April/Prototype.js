//Method 1: Object.create()

const parent = {
  greet() {
    return "Hello from parent!";
  }
};

const child = Object.create(parent);
console.log(child.greet()); // Hello from parent!

//Method 2: Function Constructor + Prototype

function Person(name) {
  this.name = name;
}

Person.prototype.sayHi = function () {
  console.log(`Hi, I am ${this.name}`);
};

const p1 = new Person("Ali");
p1.sayHi(); // Hi, I am Ali
//Here, sayHi() function is not inside the object p1, it's in Person.prototype.
