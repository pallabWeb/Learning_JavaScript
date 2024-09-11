// Example: Checking if the user email exists

const userEmail = "pallab@gmail.com";

if (userEmail) {
    // If the 'userEmail' is a truthy value (not null, undefined, or empty), this block will run
    console.log("Got User's Email");
} else {
    // If the 'userEmail' is falsy, this block will run
    console.log("User's Email Not Found");
}

// Falsy values in JavaScript are: 
// - false
// - 0
// - -0
// - BigInt(0) or 0n
// - ""
// - null
// - undefined
// - NaN (Not-a-Number)

// Truthy values are anything that is not falsy, for example: 
// - true
// - " " (a non-empty string)
// - "0" (a string containing a zero)
// - 'false' (a string)
// - [] (an empty array)
// - {} (an empty object)
// - function() {} (any function)

// Example with an empty array
const emptyArray = [];

if (emptyArray.length === 0) {
    // Checking if the array is empty by its length
    console.log("User's Email Not Found (empty array)");
}

// Example with an empty object
const emptyObj = {};

if (Object.keys(emptyObj).length === 0) {
    // Using Object.keys() to check if the object is empty
    console.log("User's Email Not Found (empty object)");
}

// Nullish Coalescing Operator (??)
// This operator returns the right-hand value if the left-hand value is null or undefined, otherwise, it returns the left-hand value.

let val1;

// Uncomment one of these to test the nullish coalescing behavior:
// val1 = 50 ?? 10;        // Output: 50 (because 50 is not null or undefined)
// val1 = null ?? 10;      // Output: 10 (because null triggers the second value)
// val1 = undefined ?? 14; // Output: 14 (because undefined triggers the second value)

// Multiple nullish coalescing
val1 = null ?? 100 ?? 200;  // Output: 100 (because the first non-null value is 100)

console.log(val1);  // Output: 100

// Ternary Operator example
// Syntax: condition ? expression_if_true : expression_if_false

const iceCreamPrice = 199;
iceCreamPrice >= 200 
    ? console.log("Less than 199")  // If condition (iceCreamPrice >= 200) is true, this runs
    : console.log("More than 199"); // Otherwise, this runs (condition is false)
