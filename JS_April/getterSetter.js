/*
class Car {
    constructor(brand, speed) {
      this.brand = brand;
      this.speed = speed;
    }
  
    get details() {
      return `${this.brand} is running at ${this.speed}km/h`;
    }
  
    set speedUpdate(newSpeed) {
      this.speed = newSpeed;
    }
  }
  
  const obj = new Car("BMW", 100);
  console.log(obj.details);       // BMW is running at 100km/h
  
  obj.speedUpdate = 200;
  console.log(obj.details);       // BMW is running at 200km/h
  */

//   ✅ Q2. Create a BankAccount class
//   Properties: owner, #balance (private)
  
//   Constructor sets owner and balance
  
//   get balance() → returns current balance
  
//   set deposit(amount) → adds to balance (but only if amount > 0)
  
//   set withdraw(amount) → subtracts if sufficient funds, else log "Insufficient balance"

class BankAccount {
    #balance = 0;
    constructor (owner) {
        this.owner=owner;
    }
    get balance () {
        return this.#balance;
    }
    set deposit(amount) {
        if(amount>0) {
        this.#balance+=amount
        }
    }
    set withdraw(amount) {
        if(amount> this.#balance) {
            console.log("Insufficent balance")
        }
        else{
            this.#balance -= amount;
        }
    }
}
const obj = new BankAccount("Ujjwal")
console.log(obj.balance);
obj.deposit=2000
console.log(obj.balance);
obj.withdraw = 100
console.log (obj.balance)