// Declaring a variable with a number value
const score = 400;

// Printing the score
// console.log(score);

// Creating a Number object
const balance = new Number(300);

// Printing the balance
// console.log(balance);

// Converting the balance to a string and getting its length
// console.log(balance.toString().length); // Output: 3

// Converting the balance to a string with fixed-point notation (2 decimal places)
// console.log(balance.toFixed(2)); // Output: "300.00"

// Declaring a variable with a floating-point number
const otherNumber = 23.8977;

// Converting the number to a string with a specified precision (total number of significant digits)
// console.log(otherNumber.toPrecision(4)); // Output: "23.90"

// Declaring a variable with a large number
const hundreds = 100000;

// Converting the number to a locale-specific string (Indian number system)
// console.log(hundreds.toLocaleString('en-IN')); // Output: "1,00,000"

// *************************************** Math *************************************** //

// Printing the Math object to see available methods and properties
console.log(Math);

// Printing the value of PI
// console.log(Math.PI); // Output: 3.141592653589793

// Rounding a number to the nearest integer
// console.log(Math.round(3.6)); // Output: 4

// Rounding a number down to the nearest integer
// console.log(Math.floor(3.6)); // Output: 3

// Rounding a number up to the nearest integer
// console.log(Math.ceil(3.6)); // Output: 4

// Truncating the decimal part of a number
// console.log(Math.trunc(3.6)); // Output: 3

// Getting the sign of a number
// console.log(Math.sign(0)); // Output: 0 (returns -1, 0, or 1)

// Generating a random number between 0 (inclusive) and 1 (exclusive)
console.log(Math.random()); // Output: a random number between 0 and 1

// Generating a random number between 1 and 10 (inclusive)
console.log((Math.random() * 10) + 1); // Output: a random number between 1 and 10

// Generating a random integer between min (inclusive) and max (inclusive)
const min = 10;
const max = 20;
console.log(Math.floor(Math.random() * (max - min + 1)) + min); // Output: a random integer between 10 and 20
