let a = Math.floor(Math.random() * 10) + 1;
let userguess;

while (true) {
  userguess = parseInt(prompt("Guess the number between 1 to 10"), 10);

  if (userguess > 10 || userguess < 1) {
    console.log("Invalid number");
    break;
  }

  if (userguess == a) {
    console.log("You won");
    break;
  } else {
    console.log("Better Luck next time");
    console.log("Number was : "+ a);
    break;
  }
}
