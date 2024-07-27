const marvel_heros = ["Spiderman", "Ironman", "Hulk", "Thor"];
const DC_heros = ["Superman", "Batman", "Flash"];

marvel_heros.push(DC_heros);

console.log(marvel_heros);
console.log(marvel_heros[3][1]);

const all_heros = marvel_heros.concat(DC_heros);
console.log(all_heros);

const all_new_heros = [...marvel_heros, ...DC_heros];

console.log(all_new_heros);

// flat
const all_new_Arr = [1, 2, 3, [4, 5, 6, [7, 8, 9]]];

const all_new_Arr2 = all_new_Arr.flat(2);

console.log(all_new_Arr2);


console.log(Array.isArray("Pallab"));
console.log(Array.from("Pallab"));
console.log(Array.from({name: "Pallab"}));  // important***


let score1 = 100
let score2 = 200
let score3 = 300

console.log(Array.of(score1, score2, score3));


// These are the 7 methods in Array