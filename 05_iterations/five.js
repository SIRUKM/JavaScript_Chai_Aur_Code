const nums = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]


const newNums = nums.map((num) => num * 2)
// console.log(newNums); // [ 2, 4, 6, 8, 10, 12, 14, 16, 18, 20 ]

const newNums1 = nums
                 .map((num) => num * 2)
                 .map((num) => num + 1)
                 .filter((num) => num > 10);


// console.log(newNums1); // [ 11, 12, 13, 14, 15, 16, 17, 18, 19, 20 ]



// ******************** map vs filter ***********************
// map -> ek array ko dusre array me convert karta hai
// filter -> ek array se kuch elements ko filter karke dusre array me convert karta hai


// *****************reduce method in javascript***********************

// reduce -> ek array ko ek hi value me convert karta hai
// exmaple:
const nums1 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
const sum = nums1.reduce((acc, num) => {
    return acc + num;
}, 0)

const sum1 = nums1.reduce((acc, num) => acc + num, 0)
console.log(sum); // 55
// 0 + 1 = 1
// 1 + 2 = 3
// 3 + 3 = 6