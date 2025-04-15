
/*
👨‍💻 Code Yourself – this Keyword Practice Questions
🔨 Q1: Custom Object with Method
✅ Create an object book with title, author, and a method summary() that logs:

"Title: <title> by <author>" using this.
*/

const book = {
    name:"Devlopment",
    title : "JavaScript",
    author : "Ujjwal",
    details : function () {
        console.log("Title " +this.title + " by "+ this.author);
    }

}
book.details()


// Example output: Title: Atomic Habits by James Clear



/*🔨 Q2: Timer App (with setInterval and this)
✅ Create an object timer with a property seconds = 0 and a method start() that:

Uses setInterval to increase seconds every 1 second.

Prints updated time using this.seconds.

Use arrow function or bind() to make this work inside setInterval. */

const timer = {
    seconds: 0,
    start: function () {
      setInterval(() => {
        this.seconds++;
        console.log("Seconds:", this.seconds);
      }, 1000);
    }
  };
  
  timer.start();
  //! We use arrow function inside setInterval so that this refers to the outer object (timer), not the global object.  




/*🔨 Q3: Reuse a Function with bind()
✅ Create a function printDetails() that prints a person's name and city using this.
Then use bind() to attach it to two different objects (person1, person2), and call both.


// Output:
// I am Rakesh from Delhi
// I am Sita from Mumbai
*/

const person1 = {
    name: "Ujju",
    city: "Delhi"
};

const person2 = {
    name: "Adi",
    city: "Mumbai"
};

function printDetails() {
    console.log(`I am ${this.name} from ${this.city}`);
}

const boundFunc1 = printDetails.bind(person1);
const boundFunc2 = printDetails.bind(person2);

boundFunc1(); // Output: I am Ujju from Delhi
boundFunc2(); // Output: I am Adi from Mumbai

//💡 bind() Recap:
//! bind() returns a new function with this permanently set to the passed object.
//! this in printDetails now points to either person1 or person2.




/*
🔨 Q4: Function Reuse with call() and apply()
✅ Make a function register(course, duration) which logs:

<name> has registered for <course> for <duration> months.

Now use call() and apply() to run this function for different user objects with arguments.
*/
function CourseDetail () {
  
}












/*
🔨 Q5: Create a Class with Method Using this
✅ Create a class User with:

username and role properties

A method login() that prints:

"User <username> with role <role> has logged in."

Create 2 objects and call login() for both.
*/