const accountId = 13423
let accountEmail = "pallab@gmail.com"
var accountPassword = "1234"
accountCity = "Basirhat"  // Do not Use this
let accountState;

// accountId = 23  // No allowed, const variable can't be chenge
accountEmail = "piya@gmail.com"
accountPassword = "46456"
accountCity = "bhabla"

console.log(accountId);

/*
Prefer not to use var
Because of issue in block scope and function scope
*/

console.table([accountId, accountEmail, accountPassword, accountCity, accountState])