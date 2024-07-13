const myArr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]; // we can store any type of data in array

const myArr2 = new Array(1, 2, 3, 4, 5, 6, 7, 8, 9, 10);

console.log(myArr[4]);

// Array Methods 

myArr.push(11); // add element at the end
myArr.pop(); // remove element at the end

myArr.unshift(0); // add element at the start
myArr.shift(); // remove element at the start

console.log(myArr.includes(5)); // return true or false
console.log(myArr.indexOf(5)); // return index of element

console.log(myArr);

const newArr = myArr.join(); // convert array to string
console.log(newArr);


/////////////////////////////////// Slice and Splice

console.log("A ", myArr);

const slicedArr = myArr.slice(2, 5); // (start, end)
console.log("B ", slicedArr);


const splicedArr = myArr.splice(3, 8); // (start, end)
console.log("C ", splicedArr);