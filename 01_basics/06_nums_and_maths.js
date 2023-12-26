const score = 400
const balance = new Number(80)
console.log(score);
console.log(balance);

console.log(balance.toString().length);
console.log(balance.toFixed(2)); // 80.00

const otherNumber = 23.8966
console.log(otherNumber.toPrecision(4)); // 23.90

const hundreds = 10000000
console.log(hundreds.toLocaleString('en-IN')) // 10,00,000

//**************************** Maths **************************

// console.log(Math);
// console.log(Math.abs(-4));
// console.log(Math.round(4.63));
// console.log(Math.ceil(4.63)); // 5
// console.log(Math.floor(4.63)); // 4
// console.log(Math.min(4,3,6,8)); // 8

console.log(Math.floor(Math.random()*10) + 1)

const min = 10
const max = 20

// important formula (Math.random() * (max - min + 1) + min)

console.log(Math.floor((Math.random() * (max - min + 1) + min)));