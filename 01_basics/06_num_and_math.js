const score = 400

// console.log(score);

const balance = new Number(300)

// console.log(balance);

// console.log(balance.toString().length);
// console.log(balance.toFixed(2));

const otherNumber = 23.8977

// console.log(otherNumber.toPrecision(4));

const hundreds = 100000

// console.log(hundreds.toLocaleString('en-IN'));


// *************************************** Math *************************************** //

console.log(Math);

// console.log(Math.PI); // 3.141592653589793
// console.log(Math.round(3.6)); // round
// console.log(Math.floor(3.6)); // round down
// console.log(Math.ceil(3.6)); // round up
// console.log(Math.trunc(3.6)); // remove the decimal part
// console.log(Math.sign(0));  // 0, -1, 1

console.log(Math.random());
console.log((Math.random()*10) + 1);

const min = 10
const max = 20

console.log(Math.floor(Math.random() * (max - min + 1)) + min);