"use strict";


// slide 1-9
/* let person1 = { 

    firstName : "Peter", 
    
    age : 29, 
    
    student: false 
    
    }; 
    
    console.log( person1.lastName ); 
    person1.lastName = "Lind"; 
    person1.lastName = undefined;
    console.log(person1);
    console.log( person1.lastName ); 
    console.log( person1.middleName ); 
    delete person1.lastName;
    console.log( person1.lastName ); 

 */

    //slide 9 - 10

    const person1 = { 
        firstName : "Peter", 
        age : 29, 
        student: false 
        }; 

        person1.age++;
        console.log(person1);

        const person2 = {
            firstName: "katrín María",
            age: 21,
            student:true
        };

        person1 = person2;