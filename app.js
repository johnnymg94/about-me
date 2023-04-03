"use strict";

let userPoints = 0;

alert("Welcome to my guessing game");

let user = prompt("What is your name?");
alert("Hi " + user + "! I am so glad you are that bored that you would decide to come and visit my site.");

alert(
  "I'm going to ask you 6 questions about me. Let's see how many you can guess correctly. Let's get started, " + user + "!"
);

let userName = prompt(user + ", Is my name Johnny? (Please answer either yes/no or y/n)");
// prettier-ignore
if (userName.toLowerCase() === "yes" || userName.toLowerCase() === "y") {
  // console.log("I'm glad you knew that");
  userPoints++;
  alert("I'm glad you knew that " + userPoints + "/6 points for you, " + user);
} else {
  // console.log("Wrong, you don't know my name but it's cool, Craig");
  alert(
    "Wrong, you don't know my name but it's cool, Craig. " + userPoints + "/6 points for you sorry.");
}

let team = prompt("Do I support the football team Everton? (Please answer either yes/no or y/n)");
if (team.toLowerCase() === "yes" || team.toLowerCase() === "y") {
  userPoints++;
  // console.log("Correct! Up them toffees bay-ber!");
  alert("Correct! Up them toffees bay-ber! " + userPoints + "/6 points for you " + user);
} else {
  // console.log("Are you crazy? Ofcourse I support Everton!");
  alert("Are you crazy? Of course I support Everton! " + userPoints + "/6 points for you " + user);
}

let blind = prompt("Am I Colour Blind? (Please answer either yes/no or y/n)");
if (blind.toLowerCase() === "yes" || blind.toLowerCase() === "y") {
  console.log("Corrrect! My dreams of becoming a Pilot are finished");
  userPoints++;
  alert("Corrrect! My dreams of becoming a Pilot are finished " + userPoints + "/6 Well Done!");
} else {
  console.log("Actually I am. My favourite colour is purple, like a field of  daffodils.");
  alert(
    "Actually I am. My favourite colour is purple, like a field of daffodils. You're still on " + userPoints + "/6, " + user
  );
}

let siblings = prompt("Do I have seven siblings? (Please answer either yes/no or y/n");
if (siblings.toLowerCase() === "yes" || siblings.toLowerCase() === "y") {
  // console.log("Correct! Christmas is a very expensive event for me")
  userPoints++;
  alert("Correct! Christmas is a very expensive time of year for me. You're now on " + userPoints + "/6, " + user);
} else {
  // console.loog("Incorrect! I actually do have 7 siblings. 4 Brothers & 3 Sisters");
  alert("Incorrect! I actually do have 7 siblings. 4 Brothers & 3 Sisters. You're still on " + userPoints);
}

let potter = prompt("Do I like the Harry Potter movies? (Please answer either yes/no or y/n)");
if (potter.toLowerCase() === "yes" || potter.toLowerCase() === "y") {
  // console.log("Don’t be daft!");
  alert("Don’t be daft! You're still on " + userPoints);
} else {
  // console.log("Correct! Ofcourse I don't watch that trash");
  userPoints++;
  alert("Correct! " + user + ", Of course I don't watch that trash. You're now on " + userPoints);
}

alert("Here it is... the final question");

const number = 8;
let guess = prompt("What number am I thinking of? Clue: it's between 1 & 10. You have 3 guesses");
for (let i = 3; i >= 0; i--) {
  // console.log("Hello");
  if (i === 0) {
    alert("Unlucky that was your last attempt. The Number was " + number);
    break;
  }
  if (guess < number) {
    alert("Wrong! You're guess was too low, try again");
    guess = prompt("Guess the number i'm thinking of. You now have " + (i - 1) + " attempts left.");
  } else if (guess > number) {
    alert("No, that was too high. Have another go");
    guess = prompt("Guess the number I am thinking of, you now have " + (i - 1) + " attempts left.");
  } else if (guess == number) {
    userPoints++;
    alert("Correct! your final score is " + userPoints + " well done you.");
    break;
  }
}

// function q6() {
//   const number = Math.floor(Math.random() * 10) + 1;
//   console.log(number);
//   let guess = prompt(
//     `I'm thinking of a number between 1 and 10, please guess the number? You have 3 attempts to get it right!`
//   );

//   for (let i = 3; i >= 0; i--) {
//     if (i === 0) {
//       alert(
//         `Unlucky ${user}, that was you final attempt. My favourite number is ${number}.`
//       );
//       break;
//     }
//     if (guess < number) {
//       // attempts--;
//       alert("Too low, guess again!");
//       guess = prompt(
//         `Please guess my favourite number? You now have ${i} more attempts to get it right!`
//       );
//     } else if (guess > number) {
//       // attempts--;
//       alert("Too high, guess again!");
//       guess = prompt(
//         `Please guess my favourite number? You now have ${i} more attempts to get it right!`
//       );
//     } else {
//       points++;
//       alert("congratualtions, you must be telepathic, you've read my mind");
//       break;
//     }
//   }
// }

alert("you have " + userPoints + " points.");
