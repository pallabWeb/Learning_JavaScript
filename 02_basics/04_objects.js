// Creating an empty object using an object literal
// const tinderUser = new Object() // Another way to create an object
const tinderUser = {}

// Adding properties to the object
tinderUser.id = "21"
tinderUser.name = "Pallab"
tinderUser.isLoggedIn = false

// Logging the tinderUser object to the console
// console.log(tinderUser); // Output: { id: '21', name: 'Pallab', isLoggedIn: false }

// Creating an object with nested properties
const regulaUser = {
    email: "pallab@gmail.com",
    fullname: {
        userfullname: {
            firstname: "Pallab",
            lastname: "Mondal"
        }
    }
}

// Accessing nested properties
// console.log(regulaUser.fullname.userfullname.firstname); // Output: Pallab

// Creating two simple objects
const obj1 = {1: "a", 2: "b"}
const obj2 = {3: "c", 4: "d"}

// Merging two objects into one using Object.assign
// const obj3 = Object.assign({}, obj1, obj2)

// Merging two objects into one using the spread operator (commonly used)
const obj3 = {...obj1, ...obj2}
console.log(obj3); // Output: { '1': 'a', '2': 'b', '3': 'c', '4': 'd' }

// Creating an array of user objects
const users = [
    {
        id: 1,
        email: "p@gmail.com"
    },
    {
        id: 2,
        email: "p2@gmail.com"
    },
    {
        id: 3,
        email: "p3@gmail.com"
    }
]

// Accessing the email of the second user in the array
users[1].email // Output: "p2@gmail.com"

// Logging the tinderUser object to the console
console.log(tinderUser); // Output: { id: '21', name: 'Pallab', isLoggedIn: false }

// Logging the keys of the tinderUser object
console.log(Object.keys(tinderUser)); // Output: [ 'id', 'name', 'isLoggedIn' ]

// Logging the values of the tinderUser object
console.log(Object.values(tinderUser)); // Output: [ '21', 'Pallab', false ]

// Logging the entries of the tinderUser object (key-value pairs)
console.log(Object.entries(tinderUser)); // Output: [ [ 'id', '21' ], [ 'name', 'Pallab' ], [ 'isLoggedIn', false ] ]

// Checking if the tinderUser object has a specific property
console.log(tinderUser.hasOwnProperty('isLoggedIn')); // Output: true

// Little talk about object destructuring

const course = {
    coursename: "js in hindi",
    price: "999",
    courseInstructor: "pallab"
}

// course.courseInstructor

const {courseInstructor: instructor} = course

// console.log(courseInstructor);
console.log(instructor);

// {
//     "name": "pallab",
//     "coursename": "js in hindi",
//     "price": "free"
// }

[
    {},
    {},
    {}
]