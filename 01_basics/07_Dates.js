// ======================================================= Dates ====================================================== //

let myDate = new Date()

// console.log(myDate.toString());
// console.log(myDate.toDateString());
// console.log(myDate.toTimeString());
// console.log(myDate.toLocaleString());
// console.log(myDate.toLocaleDateString());
// console.log(myDate.toLocaleTimeString());
// console.log(typeof myDate);

// let someDate = new Date("2022, 01, 01")
// let someDate = new Date(2024, 5, 23, 5, 4)
let someDate = new Date("01-01-2022")
console.log(someDate.toLocaleString());


let myTimeStamp = Date.now()
console.log(myTimeStamp) 
console.log(someDate.getTime());
console.log(Date.now()/1000); 
console.log(Math.round(Date.now()/1000));

let newDate = new Date()
console.log(newDate);
console.log(newDate.getMonth() + 1); // 0 - 11 month, to show actual month to user add 1
console.log(newDate.getDay());

let myDay = newDate.toLocaleString('default', {
    weekday: 'long',
    day: 'numeric',
    month: 'long'
})

console.log(myDay);