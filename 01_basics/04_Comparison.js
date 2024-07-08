// console.log(5 == 5); // true
// console.log(5 == 6); // false
// console.log(5 != 5); // false
// console.log(5 != 6); // true
// console.log(5 > 5); // false
// console.log(5 > 6); // false
// console.log(5 < 5); // false
// console.log(5 < 6); // true
// console.log(5 >= 5); // true
// console.log(5 >= 6); // false
// console.log(5 <= 5); // true
// console.log(5 <= 6); // true


// console.log("2" > 1);
// console.log("02" > 1);


console.log(null > 0);                      // The reason is that an equality check == and comparisons > <  >= <= work differently.
console.log(null == 0);      // ----->      // Comparisons convert null to a number, treating it as 0.
console.log(null >= 0);                     // That's why(3) null >= 0 is true and(1) null > 0 is false.


// ===

console.log("2" === 2);