// Example 1: Basic while loop

let index = 0;
while (index <= 10) {
    // This loop will run as long as 'index' is less than or equal to 10
    console.log(`Value of index: ${index}`);

    // Increment the 'index' by 2 on each iteration
    index = index + 2;
    // This will print 0, 2, 4, 6, 8, and 10
}

// Example 2: While loop iterating through an array

let myArray = ["flash", "spiderman", "wolverine"]; // Array of superheroes

let arr = 0;
while (arr < myArray.length) {
    // This loop will run as long as 'arr' is less than the length of 'myArray'

    console.log(myArray[arr]);  // Print the current element in the array

    arr++;  // Increment the index to move to the next element
    // This will print "flash", "spiderman", and "wolverine"
}

// Example 3: Do-while loop

let score = 1;

do {
    // A 'do-while' loop will execute the code block at least once
    console.log(`Value of score: ${score}`);
    
    score++;  // Increment the score after each iteration
} while (score <= 10);  // The loop will continue as long as 'score' is less than or equal to 10

// The 'do-while' loop ensures that the code inside the loop is executed at least once, 
// even if the condition (score <= 10) is initially false.