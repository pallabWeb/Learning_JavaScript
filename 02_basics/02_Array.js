// Creating arrays of Marvel and DC heroes
const marvel_heros = ["Spiderman", "Ironman", "Hulk", "Thor"];
const DC_heros = ["Superman", "Batman", "Flash"];

// Adding the DC heroes array as a single element to the Marvel heroes array
marvel_heros.push(DC_heros);

console.log(marvel_heros); // Output: ["Spiderman", "Ironman", "Hulk", "Thor", ["Superman", "Batman", "Flash"]]

// Accessing an element from the nested DC heroes array
console.log(marvel_heros[4][1]); // Output: "Batman"

// Concatenating Marvel and DC heroes arrays into a new array
const all_heros = marvel_heros.concat(DC_heros);
console.log(all_heros); // Output: ["Spiderman", "Ironman", "Hulk", "Thor", ["Superman", "Batman", "Flash"], "Superman", "Batman", "Flash"]

// Merging Marvel and DC heroes arrays using the spread operator (commonly used)
const all_new_heros = [...marvel_heros, ...DC_heros];
console.log(all_new_heros); // Output: ["Spiderman", "Ironman", "Hulk", "Thor", ["Superman", "Batman", "Flash"], "Superman", "Batman", "Flash"]

// Creating a nested array
const all_new_Arr = [1, 2, 3, [4, 5, 6, [7, 8, 9]]];

// Flattening the nested array to a depth of 2
const all_new_Arr2 = all_new_Arr.flat(2);
console.log(all_new_Arr2); // Output: [1, 2, 3, 4, 5, 6, 7, 8, 9]

// Checking if a value is an array
console.log(Array.isArray("Pallab")); // Output: false
console.log(Array.isArray(all_new_Arr)); // Output: true

// Creating an array from a string
console.log(Array.from("Pallab")); // Output: ["P", "a", "l", "l", "a", "b"]

// Creating an array from an object (produces an empty array because the object is not iterable)
console.log(Array.from({name: "Pallab"})); // Output: []

// Creating an array from individual elements
let score1 = 100;
let score2 = 200;
let score3 = 300;
console.log(Array.of(score1, score2, score3)); // Output: [100, 200, 300]

// Summary of array methods used:
// 1. push - adds an element to the end of the array
// 2. concat - merges two or more arrays
// 3. flat - flattens nested arrays to the specified depth
// 4. isArray - checks if a value is an array
// 5. from - creates an array from an iterable or array-like object
// 6. of - creates an array from the provided arguments