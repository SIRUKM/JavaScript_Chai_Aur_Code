const user = {
    username: "hitesh",
    price: 999,
    welcomeMessage : function(){
        console.log(`${this.username} , welcome to website`)
        console.log(this)
    }
}
// user.welcomeMessage()
// user.username = "sam"
// user.welcomeMessage()

// console.log(this)

// function chai(){
//     console.log(this);
// }

// // chai()

// const chai =function(){
//     let username = "hitesh"
//     console.log(this.username);
// }

// chai()// iska answer aayega undefined..


// const chai = () =>{
//     let username = "hitesh"
//     console.log(this.username);
// }
// chai() // yaha v undefined hai 

// arrow funtion () => {}
    const addTwo = (num1 , num2) => {
        return num1 + num2
    }

    console.log(addTwo(4,5))