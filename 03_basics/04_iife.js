// Immediately Invoked Function Expression (IIFE)

// Normal function definition and invocation
function one() {
    console.log(`DB CONNECTED`);
}
// Calling the function normally
one(); // Output: DB CONNECTED

// IIFE (Immediately Invoked Function Expression)

(function one() {
    // Named IIFE
    console.log(`DB CONNECTED`);
})();  
// This function is defined and immediately invoked. The parentheses () at the end immediately execute the function.
// Note: The semicolon (;) at the end is crucial if there are other functions above or below it to avoid errors.

( () => { 
    // Un-named IIFE (also known as an anonymous IIFE)
    console.log(`DB CONNECTED AGAIN`);
} )();
// Similar to the named IIFE, but this one uses an arrow function and does not have a name.

( (name) => { 
    // IIFE with parameters
    console.log(`DB CONNECTED AGAIN WITH NAME ${name}`);
} )('Pallab'); 
// This IIFE accepts parameters. The string 'Pallab' is passed as an argument to the function, and it gets logged.
