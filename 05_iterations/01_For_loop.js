// Example 1: Simple for loop

for (let i = 0; i <= 10; i++) {
    // Loop runs from 0 to 10 (inclusive)
    const element = i;
    
    if (element == 5) {
        // When the value of 'element' is 5, this message will be logged
        // console.log("Five is my favorite number");
    }

    // Logs each value of 'element' from 0 to 10
    // console.log(element);
}

// Example 2: Nested for loops

for (let i = 1; i <= 10; i++) {
    // Outer loop runs from 1 to 10
    // console.log(`Outer Loop: ${i}`);

    for (let j = 1; j <= 10; j++) {
        // Inner loop runs from 1 to 10 for each iteration of the outer loop
        // console.log(`Inner Loop: ${j} and Outer Loop: ${i}`);

        // Outputs the multiplication table (e.g., 1 * 1 = 1, 1 * 2 = 2, etc.)
        // console.log(`${j} * ${i} = ${j * i}`);
    }
}

// Example 3: Iterating through an array

let myArray = ["flash", "spiderman", "hulk", "ironman"];

for (let index = 0; index < myArray.length; index++) {
    // The loop runs through each element of the array 'myArray'
    const element = myArray[index];

    // Logs each element in the array (e.g., "flash", "spiderman", etc.)
    // console.log(element);
}

// Example 4: Break statement in a loop

for (let index = 1; index <= 20; index++) {
    // Loop runs from 1 to 20

    if (index == 5) {
        // When the index reaches 5, the loop is stopped by 'break'
        console.log("5 Detected !");
        break;  // Terminates the loop once index is 5
    }

    // Logs the current value of 'index' until the loop is broken
    console.log(`Value of index: ${index}`);
}

// Example 5: Continue statement in a loop

for (let index = 1; index <= 20; index++) {
    // Loop runs from 1 to 20

    if (index == 5) {
        // When the index is 5, 'continue' skips the current iteration
        console.log("5 Detected !");
        continue;  // Skips to the next iteration without logging index 5
    }

    // Logs the current value of 'index', but skips when index is 5
    console.log(`Value of index: ${index}`);
}
