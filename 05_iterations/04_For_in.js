// Example 1: Using for...in loop with an object

const myObject = {
    js: "JavaScript",  // Key: 'js', Value: 'JavaScript'
    ts: "TypeScript",  // Key: 'ts', Value: 'TypeScript'
    html: "HTML",      // Key: 'html', Value: 'HTML'
    css: "CSS"         // Key: 'css', Value: 'CSS'
};

for (const key in myObject) {
    // The for...in loop iterates over the enumerable properties of an object
    console.log(`${key}'s shortcut for: ${myObject[key]}`);
    // Output:
    // js's shortcut for: JavaScript
    // ts's shortcut for: TypeScript
    // html's shortcut for: HTML
    // css's shortcut for: CSS
}

// Example 2: Using for...in loop with an array

const programming = ["js", "ts", "html", "css"];

for (const key in programming) {
    // The for...in loop iterates over the index (key) of the array elements
    console.log(`${key}'s shortcut for: ${programming[key]}`);
    // Output:
    // 0's shortcut for: js
    // 1's shortcut for: ts
    // 2's shortcut for: html
    // 3's shortcut for: css
}

// Example 3: Attempting to use for...in with a Map (This will not work correctly)

const myMap = new Map();
myMap.set("IND", "India");  // Key: 'IND', Value: 'India'
myMap.set("USA", "United States");  // Key: 'USA', Value: 'United States'
myMap.set("UK", "United Kingdom");  // Key: 'UK', Value: 'United Kingdom'

for (const key in myMap) {
    // The for...in loop does not work with Maps because Maps are not objects with enumerable properties
    console.log(key);  // This will not return the expected key-value pairs of the map
}
// To iterate through a Map, use for...of instead (shown in previous examples)
