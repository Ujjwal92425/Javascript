//* 🏦 OOP Mini Project – Bank System
// Required Features:

// Account class → properties: name, #balance

// Methods: deposit(), withdraw(), checkBalance()

// Inherit SavingAccount and CurrentAccount

// Add interest logic in SavingAccount

// Method override: e.g., withdraw() limited in SavingAccount

// ✅ Bonus: Add transaction history array to each account\

/*
class Bank {
    #balance=0;
    constructor(name) {
        this.name=name;
    }
    deposit(amount) {
        console.log("Credited amount : "+ amount);
        this.#balance+=amount;
    }
    withdraw (amount) {
        if(amount > this.#balance) {
            console.log("Insufficent fund")
        }
        else {
            console.log("Withdraw amount : "+ amount);
            this.#balance-=amount;
            
        }
    }
    checkBalance() {
        console.log( "Balance : " + this.#balance)
    }
    
}
const obj = new Bank();
obj.deposit(100000)
obj.checkBalance()
obj.withdraw(100)
obj.checkBalance()
*/

/*
class ParkingSystem {
    constructor (owner,model,number) {
        this.owner=owner;
        this.model=model;
        this.number=number;
    }
    
    welcome () {
        console.log(`Welcome ${this.owner} car model ${this.model}  and number ${this.number}`)
    }

    HourlyCharge(time) {
        console.log("Time for  Parking : "+time+ "hr");
        let charge = time * 50;
        console.log("Charge : "+ charge);
    }
}
const obj = new ParkingSystem("Himanshu","BMW",3848);
obj.welcome()
obj.HourlyCharge(2)

*/




/////////////////////////////////////////////////////////////////////////////////////////////



//*  🧠 Mini Project: Task Manager App (CLI version in JS)

//!  📋 Features to Build:

//^  ✅ Use IIFE to initialize the app.

//^  ✅ Add tasks with title, category (Work, Personal, etc.).

//^  ✅ Use Closure to create a private taskIdCounter.

//^  ✅ Use Callbacks to filter tasks by category or priority.

//^  ✅ Use Higher Order Functions (map, filter, reduce) to:

        //? List all tasks

        //? Count completed tasks

        //? Show % of work done

//^  ✅ Use OOP:

        //? Class Task with title, category, completed status

        //? Class TaskManager to manage tasks (add, delete, update)

        //? Use getters/setters to manage task data safely