const myArr = [0,1,2,3,4,5]
const myHeros = ["shaktiman", "naagraj"]

const myArr2 = new Array(1,2,3,4)
// console.log(myArr[2]);


//Array methods

myArr.push(6)
// console.log(myArr)
myArr.pop()


myArr.unshift(90) // array ke start me
myArr.shift()
// myArr.shift()


// console.log(myArr.includes(9)); //false
// console.log(myArr.indexOf(10)) //-1
// console.log(myArr.indexOf(3)) //3


const newArr = myArr.join();

// console.log(myArr)
// console.log(newArr)  // ye string type hai 



//slice and splice

console.log("A",myArr)
const myn1 = myArr.slice(1,3)
console.log(myn1)
console.log("B", myArr)


const myn2 = myArr.splice(1,3)
console.log("C", myArr) // original array v change hoo jata hai elements dlt hoo jate hai 
console.log(myn2);

