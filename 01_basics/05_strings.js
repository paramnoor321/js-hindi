const name = "hitesh"
const repoCount = 50

//console.log(name + repoCount + " value")

console.log(`Hello my name is ${name} and my repo count is ${repoCount}`);
const gameName = new String("Valorant")
console.log(gameName[0])
console.log(gameName.__proto__);

console.log(gameName.length);
console.log(gameName.toUpperCase());
console.log(gameName.charAt(2));
console.log(gameName.indexOf('t'));

console.log(gameName.slice(-8,4));
const newstring = new String("     ekas      ")
console.log(newstring.trim());

const url = "https://ekas.com/ekas%20singh"
console.log(url.replace("%20","-"));
console.log(gameName.split("&"));