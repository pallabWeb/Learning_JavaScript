// Example 1: for...of loop with an array

const arr = [1, 2, 3, 4, 5];

for (const num of arr) {
    // The for...of loop iterates through each element in the 'arr' array
    console.log(num);  // Prints each number from the array
    // Output will be: 1, 2, 3, 4, 5
}

// Example 2: for...of loop with a string

const greetings = "Hello";

for (const greet of greetings) {
    // The for...of loop iterates through each character in the 'greetings' string
    console.log(`Each greeting character: ${greet}`);
    // Output will be: H, e, l, l, o (each character printed separately)
}

// Example 3: Iterating through a Map

// Creating a new Map (a key-value pair data structure)
const myMap = new Map();
myMap.set("IND", "India");  // Key: "IND", Value: "India"
myMap.set("USA", "United States");  // Key: "USA", Value: "United States"
myMap.set("UK", "United Kingdom");  // Key: "UK", Value: "United Kingdom"

// Iterating through the Map using for...of
for (const [key, value] of myMap) {
    // The for...of loop allows you to extract both the key and the value from the Map
    console.log(key + " : " + value);
    // Output will be:
    // IND : India
    // USA : United States
    // UK : United Kingdom
}

// Example 4: Attempt to iterate through an object (which will result in an error)

// Define an object with properties
const myObj = {
    'name': "Pallab",
    'age': 18,
    'email': "pallab@gmail.com"
};

// The for...of loop works with iterable objects like arrays, maps, and strings.
// However, normal JavaScript objects are not iterable, so this loop will cause an error if run.
// for (const [key, value] of myObj) {
//     console.log(key + " : " + value);
// }
// The above code would throw an error because `myObj` is not an iterable. 
