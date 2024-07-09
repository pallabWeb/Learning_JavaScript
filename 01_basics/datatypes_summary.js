///////////////////////// Primitive ////////////////////////

// 7 types of primitive
// 1. Number
// 2. String
// 3. Boolean
// 4. Null
// 5. Undefined
// 6. Symbol
// 7. BigInt

const score = 100 // number
const scoreValue = "Pallab" // string

const isLoggedIn = false // boolean
const outSideTemp = null // null
let userEmail; // undefined

const id = Symbol("123") // symbol

const bigNumber = 100n // bigint



////////////////////  Reference (non-primitive) //////////////////////

// 1. Object
// 2. Array
// 3. Functions  


const heroes = ["pallab", "piya", "piya"]; // array

let myObj = {
    name: "pallab",
    age: 18,                             // object
    isLoggedIn: false     
}



const myFunction = function () { 
    console.log("Hello World");         // function
}                                     

console.log(typeof scoreValue); // check the type of variable