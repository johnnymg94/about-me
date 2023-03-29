"use strict";

let name = prompt("Is my name Johnny? (Please answer either yes/no or y/n)");
if (name.toLowerCase() === "yes" || name.toLowerCase() === "y") {
  // console.log("I'm glad you knew that");
  alert("I'm glad you knew that");
} else {
  // console.log("Wrong, you don't know my name but it's cool, Craig");
  alert("Wrong, you don't know my name but it's cool, Craig");
}

let team = prompt(
  "Do I support the football team Everton? (Please answer either yes/no or y/n)"
);
if (team.toLowerCase() === "yes" || team.toLowerCase() === "y") {
  // console.log("Correct! Up them toffees bay-ber!");
  alert("Correct! Up them toffees bay-ber!");
} else {
  // console.log("Are you crazy? Ofcourse I support Everton!");
  alert("Are you crazy? Ofcourse I support Everton!");
}

let blind = prompt("Am I Colour Blind? (Please answer either yes/no or y/n)");
if (blind.toLowerCase() === "yes" || blind.toLowerCase === "y") {
  // console.log("Corrrect! My dreams of becoming a Pilot are finished");
  alert("Corrrect! My dreams of becoming a Pilot are finished");
} else {
  // console.log("Actually I am. My favourite colour is purple, like a field of  daffodils.");
  alert(
    "Actually I am. My favourite colour is purple, like a field of daffodils."
  );
}

let siblings = prompt(
  "Do I have seven siblings? (Please answer either yes/no or y/n"
);
if (siblings.toLowerCase() === "yes" || siblings.toLowerCase === "y") {
  // console.log("Correct! Christmas is a very expensive event for me")
  alert("Correct! Christmas is a very expensive event for me");
} else {
  // console.loog("Incorrect! I actually do have 7 siblings. 4 Brothers & 3 Sisters");
  alert("Incorrect! I actually do have 7 siblings. 4 Brothers & 3 Sisters");
}

let potter = prompt(
  "Do I like the Harry Potter movies? (Please answer either yes/no or y/n)"
);
if (potter.toLowerCase() === "yes" || potter.toLowerCase() === "y") {
  // console.log("Don’t be daft!");
  alert("Don’t be daft!");
} else {
  // console.log("Correct! Ofcourse I don't watch that trash");
  alert("Correct! Ofcourse I don't watch that trash");
}
