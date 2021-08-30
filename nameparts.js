"use strict";

const fullName = "Peter Heronimous Lind";


//med magic nummers
/* const firtsName = fullName.substring(0,5);
const middleName = fullName.substring(6,16);
const lastName = fullName.substring(17,21);

console.log(firtsName);
console.log(middleName);
console.log(lastName); */



const firstName = fullName.substring(0, fullName.indexOf(' '));
console.log(`the first name of ${fullName} is _${firstName}_`);

const middleName = fullName.substring(fullName.indexOf(' ')+1,fullName.lastIndexOf(' '));
console.log(`the second name of ${fullName} is _${middleName}_`);

const lastName = fullName.substring(fullName.lastIndexOf(' '));
console.log(`the second name of ${fullName} is _${lastName}_`);

