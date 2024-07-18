// singleton

// object 

const mySyn = Symbol("key1")
const JsUser = {
    name: "hitesh",
    "full name" : "hitesh kumar",
    [mySyn] : "key1e3",
    age : 10,
    email: "hitesh@googel.com",
    isLoggedIn: false,
    lastLogedInDays: ["Monday", "Tuesday"]
}


// console.log(JsUser.email)
// console.log(JsUser["email"]);
// console.log(JsUser["full name"])
// console.log(JsUser[mySyn]);


JsUser.email = "changedemail@gmail.com"
// console.log(JsUser["email"])
Object.freeze(JsUser) // abb Jsuser change nahi kiya jaa sakta

JsUser.email = "changil@gmail.com" // abb change nahi hoga 
// console.log(JsUser["email"])  // pahle joo tha wahi deekhayega

// console.log(JsUser);


JsUser.greeting = function(){
    console.log("helllo");
}
console.log(JsUser.greeting);


