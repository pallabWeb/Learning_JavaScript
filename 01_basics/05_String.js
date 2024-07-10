const name = "pallab"
const repoCount = 100

// console.log("Hello " + name + "! You have " + repoCount + " repositories.")   // This is Out Dated Syntax

console.log(`Hello ${name}! You have ${repoCount} repositories.`)   // This is Newer Syntax

const gameName = new String("Cuphead")

console.log(gameName[0])
console.log(gameName.__proto__);


console.log(gameName.length);
console.log(gameName.toUpperCase());
console.log(gameName.charAt(2));
console.log(gameName.indexOf('p'));

const newString = gameName.substring(0, 3)
console.log(newString);


const newString2 = gameName.slice(-5, 3)
console.log(newString2);

const newString3 = "    pallab     "
console.log(newString3.trim());

const url = "https://www.google.com/search%20?q=pallab"

console.log(url.replace("%20", " "));