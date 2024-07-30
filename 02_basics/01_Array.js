// Creating an array using array literals
const myArr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]; // We can store any type of data in an array

// Creating an array using the Array constructor
const myArr2 = new Array(1, 2, 3, 4, 5, 6, 7, 8, 9, 10);

// Accessing an element at a specific index
console.log(myArr[4]); // Output: 5

// Array Methods

// Adding an element at the end of the array
myArr.push(11); // myArr is now [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11]

// Removing the last element of the array
myArr.pop(); // myArr is now [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

// Adding an element at the start of the array
myArr.unshift(0); // myArr is now [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

// Removing the first element of the array
myArr.shift(); // myArr is now [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

// Checking if an element exists in the array (returns true or false)
console.log(myArr.includes(5)); // Output: true

// Finding the index of an element in the array (returns -1 if not found)
console.log(myArr.indexOf(5)); // Output: 4

// Logging the array to the console
console.log(myArr); // Output: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

// Converting the array to a string
const newArr = myArr.join(); // newArr is now "1,2,3,4,5,6,7,8,9,10"
console.log(newArr); // Output: 1,2,3,4,5,6,7,8,9,10

/////////////////////////////////// Slice and Splice

// Logging the original array
console.log("A ", myArr); // Output: A [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

// Using slice to get a portion of the array (start index, end index - not included)
const slicedArr = myArr.slice(2, 5); // slicedArr is now [3, 4, 5]
console.log("B ", slicedArr); // Output: B [3, 4, 5]

// Using splice to remove elements from the array (start index, number of elements to remove)
const splicedArr = myArr.splice(3, 5); // splicedArr is now [4, 5, 6, 7, 8], myArr is now [1, 2, 3, 9, 10]
console.log("C ", splicedArr); // Output: C [4, 5, 6, 7, 8]
