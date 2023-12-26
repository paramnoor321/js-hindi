let score = "33abc"

console.log(typeof score)
let valueInNumber = Number(score)
console.log(typeof valueInNumber)
console.log(valueInNumber)

// "33" => 33
// "33abc" => NaN (not a number)
// true => 1; flase => 0

let isLoggedIn = "ekas"
let booleanIsLoggedIn = Boolean(isLoggedIn)
console.log(booleanIsLoggedIn)

// 1 => true; 0 => false
// "" => false
// "ekas" => true

let someNumber = 33
let stringNumber = String(someNumber)
console.log(stringNumber)
console.log(typeof stringNumber)

//****************************** Operations***********************

let value = 3
let negValue = -value
console.log(negValue)

let str1 = "hello"
let str2 = " Ekas"
console.log(str1+str2)
console.log("1" + 2);//12
console.log(1 + "2");//12
console.log("1" + 2 + 2);//122
console.log(1 + 2 + "2");//32

console.log(true) //true
console.log(+true); //1

let num1,num2,num3
num1 = num2 = num3 = 2 + 2
let gameCounter = 100
gameCounter++;
console.log(gameCounter)