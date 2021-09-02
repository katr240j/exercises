"use strict";


/* console.log(arr);
arr[1] = "wolf";
console.log(arr); */

/* let string = "This is my string";
let array = string.split("");
console.log(string);

console.log(string.split(""));
console.log(array.join("")); */


const arr = ["zebra", "lion", "dog", "opssum"];
let newArr = arr;
newArr[3] = "elephant";
console.log(arr);

const animals = ["zebra", "lion", "dog", "opssum"];

console.log(animals.slice(1, 2));

//removes the first and the last 2 

console.log(animals.slice(2, 2));
//removes everything

console.log(animals.splice(1, 1));
// lion, breytir öllu innihaldinunu með því að taka það í burtur eða setja 
//nytt sem er nu þegar til staðar af hlutunum og setja á sama stað 


for ( let counter=0; counter < 10; counter++ ) { 

    console.log(counter); 
    
    } 

    console.log(`after the loop, counter is ${counter}`); 