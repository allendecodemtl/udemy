// // Lecture Objects
// var john = {
//     name: 'John',
//     lastName: 'Smith',
//     yearOfBirth: 1990,
//     job: 'teacher',
//     isMarried: false
// }

// console.log(john.lastName);
// console.log(john['lastName']);

// var xyz = 'job';
// console.log(john[xyz]);


// john.lastName = 'Miller';
// john.job = 'programmer';
// console.log(john);

// var jane = new Object();
// jane.name = 'Jane';
// jane.lastName = 'Smith';
// jane.yearOfBirth = 1969;
// jane.job = 'retired';
// jane.isMarried = true;

// console.log(jane);


// var john = {
//     name: 'John',
//     lastName: 'Smith',
//     yearOfBirth: 1990,
//     job: 'teacher',
//     isMarried: false,
//     family: ['Jane', 'Mark', 'Bob'],
//     calculateAge: function(){
//         return 2016 - this.yearOfBirth;
//     }
// }

// var age = john.calculateAge();
// john.age = age;

// console.log(john);



// var john = {
//     name: 'John',
//     lastName: 'Smith',
//     yearOfBirth: 1990,
//     job: 'teacher',
//     isMarried: false,
//     family: ['Jane', 'Mark', 'Bob'],
//     calculateAge: function(){
//         this.age = 2016 - this.yearOfBirth;
//     },
    
// }

// john.calculateAge();
// console.log(john);


