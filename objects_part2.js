"use strict";

let person1 = { 
    firstName : "Peter", 
    age : 29, 
    student: false 
    }; 

    let person2 = {
        firstName: "other Peter",
        age:29,
        student:false
    };
    let person3 = person1;

    person3.firstName ="changed";

    person3 = person2;

    person2.firstName ="Also changed";

    person1 =person3;