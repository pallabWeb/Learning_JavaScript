// Variable Declarations and Scopes

// Using 'let' to declare a variable 'a' with value 300
let a = 300;

if (true) {
    let a = 10; // 'let' creates a block-scoped variable 'a' inside the if statement
    const b = 20; // 'const' creates a block-scoped constant 'b'
    var c = 30; // 'var' creates a function-scoped variable 'c'
    console.log("inside if:", a); // Output: inside if: 10
}

// This 'a' refers to the one declared outside the if block
console.log(a); // Output: 300

// 'b' is not accessible here because it's block-scoped
console.log(b); // Error: b is not defined

// 'c' is accessible here because 'var' is function-scoped, not block-scoped
console.log(c); // Output: 30


// ===================== Closures and Scopes ===================== //

function one() {
    const username = "Pallab"; // 'username' is scoped to the 'one' function

    function two() {
        const website = "Youtube"; // 'website' is scoped to the 'two' function
        console.log(username); // 'two' can access 'username' from the 'one' function due to closure
    }

    console.log(website); // Error: website is not defined (website is scoped to 'two')

    two(); // Calling the 'two' function
}

one(); // Calling the 'one' function

// ===================== Nested Scopes ===================== //

if (true) {
    const username = "Pallab"; // 'username' is block-scoped to this if block
    if (username === "Pallab") {
        const website = "Youtube"; // 'website' is block-scoped to this inner if block
        console.log(username + website); // Output: Pallab Youtube
    }
    console.log(website); // Error: website is not defined (block-scoped to inner if block)
}

// 'username' is not accessible outside the block
console.log(username); // Error: username is not defined


// ===================== Hoisting Basics ===================== //

// Function declaration is hoisted, so 'addone' can be called before it's defined
addone(7);

function addone(num) {
    return num + 1;
}

// Function expression is not hoisted, so 'addtwo' cannot be called before it's defined
addtwo(4); // Error: Cannot access 'addtwo' before initialization

// 'addtwo' is a function expression, which is not hoisted
const addtwo = function (num) {
    return num + 2;
}
