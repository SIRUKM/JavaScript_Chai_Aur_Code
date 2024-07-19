// for of looop

const arr = [1, 2, 3, 4, 5];
for (const num of arr) {
  // console.log(num);
}

const greeting = "hello btc";
for (const char of greeting) {
  if (char === " ") {
    // console.log("space found");
    continue;
  }
  // console.log(`each char of greeting is ${char}`);
}

// ************ maps ************

const map = new Map();
map.set("IN", "India");
map.set("US", "United States");
map.set("UK", "United Kingdom");
map.set("IN", "India"); // duplicate key will be overwritten print 1 baar he hoga india

// console.log(map);
// console.log(map.get("IN"));

for (const [key, value] of map) {
  // console.log(key, ":", value);
}

const myObj = {
  name: "kamlesh",
  age: 25,
  country: "India",
};

for (const [key, value] of Object.entries(myObj)) {
  // console.log(key, ":", value);
}

const programming = ["java", "python", "javascript", "c++", "c#"];
for (const pro in programming) {
  // console.log(programming[pro]);
}

// ****************** for each loop ******************

const arr1 = [1, 2, 3, 4, 5];

arr1.forEach(function (num) {
  // console.log(num);
});

// using arrow function
arr1.forEach((num) => {
  // console.log(num);
});

// functions ke saath

function print(num) {
  // console.log(num);
}
arr1.forEach(print);

arr1.forEach((index, num, arr1) => {
  //   console.log(index, num, arr1);
});

// ************** array ke andar object ****************
const arr2 = [
    { language: "java", 
        file: "js" 
    },
    { language: "python", 
        file: "py" 
    },
    { language: "c++", 
        file: "cpp" 
    },
    { language: "c", 
        file: "c"
    }
];

arr2.forEach((obj) => {
    console.log(`here the language is: ${obj.language} and file is: ${obj.file}`);
})