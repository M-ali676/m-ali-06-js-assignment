//_________________ Q-01 Positive Number __________________//

// var num = +prompt("Any positive number give");
// alert("Number: " + num + "<br>");
// alert("Round off: " + Math.round(num) + "<br>");
// alert("Floor value: " + Math.floor(num) + "<br>");
// alert("Ceil value: " + Math.ceil(num) + "<br>");

//_______________________ Q-02 Negative Number ______________//

// var num = +prompt("Any negative");
// alert("Number: " + num + "<1>");
// alert("Round off: " + Math.round(num) + "<2>");
// alert("Floor value: " + Math.floor(num) + "<3>");
// alert("Ceil value: " + Math.ceil(num) + "<4>");

//____________________ Q-03 Absolute value __________________________//

// var num = +prompt("Any number give:");
// alert("Absolute value: " + Math.abs(num));

//___________________ Q-04 Dice Simulator ______________________//

// var dice = Math.floor(Math.random() * 6) + 1;
// alert("Dice value: " + dice);

//______________ Q-05 Coin Toss ________________________//

// var toss = Math.random() < 0.5 ? "Heads" : "Tails";
// alert("Coin: " + toss);

//__________________________ Q-06 Random number(1 to 100) _____________//

// var num = Math.floor(Math.random() * 100) + 1;
// alert("Random number: " + num);

//________________________ Q-07 Weight Parser ______________________________//

// var weight = prompt("Your weiht give (e.g., 50kg or 50.2kilograms):");
// var parsedWeight = parseFloat(weight);
// alert("Your weight is: " + parsedWeight + "kilograms");

//____________________________ Q-08 Secret Number Guess _____________________//

// var secret = Math.floor(Math.random() * 10) + 1;
// var guess = +prompt("1 to 10 number:");
// if (guess === secret) {
//     alert("Wow! are you right.");
// } else {
//     alert("Wrong guess. secret number: " + secret);
// }
