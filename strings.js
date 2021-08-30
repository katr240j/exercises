/* "use strict";

const longline = "A very, very , very, very ,very ,very, very,\
very, very ,very long LINE that goes acroos the edit"

 const name = "Peter";
 const drink = "Pepsi";

const text = `Hello ${name}, would you like a ${drink}?`;
 console.log(text);

const len = name.length;
console.log(`${name} is ${len} characters long`);
// and then [1] for next letter and so on...
const letter = name[0];
console.log(`The first letter of ${name} is ${letter}`);


 */


const name ="Albus Percival Wulfric Brian Dumbledore";
const total = name.length;
console.log(`Total number of characters is: ${total}`);

const letter = name[6];
console.log(`The second letter of ${name} is ${letter}`);

const str1 = "  There is  spacehere \n";
const str2 = str1.trim();
console.log(`_${str2}_`);

const fullName = "Peter Heronimous Lind";
const firstName =fullName.substring(0, 5);
const lastName = fullName.substring(17);

console.log(`firsname is: _${firstName}_`);
console.log(`lastname is: _${lastName}_`);

