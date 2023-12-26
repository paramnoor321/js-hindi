// array

const myArr = [1,2,3,4,5,6]
const myHeros = ["shaktiman", "naagraj"]


const myArr2 = new Array(1,2,3,4)
console.log(myArr[1]);

// Array methods
myArr.push(7)
console.log(myArr); // 7 is pushed in myArr
myArr.pop()
console.log(myArr); // last value is removed from array

console.log(myArr.includes(9)) // false, it checks if 9 is in myArr

const newArr = myArr.join() // It binds and convert array to string

// slice, splice

console.log("A ", myArr);

const myn1 = myArr.slice(1, 3)

console.log(myn1);
console.log("B ", myArr);


const myn2 = myArr.splice(1, 3)
console.log("C ", myArr);
console.log(myn2);


