const coding = ['JavaScript', 'Python', 'Ruby', 'Java']
const values = coding.forEach((language) => {
    // console.log(language);
    return language;
})

// console.log(values); // undefined 
// for each kabhi v koi value return nahi karta hai.




// **************** Filter Operationi  ****************
const myNums = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const newNums = myNums.filter((nums) => nums>3)
// console.log(newNums); // [ 4, 5, 6, 7, 8, 9, 10 ]



// thoda bada data me kaam karte hai jaisa database se aata hai

const books =[
    { title: 'book one', genre: 'fiction', publish:1981,edition: 2004,rating: 4.5 },
    { title: 'book two', genre: 'non-fiction', publish:1990,edition: 2006,rating: 4.2 },
    { title: 'book three', genre: 'mystery', publish:2005,edition: 2012,rating: 4.7 },
    { title: 'book four', genre: 'fantasy', publish:2012,edition: 2018,rating: 4.9 }
]

const newBooks = books.filter((book) => book.rating > 4.5)
const newBooks1 = books.filter((book) => book.publish > 2000 && book.edition > 2010)
// console.log(newBooks1); // [ { title: 'book three', genre: 'mystery', publish: 2005, edition: 2012, rating: 4.7 }, { title: 'book four', genre: 'fantasy', publish: 2012, edition: 2018, rating: 4.9 } ]
