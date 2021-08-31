"use strict";

window.addEventListener("DOMContentLoaded", arrayCounter);
// made an empty array
const arr = [];
//counts from 0
let counter = 0;

function arrayCounter() {
// .unshift method adds one or more elements to the beginning of an array and returns 
//the new length of the array. 
  arr.unshift(counter);
//counts up 
  counter++;
// if the counter is less than 9 the array 
//removes the last element from an array and returns that element. 
//This method changes the length of the array. 
  if (counter > 9) {
    arr.pop(arr);
  }

  setTimeout(arrayCounter, 1000);
//show the array in the console
  console.log(arr);
}