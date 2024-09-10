// Syntax for a switch statement:

// switch (key) {
//     case value:
//         // Code to execute if key matches the value
//         break;  // Exits the switch after executing the case
//     default:
//         // Code to execute if no cases match
//         break;  // Optional but good practice to end the switch block
// } 

// Example: Switch statement to handle different days of the week

const day = "tuesday";  // Assigning the current day to the variable 'day'

switch (day) { 
    // 'switch' checks the value of the variable 'day'
    
    case "monday":  // If 'day' is "monday", execute this block
        console.log("Today is Monday");
        break;  // Exits the switch block

    case "tuesday":  // If 'day' is "tuesday", execute this block
        console.log("Today is Tuesday");
        break;

    case "wednesday":  // If 'day' is "wednesday", execute this block
        console.log("Today is Wednesday");
        break;

    case "thursday":  // If 'day' is "thursday", execute this block
        console.log("Today is Thursday");
        break;

    case "friday":  // If 'day' is "friday", execute this block
        console.log("Today is Friday");
        break;

    case "saturday":  // If 'day' is "saturday", execute this block
        console.log("Today is Saturday");
        break;

    case "sunday":  // If 'day' is "sunday", execute this block
        console.log("Today is Sunday");
        break;

    default:  // If 'day' doesn't match any case, this block will execute
        console.log("Invalid day");
        break;  // Although not mandatory for the last case, it's good practice to include
}

// In this example, since 'day' is set to "tuesday", the output will be:
// Today is Tuesday