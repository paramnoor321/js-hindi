"use strict";
// how data is stored in memory and it gets accessed , on the basis of that there is primitive and non primitive data type

// Primitive
// They are call by value
// 7 types : String, Number, Boolean, null, undefined, Symbol, BigInt

const score = 100 // Number
const scoreValue = 100.3 // Number
const isLoggedIn = false // Boolean
const outsideTemp = null // Null
let userEmail; // Undefined

const id = Symbol('123')
const anotherId = Symbol('123')
console.log(id===anotherId);

const bigNumber = 32443423432424324233242n

// Referencetype (Non primitive)

// Arrays, Objects, Functions

const heros = ["shaktiman","naagraj","doga"]

let myObj = {
    name: "Paramnoor",
    age: 22,
}

const myFunction = function(){
    console.log("Hello World");
}
 
console.log(typeof bigNumber);

//********************************************************** 

// Stack (Primitive)(Pass by value), Heap (Non-Primitive)(Pass by reference)

let myYoutubeName = "C0ld"
let anotherName = myYoutubeName

anotherName = "chaiaurcode"

console.log(anotherName);
console.log(myYoutubeName)

let obj = {
    email: "user@mail.com",
    upi: "user@ybl"
}

let obj2 = obj
obj2.email = "ekas@gmail.com"

console.log(obj.email);
console.log(obj2.email);