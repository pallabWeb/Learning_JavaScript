// Function declaration to say a name
function sayMyName() {
    console.log("pallab");
}

// Uncomment the following line to call the function
// sayMyName();

// Function declaration to add two numbers and return the result
function addTwoNumbers(number1, number2) {
    // Calculate the sum of number1 and number2
    // let result = number1 + number2;
    // Return the result
    // return result; // when i use return keyword, the function will end
    return number1 + number2;
}

// Calling the addTwoNumbers function with arguments 2 and 5
const result = addTwoNumbers(2, 5);

// Uncomment the following line to log the result
// console.log(result);

// Function declaration to display a welcome message for a user
function loginUserMessage(username = "Guest") {
    // Check if the username is not provided (null or undefined)
    if (!username) { // !username === username === undefined
        console.log("Please provide a username");
        return;
    }
    // Return a welcome message
    return `Welcome ${username}!`;
}

// Calling loginUserMessage with the argument "pallab"
// console.log(loginUserMessage("pallab")); // Output: "Welcome pallab!"

// Calling loginUserMessage without an argument, using the default value
// console.log(loginUserMessage()); // Output: "Welcome Guest!"


// Function using the rest parameter to collect arguments into an array
function calculateCartPrice(...num1) {
    // ...num1 is the rest parameter that collects all arguments into an array
    return num1; // Return the array of arguments
}

// Uncomment the following line to test the function
// console.log(calculateCartPrice(10, 5, 3, 646)); // Output: [10, 5, 3, 646]

// Declaring an object with properties
const user = {
    name: "Pallab",
    price: 100
};

// Function to handle and print object properties
function handleObject(anyobject) {
    console.log(`name: ${anyobject.name}, price: ${anyobject.price}`);
}

// Uncomment the following line to test the function with the user object
// handleObject(user);

// Calling the function with a new object
handleObject({
    name: "Pal",
    price: 199
}); // Output: name: Pal, price: 199

// Declaring an array
const myNewArray = [200, 300, 400];

// Function to return the second value of an array
function returnSecondValue(getArray) {
    return getArray[1]; // Access and return the second element of the array
}

// Uncomment the following line to test the function with myNewArray
// console.log(returnSecondValue(myNewArray)); // Output: 300

// Testing the function with a new array
console.log(returnSecondValue([100, 200, 300])); // Output: 200
