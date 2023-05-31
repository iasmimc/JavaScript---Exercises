const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

const randomNumber = Math.floor(Math.random() * 10) + 1;

rl.question("Guess a number between 1 and 10: ", (userGuess) => {
  if (parseInt(userGuess) === randomNumber) {
    console.log("Good Work");
  } else {
    console.log("Not matched");
  }

  rl.close();
});
