const accountId = 144553
let accountEmail = "paramnoor12@gmail.com"
var accountPassword = "12345"
accountCity = "Jammu"

// accountId = 2 // not allowed

accountEmail = "hchc@gmail.com"
accountPassword= "212121212"
accountCity = "Rajasthan"
let accountState;

/* 
    Prefer not to use var
    because of issue in block scope and functional scope
*/

console.table([accountId,accountEmail,accountPassword,accountCity,accountState])
