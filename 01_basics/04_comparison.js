"use strict";
// console.log(2 > 1);
// console.log(2 >= 1);
// console.log(2 < 1);
// console.log(2 == 1);
// console.log(2 != 1);


// console.log("2" > 1);
// console.log("02" > 1);

console.log(null > 0);//false
console.log(null == 0);//false
console.log(null >= 0);// true

// the reason is that an equality check == and comparison
// > < >= <= work differently
// comparison converts null to number ,treating it as 0
// thats why (3) null >= 0 is true

console.log(undefined == 0); // false
console.log(undefined > 0); // false
console.log(undefined < 0); // false

// === 
// it checks values and data types also if both are true the it returns true else false

console.log("2" === 2);