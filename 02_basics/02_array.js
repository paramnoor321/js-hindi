const marvelHeroes = ["thor", "ironman", "spiderman"]
const dcHeroes = ["superman", "flash", "batman"]

// marvelHeroes.push(dcHeroes)

// console.log(marvelHeroes);
// const allHeroes = marvelHeroes.concat(dcHeroes)
// console.log(allHeroes)

const allNewHeroes = [...marvelHeroes, ...dcHeroes]
console.log(allNewHeroes);

const anotherArray = [1,2,3, [4,5,6], 7 ,[6,7, [4, 5]]]
const realAnotherArray = anotherArray.flat(Infinity) // it removes nested and stores individual values
console.log(realAnotherArray);

console.log(Array.isArray("Hitesh"))
console.log(Array.from("Hitesh"))
console.log(Array.from({name: "hitesh"})) // interesting

let score1 = 100
let score2 = 200
let score3 = 300

console.log(Array.of(score1,score2,score3));