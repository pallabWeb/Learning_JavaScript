// Singleton
// Object.create



// Object literals

const mySym = Symbol("key")

const JsUser = {
    name: "Pallab",
    age: 18,
    [mySym]: "pallab is a good boy",
    location: "Basirhat",
    email: "pallab@gmail.com",
    isLoggedIn: false,
    lastLoggedIn: ["2022-01-01", "2022-01-02"]
} // object


// console.log(JsUser.email);
// console.log(JsUser["email"]);
// console.log(JsUser[mySym]);

JsUser.email = "piya@gmail.com" // change the value
Object.freeze(JsUser); // freeze the object
JsUser.email = "piya@google.com"  // after freeze no change
// console.log(JsUser);

JsUser.greeting = function () {
    console.log("Hello JsUser");
}

JsUser.greetingTwo = function () {
    console.log(`Hello JsUser, your email is ${this.email}`);
}

// console.log(JsUser.greeting);
console.log(JsUser.greeting());
console.log(JsUser.greetingTwo());