///////////////////////// Primitive ////////////////////////

// JavaScript has 7 types of primitive data types:
// 1. Number
// 2. String
// 3. Boolean
// 4. Null
// 5. Undefined
// 6. Symbol
// 7. BigInt

// Declaring variables with primitive data types
const score = 100; // Number
const scoreValue = "Pallab"; // String
const isLoggedIn = false; // Boolean
const outSideTemp = null; // Null
let userEmail; // Undefined
const id = Symbol("123"); // Symbol
const bigNumber = 100n; // BigInt

////////////////////  Reference (non-primitive) //////////////////////

// JavaScript has 3 main types of non-primitive data types (also known as reference types):
// 1. Object
// 2. Array
// 3. Function

// Declaring an array
const heroes = ["pallab", "piya", "piya"]; // Array

// Declaring an object
let myObj = {
    name: "pallab",
    age: 18, // Object
    isLoggedIn: false
};

// Declaring a function
const myFunction = function () {
    console.log("Hello World"); // Function
};

// Checking the type of a variable
console.log(typeof scoreValue); // Output: "string"

////////////////////////// Stack (Primitive) //////////////////////////

// Primitive data types are stored in the stack. They hold actual values.

let myYoutubeName = "pallab";

let anotherYoutubeName = myYoutubeName; // Copying the value
anotherYoutubeName = "piya"; // Changing the copied value

// myYoutubeName remains unchanged because primitives are copied by value
console.log(myYoutubeName); // Output: "pallab"
console.log(anotherYoutubeName); // Output: "piya"

////////////////////////// Heap (Non-Primitive) //////////////////////////

// Non-primitive data types are stored in the heap. They hold references to the values.

let userOne = {
    name: "pallab",
    age: 18,
    email: "pallab@gmail"
};

let userTwo = userOne; // Copying the reference

userTwo.email = "piya@gmail.com"; // Changing the value via the reference

// Both userOne and userTwo point to the same object, so the change affects both
console.log(userOne.email); // Output: "piya@gmail.com"
console.log(userTwo.email); // Output: "piya@gmail.com"
