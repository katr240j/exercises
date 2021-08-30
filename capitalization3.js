"use strict";

let navn = "peteration"; 

 // með því að setja (3) en ekki (3,5) þá getur nafnið alltaf verið lengra og þarf þvi ekki að stoppa á 5 bókstaf
 

let nyNavn = navn.substring(0,2) + navn[2].toUpperCase() + navn.substring(3); 

console.log(nyNavn); 