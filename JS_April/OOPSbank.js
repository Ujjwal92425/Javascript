//* 🏦 OOP Mini Project – Bank System
// Required Features:

// Account class → properties: name, #balance

// Methods: deposit(), withdraw(), checkBalance()

// Inherit SavingAccount and CurrentAccount

// Add interest logic in SavingAccount

// Method override: e.g., withdraw() limited in SavingAccount

// ✅ Bonus: Add transaction history array to each account
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
obj.deposit(1000)
obj.checkBalance()
obj.withdraw(100)
obj.checkBalance()