// 1. Write a JavaScript program to display the current day and time.

var today = new Date();
var date = today.getFullYear()+'-'+(today.getMonth()+1)+'-'+today.getDate();
var time = today.getHours() + ":" + today.getMinutes() + ":" + today.getSeconds();
var dateTime = date + ' ' + time;
console.log(dateTime);

// 2. Write a JavaScript program to convert a number to a string.

var num=213; 

console.log("Output: " + num.toString(2));      

// 3. Write a JavaScript program to convert a string to the number.

var stringy = "123";

console.log(parseInt(stringy));

// 4. Write a JavaScript program that takes in different datatypes and prints out whether they are a:
// Boolean
// Null
// Undefined
// Number
// NaN
// String

var checktype = 0/0 ;

console.log(typeof checktype);

// 5. Write a JavaScript program that adds 2 numbers together.

var firstNumber = 9;
var secondNumber = 5;

console.log(firstNumber + secondNumber);

// 6. Write a JavaScript program that runs only when 2 things are true.

var name = "Oscar";
var lastName = "Garcia";

if (name=="Oscar" && lastName=="Garcia") {
  console.log("The name is right.")
};

// 7. Write a JavaScript program that runs when 1 of 2 things are true.

let name = "Oscar";
let lastName = "Bloom";

if (name=="Oscar" || lastName=="Garcia") {
  console.log("At least one name is right.");
} 

// 8. Write a JavaScript program that runs when both things are not true.

let name = "Erick";
let lastName = "Bloom";

if (name=="Oscar" || lastName=="Garcia") {
  console.log("At least one name is right.");
} else {
  console.log("Both names are wrong.")
}