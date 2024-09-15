// Example 1: Basic forEach loop

const coding = ["js", "ts", "html", "css", "c++"];

coding.forEach(function (item) {
    // The forEach method iterates over each element in the array.
    // 'item' represents the current element in each iteration.
    console.log(item);  // Prints each element in the array.
    // Output: "js", "ts", "html", "css", "c++"
});

// Example 2: Using an arrow function with forEach

coding.forEach((item) => {
    // Arrow function alternative for the same functionality as above.
    console.log(item);
});

// Example 3: Using a separate function with forEach

function printMe(item) {
    // This function prints the current array element
    console.log(item);
}

coding.forEach(printMe);  
// Here, we pass 'printMe' as a callback function to forEach. It will run 'printMe' for each element in the array.
// Output: "js", "ts", "html", "css", "c++"

// Example 4: Using forEach with additional arguments (item, index, and array)

coding.forEach((item, index, arr) => {
    // 'item' is the current element, 'index' is the element's position, and 'arr' is the original array
    console.log(item, index, arr);  
    // Output will show each item, its index, and the entire array:
    // "js", 0, ["js", "ts", "html", "css", "c++"]
    // "ts", 1, ["js", "ts", "html", "css", "c++"]
    // ... and so on for the rest of the elements.
});

// Example 5: Using forEach with an array of objects

const myCoding = [
    {
        languageName: "javaScript",
        languageFileName: "js"
    },
    {
        languageName: "java",
        languageFileName: "java"
    },
    {
        languageName: "c++",
        languageFileName: "cpp"
    }
];

myCoding.forEach((item) => {
    // Iterating over an array of objects.
    // 'item' is the current object, and we access its properties (languageName and languageFileName)
    console.log(item.languageName, item.languageFileName);
    // Output:
    // javaScript js
    // java java
    // c++ cpp
});
