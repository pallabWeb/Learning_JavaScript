// ======================================================= Dates ====================================================== //

// Creating a new Date object representing the current date and time
let myDate = new Date();

// Displaying the date in various formats
// console.log(myDate.toString());          // Full date and time string
// console.log(myDate.toDateString());      // Date string (day of the week, month, day, year)
// console.log(myDate.toTimeString());      // Time string (hours, minutes, seconds, time zone)
// console.log(myDate.toLocaleString());    // Locale date and time string
// console.log(myDate.toLocaleDateString());// Locale date string
// console.log(myDate.toLocaleTimeString());// Locale time string
// console.log(typeof myDate);              // Checking the type (object)

// Creating a new Date object with a specific date
// let someDate = new Date("2022, 01, 01"); // Incorrect format
// let someDate = new Date(2024, 5, 23, 5, 4); // Year, month (0-indexed), day, hour, minute
let someDate = new Date("01-01-2022");     // Date string

// Displaying the specific date in locale string format
console.log(someDate.toLocaleString());    // Output: locale-specific date and time string for the specific date

// Getting the current timestamp in milliseconds since January 1, 1970
let myTimeStamp = Date.now();
console.log(myTimeStamp);                  // Output: current timestamp in milliseconds
console.log(someDate.getTime());           // Output: timestamp for the specific date
console.log(Date.now() / 1000);            // Output: current timestamp in seconds
console.log(Math.round(Date.now() / 1000));// Output: rounded current timestamp in seconds

// Creating a new Date object representing the current date and time
let newDate = new Date();
console.log(newDate);                      // Output: current date and time

// Getting the month (0-11) and day of the week (0-6)
console.log(newDate.getMonth() + 1);       // Output: current month (adding 1 to convert from 0-11 to 1-12)
console.log(newDate.getDay());             // Output: current day of the week (0 for Sunday, 1 for Monday, etc.)

// Formatting the date to display the weekday, day, and month
let myDay = newDate.toLocaleString('default', {
    weekday: 'long',
    day: 'numeric',
    month: 'long'
});
console.log(myDay);                        // Output: formatted date string (e.g., "Sunday, 27 July")

// Summary:
// - Date objects represent points in time in JavaScript.
// - Various methods allow formatting dates and times in different ways.
// - Timestamps provide the number of milliseconds since January 1, 1970, which is useful for calculations and comparisons.
// - Date formatting options in toLocaleString allow for flexible date presentations.
