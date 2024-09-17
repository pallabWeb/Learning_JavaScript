// const coding = ["js", "ts", "html", "css", "c++"];


// const values = coding.forEach(function (item) {
//     console.log(item);
//     return item
// })

// console.log(values);

const myNumbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

// const newNumbers = myNumbers.filter( (num) => num > 5 )

// const newNumbers = myNumbers.filter( (num) => {
//     return num > 5
// } )

const newNumbers = []

myNumbers.forEach( (num) => {
    if (num > 5) {
        newNumbers.push(num)
    }
} )

console.log(newNumbers)


const Books = [
    { name: "Book One", author: "author1", genre: "Fiction", publish: "1986", edition: "2014" },
    { name: "Book Two", author: "author2", genre: "Non-Fiction", publish: "1966", edition: "2010" },
    { name: "Book Three", author: "author3", genre: "Science", publish: "1996", edition: "2024" },
    { name: "Book Four", author: "author4", genre: "History", publish: "1999", edition: "2011" },
    { name: "Book Five", author: "author5", genre: "History", publish: "1945", edition: "2010" },
    { name: "Book Six", author: "author6", genre: "Science", publish: "1986", edition: "2019" },
]

let userBooks = Books.filter( (book) => {
    return book.genre === "Fiction"
} )

userBooks = Books.filter( (book) => book.edition >= 2000 )

console.log(userBooks)