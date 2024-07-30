// Declaring variables using const
const name = "pallab";
const repoCount = 100;

// Using template literals for string interpolation (newer syntax)
console.log(`Hello ${name}! You have ${repoCount} repositories.`); // Output: "Hello pallab! You have 100 repositories."

// Creating a new String object
const gameName = new String("Cuphead");

// Accessing characters in the string
console.log(gameName[0]); // Output: "C"

// Accessing the prototype of the string object
console.log(gameName.__proto__); // Output: String {}

// String methods
console.log(gameName.length); // Output: 7 (length of the string "Cuphead")
console.log(gameName.toUpperCase()); // Output: "CUPHEAD" (converts string to uppercase)
console.log(gameName.charAt(2)); // Output: "p" (returns the character at index 2)
console.log(gameName.indexOf('p')); // Output: 2 (returns the index of the first occurrence of 'p')

// Extracting a substring
const newString = gameName.substring(0, 3);
console.log(newString); // Output: "Cup" (extracts characters from index 0 to 2)

// Slicing a string (note: negative start index and end index are unusual here)
const newString2 = gameName.slice(-5, 3);
console.log(newString2); // Output: "" (slice does not work as expected with these indices)

// Trimming whitespace from a string
const newString3 = "    pallab     ";
console.log(newString3.trim()); // Output: "pallab" (removes leading and trailing whitespace)

// Replacing a substring in a URL
const url = "https://www.google.com/search%20?q=pallab";
console.log(url.replace("%20", " ")); // Output: "https://www.google.com/search ?q=pallab" (replaces "%20" with a space)
