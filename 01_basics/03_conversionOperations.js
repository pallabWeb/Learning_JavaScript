// Declaring a variable with an undefined value
let score = undefined;

// Checking the type of the score variable
console.log(typeof score); // Output: "undefined"
console.log(typeof (score)); // Output: "undefined"

// Converting the undefined score to a number
let valueInNumber = Number(score);
console.log(typeof valueInNumber); // Output: "number"
console.log(valueInNumber); // Output: NaN (Not-a-Number)

// Conversion examples
// "33" => 33
// "32abc" => NaN
// true => 1
// false => 0

// Declaring a variable with a boolean value
let isLoggedIn = 1;

// Converting the boolean value to a boolean type
let booleanIsLoggedIn = Boolean(isLoggedIn);
console.log(booleanIsLoggedIn); // Output: true

// Boolean conversion examples
// 1 => true
// 0 => false
// "" => false
// "pallab" => true

// Declaring a variable with a number value
let someNumber = 44;

// Converting the number to a string
let stringNumber = String(someNumber);
console.log(typeof stringNumber); // Output: "string"

// *************************************** Operations *************************************** //

// Declaring a variable with a positive value
let value = 3;

// Negating the value
let negValue = -value;
console.log(negValue); // Output: -3

// Basic arithmetic operations
console.log(2 + 2); // Output: 4
console.log(2 - 2); // Output: 0
console.log(2 * 2); // Output: 4
console.log(2 ** 3); // Output: 8 (exponentiation)
console.log(2 / 3); // Output: 0.6666666666666666
console.log(2 % 3); // Output: 2 (remainder)

// String concatenation
let str1 = "hello";
let str2 = " pallab";

let str3 = str1 + str2;
console.log(str3); // Output: "hello pallab"

// String and number concatenation
console.log("1" + 2); // Output: "12" (string concatenation)
console.log(1 + "2"); // Output: "12" (string concatenation)
console.log("1" + 2 + 2); // Output: "122" (string concatenation)
console.log(1 + 2 + "2"); // Output: "32" (number addition followed by string concatenation)

// Unary plus operator
console.log(+true); // Output: 1 (true is converted to 1)
console.log(+""); // Output: 0 (empty string is converted to 0)

// Declaring multiple variables and assigning them the same value
let num1, num2, num3;
num1 = num2 = num3 = 2 + 2;

// Increment operator
let gameScore = 5;
++gameScore;
console.log(gameScore); // Output: 6
