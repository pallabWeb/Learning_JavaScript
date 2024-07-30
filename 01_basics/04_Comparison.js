// Comparison operations with numbers

// Equality and inequality
// console.log(5 == 5); // true
// console.log(5 == 6); // false
// console.log(5 != 5); // false
// console.log(5 != 6); // true

// Greater than and less than
// console.log(5 > 5); // false
// console.log(5 > 6); // false
// console.log(5 < 5); // false
// console.log(5 < 6); // true

// Greater than or equal to and less than or equal to
// console.log(5 >= 5); // true
// console.log(5 >= 6); // false
// console.log(5 <= 5); // true
// console.log(5 <= 6); // true

// Comparison with strings and numbers
// console.log("2" > 1); // true
// console.log("02" > 1); // true

// Comparison with null
console.log(null > 0);       // false - null is treated as 0, but the comparison returns false
console.log(null == 0);      // false - null is not equal to 0 when using the equality operator
console.log(null >= 0);      // true - null is treated as 0, so null >= 0 is true

// Strict equality (===) - compares both value and type
console.log("2" === 2);      // false - different types: string and number
