const accoountId = 1233
let email = "kamlesh@gmail.com"
var accountPassword = "kafedfe"
accountCity = "Jaipur"
let accountState;

// accoountId = 2 //not allowed
email = "jfo@gmail.com"
accountPassword = "dhfif"
accountCity = "Banglore"
console.log(accoountId)

/*
prefer not to use var
because of issue in block scope and functional scope
*/
console.table([accoountId,email,accountPassword, accountCity, accountState])