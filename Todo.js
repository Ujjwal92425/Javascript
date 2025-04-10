let todo = [];

while (true) {
    let req = prompt("Enter your request (list, add, delete, quit)");

    if (req === "quit") {
        console.log("Quitting App");
        break;
    } 
    else if (req === "list") {
        console.log("Your To-Do List:");
        for (let i = 0; i < todo.length; i++) {
            console.log(`${i}: ${todo[i]}`);
        }
    } 
    else if (req === "add") {
        let task = prompt("Enter your task:");
        todo.push(task);
        console.log(`Task Added: "${task}"`);
    } 
    else if (req === "delete") {
        let id = parseInt(prompt("Enter the task index to delete:"));
        
        if (id >= 0 && id < todo.length) {
            let deletedTask = todo.splice(id, 1);  // Correct method is `splice()`, not `slice()`
            console.log(`Task Deleted: "${deletedTask}"`);
        } else {
            console.log("Invalid index");
        }
    } 
    else {
        console.log("Invalid request. Please enter list, add, delete, or quit.");
    }
}
// 🛠 How the Code Works Now
// Loop Runs Until User Enters "quit"

// User se input liya jata hai.
// Agar user "quit" likhta hai, loop break ho jata hai.
// If User Enters "list"

// Pure todo array ko print kiya jata hai with indices.
// If User Enters "add"

// prompt() se naye task ka input liya jata hai.
// Usko todo array me push() kiya jata hai.
// If User Enters "delete"

// Pehle index liya jata hai prompt() se.
// Usko integer me convert kiya jata hai (parseInt() use karke).
// Agar valid index hai to splice() method se delete kiya jata hai.
// If User Enters Anything Else

// Invalid request message show hota hai.