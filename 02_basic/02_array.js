const marvel_heros = ["Thor", "Ironman", "Spiderman"]
const dc_heros = ["Superman","Flash", "Batman"]

// marvel_heros.push(dc_heros) // array ko data ke tara leee lega
// console.log(marvel_heros)


// const mergeHeros = marvel_heros.concat(dc_heros)
// console.log(mergeHeros)


const all_new_heors = [...marvel_heros, ...dc_heros]
console.log(all_new_heors)