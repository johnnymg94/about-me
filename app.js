"use strict";

let userPoints = 0;

alert("Welcome to my guessing game");

let user = prompt("What is your name?");
alert(
  "Hi " +
    user +
    "! I am so glad you are that bored that you would decide to come and visit my site."
);

alert(
  "I'm going to ask you 6 questions about me. Let's see how many you can guess correctly. Let's get started, " +
    user +
    "!"
);

let userName = prompt(
  user + ", Is my name Johnny? (Please answer either yes/no or y/n)"
);
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

let team = prompt(
  "Do I support the football team Everton? (Please answer either yes/no or y/n)"
);
if (team.toLowerCase() === "yes" || team.toLowerCase() === "y") {
  userPoints++;
  // console.log("Correct! Up them toffees bay-ber!");
  alert(
    "Correct! Up them toffees bay-ber! " +
      userPoints +
      "/6 points for you " +
      user
  );
} else {
  // console.log("Are you crazy? Ofcourse I support Everton!");
  alert(
    "Are you crazy? Of course I support Everton! " +
      userPoints +
      "/6 points for you " +
      user
  );
}

let blind = prompt("Am I Colour Blind? (Please answer either yes/no or y/n)");
if (blind.toLowerCase() === "yes" || blind.toLowerCase() === "y") {
  console.log("Corrrect! My dreams of becoming a Pilot are finished");
  userPoints++;
  alert(
    "Corrrect! My dreams of becoming a Pilot are finished " +
      userPoints +
      "/6 Well Done!"
  );
} else {
  console.log(
    "Actually I am. My favourite colour is purple, like a field of  daffodils."
  );
  alert(
    "Actually I am. My favourite colour is purple, like a field of daffodils. You're still on " +
      userPoints +
      "/6, " +
      user
  );
}

// let blind = prompt("Am i blind?");
// if (blind.toLowerCase() === "yes" || blind.toLowerCase() === "y") {
//   userPoints++;
//   alert("Correct" + userPoints + "/6");
// } else {
//   alert("Wrong " + userPoints + "/6");
// }

let siblings = prompt(
  "Do I have seven siblings? (Please answer either yes/no or y/n"
);
if (siblings.toLowerCase() === "yes" || siblings.toLowerCase() === "y") {
  // console.log("Correct! Christmas is a very expensive event for me")
  userPoints++;
  alert(
    "Correct! Christmas is a very expensive time of year for me. You're now on " +
      userPoints +
      "/6, " +
      user
  );
} else {
  // console.loog("Incorrect! I actually do have 7 siblings. 4 Brothers & 3 Sisters");
  alert(
    "Incorrect! I actually do have 7 siblings. 4 Brothers & 3 Sisters. You're still on " +
      userPoints
  );
}

let potter = prompt(
  "Do I like the Harry Potter movies? (Please answer either yes/no or y/n)"
);
if (potter.toLowerCase() === "yes" || potter.toLowerCase() === "y") {
  // console.log("Don’t be daft!");
  userPoints++;
  alert("Don’t be daft! You're still on " + userPoints + ".");
} else {
  // console.log("Correct! Ofcourse I don't watch that trash");
  alert(
    "Correct! " +
      userName +
      ", Of course I don't watch that trash. You're now on " +
      userPoints
  );
}

alert("Here it is... the final question");

const number = 8;
let guess =
  "What number am I thinking of? Clue: it's between 1 & 10. You have 3 guesses";

for (let i = 3; i >= 0; i--) {
  console.log("Hello");
  if (i == 0) {
    alert("Unlucky that was your last attempt. The Number was " + number);
    break;
  }
  if (guess < number) {
    alert("Wrong! You're guess was too low, try again");
    guess = prompt(
      "Guess the number i'm thinking of. You now have " + i + " attempts left."
    );
  } else if (guess > number) {
    alert("No, that was too high. Have another go");
    guess = prompt(
      "Guess the number I am thinking of, yoo now have " + i + " attempts left."
    );
  } else {
    userPoints++;
    alert("Correct! your final score is " + userPoints + " welcome you.");
  }
  break;
}

alert("you have " + userPoints + " points.");
