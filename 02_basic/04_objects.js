// Singleton

const tinderUser = new Object()
// console.log(tinderUser). //empty hai 

tinderUser.id ="123abc"
tinderUser.name = "sam"
tinderUser.isLoggedIn = false


//objects ka v nesting kar sakte hoo
const regularUser = {
    email : "emailtrail@gmail.com",
    fullname : {
        userFullName:{
            firstname: "kamlesh",
            lastname : "kumar"
        }
    }
}
// console.log(regularUser.fullname.userFullName.firstname);

const obj1 = {1: "a", 2: "b"}
const obj2 = {
    3:"c",
    4:"d"
}

// const obj3 = { obj1 , obj2 } 
const obj3 = {...obj1, ...obj2} // spread feature

// console.log(obj3)

// console.log(tinderUser)
// console.log(Object.keys(tinderUser))
// console.log(Object.values(tinderUser))
// console.log(Object.entries(tinderUser))


const course = {
    coursename :"Js ke padhai",
    price : "999",
    courseInstructor : "hitesh"
}

const {courseInstructor: instructor} = course
// console.log(courseInstructor);
// console.log(instructor);