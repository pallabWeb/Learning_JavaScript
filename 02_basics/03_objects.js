// Singleton
// Object.create

// Object literals

// Creating a unique symbol key for the object property
const mySym = Symbol("key")

// Creating an object using object literals
const JsUser = {
    name: "Pallab", // String property
    age: 18, // Number property
    [mySym]: "pallab is a good boy", // Symbol property with unique key
    location: "Basirhat", // String property
    email: "pallab@gmail.com", // String property
    isLoggedIn: false, // Boolean property
    lastLoggedIn: ["2022-01-01", "2022-01-02"] // Array property
}

// Accessing object properties using dot notation
// console.log(JsUser.email); // Output: pallab@gmail.com

// Accessing object properties using bracket notation
// console.log(JsUser["email"]); // Output: pallab@gmail.com

// Accessing the symbol property using the symbol key
// console.log(JsUser[mySym]); // Output: pallab is a good boy

// Changing the value of an object property
JsUser.email = "piya@gmail.com"

// Freezing the object to prevent further changes
Object.freeze(JsUser);

// Attempting to change a property value after freezing (will not change)
JsUser.email = "piya@google.com"

// console.log(JsUser); // Output: { name: 'Pallab', age: 18, ... , email: 'piya@gmail.com', ... }

// Adding a method to the object
JsUser.greeting = function () {
    console.log("Hello JsUser");
}

// Adding another method that uses the 'this' keyword to access object properties
JsUser.greetingTwo = function () {
    console.log(`Hello JsUser, your email is ${this.email}`);
}

// Calling the method (will output the greeting message)
// console.log(JsUser.greeting); // Outputs the function definition
console.log(JsUser.greeting()); // Output: Hello JsUser

// Calling the method that uses 'this' to include the email property in the message
console.log(JsUser.greetingTwo()); // Output: Hello JsUser, your email is piya@gmail.com
