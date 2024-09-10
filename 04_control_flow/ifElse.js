// Simple if condition to check if a user is logged in
const isUserLoggedIn = true;

if (isUserLoggedIn) {
    // If the condition is true, this block will execute
    console.log("User is logged in");
}

// Comparison operators in JavaScript
// <  : less than
// <= : less than or equal to
// >  : greater than
// >= : greater than or equal to
// == : equal to (compares value only, not type)
// ===: strictly equal to (compares both value and type)
// != : not equal to (compares value only, not type)
// !==: strictly not equal to (compares both value and type)

// Example of if statement with scope

const score = 100;

if (score > 90) {
    // This variable 'power' only exists within this block due to block scope
    const power = "fly";
    // If the condition is true, this block will execute
    console.log(`I can ${power}`); // Output: I can fly
}

// Trying to access 'power' outside its block will result in an error
if (score > 90) {
    const power = "fly";
}
// Uncommenting the line below will throw an error because 'power' is not defined in this scope
// console.log(`I can ${power}`); 

// Example of if-else condition

const balance = 1000;

// This is a one-line if condition without braces (optional for single statements)
// Uncomment to see the output:
// if (balance > 0) console.log("Balance is positive");

// Else if condition
if (balance > 0) {
    // If balance is greater than 0, this block will execute
    console.log("Balance is positive");
} else if (balance < 0) {
    // If the previous condition is false and balance is less than 0, this block will execute
    console.log("Balance is negative");
} else {
    // If none of the previous conditions are true, this block will execute (balance is 0)
    console.log("Balance is zero");
}

// Logical AND (&&) and OR (||) operators

const userLoggedIn = true;          // User is logged in
const debitCard = true;             // User has a debit card
const loggedInFromGoogle = false;   // User is not logged in from Google
const loggedInFromEmail = true;     // User is logged in from email

// Example of logical AND (&&) operator
if (userLoggedIn && debitCard) {
    // This block will execute only if both 'userLoggedIn' and 'debitCard' are true
    console.log("User can Buy");
}

// Example of logical OR (||) operator
if (loggedInFromEmail || loggedInFromGoogle) {
    // This block will execute if either 'loggedInFromEmail' or 'loggedInFromGoogle' is true
    console.log("User can Login");
}
