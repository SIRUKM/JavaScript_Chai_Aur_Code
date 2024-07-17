// primitive data Types
//7 types : String, Number, Boolean, NULL, undefined, Symbol, bigint

const score = 100
const scoreValue = 100.3

const isLoggedIn = false
const outsideTemp = null
let userEmail;

const id = Symbol('123')
const anotherId = Symbol('123')

// console.log(id === anotherId)

const bigNumber = 308308403088348745n


// Refernce Type(non - premitive)
//3 types : Array, objects, Functions

const heros = ['kamlesh', 'suresh', 'pankaj']
let obj = {
    name: 'kamlesh',
    age: 22
}

const myfunction  = function(){
    console.log('i am a function')
}




// **************Stack and Heap *****************
// Stack (Primitive). Heap(Non Primitive)

let myYoutubeName = "hiteshChoudhrydotcom"
let anotherName = myYoutubeName
anotherName = "cahiaurcode"
// console.log(myYoutubeName);
// console.log(anotherName);


let userOne = {
    email : "user@googel.com",
    upi : "user@ybl"
}

let userTwo = userOne

userTwo.email = "kamlesh@gmail.com"

console.log(userOne.email);
console.log(userTwo.email);