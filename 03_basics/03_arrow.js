// Defining an object 'user' with properties and a method
const user = {
    // Property 'username' with the value "Pallab"
    username: "Pallab",

    // Property 'price' with the value 100
    price: 100,

    // Method 'wellcomeMessage' that logs a welcome message and the 'user' object itself
    wellcomeMessage: function () {
        // Logging a welcome message using the 'username' property
        console.log(`Welcome ${this.username}!`);
        
        // Logging the entire 'user' object ('this' refers to the object itself)
        console.log(this);
    }
} 

// Uncomment the below lines to see the method in action:

// Calling the 'wellcomeMessage' method
// user.wellcomeMessage()

// Changing the 'username' property of the 'user' object
// user.username = "Pal"

// Calling the 'wellcomeMessage' method again to see the updated username
// user.wellcomeMessage()

// 'this' in global context (outside of any function or object) usually refers to the global object (e.g., 'window' in browsers).
// Uncomment the line below to log 'this' in global context:
// console.log(this);

// A regular function 'team' which logs 'this.username' (undefined in this context)
function team() {
    console.log(this.username);
}

// Calling the 'team' function:
// Uncomment to see the result (will log 'undefined' since 'this' is referring to the global object):
// team()

// A function expression 'tea' using a regular function (not an arrow function)
const tea = function () {
    // Local variable 'username' within the function's scope
    let username = "Pallab";
    
    // Logging 'this.username' (undefined, since 'this' in regular functions refers to the global object if not bound)
    console.log(this.username);
}

// Calling the 'tea' function:
// Uncomment to see the result (will log 'undefined'):
// tea()

// An arrow function 'tea' defined with the 'const' keyword
const chai = () => {
    // Local variable 'username' (not used outside this function)
    let username = "Pallab";
    
    // Logging 'this' (arrow functions do not have their own 'this'; they inherit it from the parent scope)
    console.log(this);
}

// Calling the 'chai' arrow function:
// Uncomment to see the result (will log 'this' inherited from the surrounding context):
// chai()

// Examples of arrow functions for basic addition operations

// Example 1: Explicit return of the sum of two numbers
// const addTwo = (num1, num2) => {
//     return num1 + num2
// }

// Example 2: Simplified version (implicit return) of the above function
// const addTwo = (num1, num2) => num1 + num2

// Example 3: Even more simplified version (implicit return) using parentheses
// const addTwo = (num1, num2) => (num1 + num2)

// Example 4: Returning an object with 'username' as a property
const addTwo = (num1, num2) => ({ username: "Pallab" })

// Logging the result of calling 'addTwo' with arguments 2 and 2
// This will return and log the object: { username: "Pallab" }
console.log(addTwo(2, 2))
