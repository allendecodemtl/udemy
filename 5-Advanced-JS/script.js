// var Person = function(name, yearOfBirth, job){
//     this.name = name,
//     this.yearOfBirth = yearOfBirth,
//     this.job = job
// }


// Person.prototype.calculateAge = function(){
//     console.log(2016 - this.yearOfBirth);
// }

// var john = new Person('John', 1990, 'Teacher');
// john.calculateAge();

// console.log(john);

// var jane = new Person('Jane',1969,'Designer');
// jane.calculateAge();


// Object.create
// var personProto = {
//     calculateAge: function(){
//         console.log(2016 - this.yearOfBirth);
//     }
// }

// var john = Object.create(personProto);
// john.name = 'John';
// john.yearOfBirth = 1990;
// john.job = 'teacher';


// Lecture : Passing function as arguments


// var years = [1990, 1965, 1937, 2005, 1998];

// function arrayCalc(arr, fn){
//     var arrRes = [];

//     arr.forEach(element => {
//         arrRes.push(fn(element));
//     });

//     return arrRes;
// }

// function calculateAge(el){
//     return (2016 - el);
// }

// function isFullAge(el){
//     return el >= 18;
// }

// function mxHeartRate(el){
//     if (el >= 18 && el <= 81){
//         return Math.round(206.9 - (0.67 * el));
//     } else {
//         return -1;
//     }
// }

// var ages = arrayCalc(years, calculateAge);
// console.log(ages);

// var fullAges = arrayCalc(ages, isFullAge);
// console.log(fullAges);


// var rates = arrayCalc(ages, mxHeartRate);
// console.log(rates);



// function interviewQuestion(job){
//     if(job === 'designer'){
//         return function(name){
//             console.log(name + 'UX designer');
//         }
//     }else if (job === 'teacher'){
//         return function(name){
//             console.log('What subject do you teach '+ name);
//         }
//     } else {
//         return function(name){
//             console.log('Hello '+ name);
//         }
//     }
// }

// var teacherQuestion = interviewQuestion('teacher');
// teacherQuestion('John');

// var designerQuestion = interviewQuestion('designer');
// designerQuestion('John');

//=================================
// Lecture: IIFE

// function game(){
//     var score = Math.random() * 10;
//     console.log(score >= 5);
// }
// game();

// (
//     function(test){
//         var score = Math.random() * 10;
//         console.log(score >= 5- 5);
//     }
// )(5);

//=================================
// Lecture: Closures

// function retirement(retirementAge){
    
//     var a = ' years left until retirement';
    
//     return function(yearOfBirth){
//         var age = 2016 - yearOfBirth;
//         console.log((retirementAge - age) + a);
//     }
// }

// var retirementUS = retirement(66);
// retirementUS(1990);

// var retirementGermany = retirement(65);
// var retirementIceland = retirement(67);

// retirementGermany(1990);
// retirementIceland(1990);


// function interviewQuestion(job){
//     return function(name) {
//         if(job === 'designer'){
//             console.log(name + ' designer');
//         } else if(job === 'teacher'){
//             console.log(name + ' teacher');
//         } else {
//             console.log(name + ' what do you do?');
//         }
//     }
// }

// interviewQuestion('designer')('John');

//=================================
// Lecture: Bind, call and apply

// var john = {
//     name: 'John',
//     age: 26,
//     job: 'teacher',
//     presentation: function(style, timeOfDay){
//         if (style === 'formal'){
//             console.log('Good ' + timeOfDay 
//                          + ', ' + this.name
//                          + ', ' + this.age
//                          + ', ' + this.job
//                         );
//         } else if (style === 'friendly'){
//             console.log('Hiya ' + timeOfDay 
//                          + ', ' + this.name
//                          + ', ' + this.age
//                          + ', ' + this.job
//                         );
//         } 
//     }
// };

// var emily = {
//     name: 'Emily',
//     age: 35,
//     job: 'designer'
// }

// john.presentation('formal', 'morning');
// john.presentation.call(emily, 'friendly', 'afternoon');

// var johnFiendly = john.presentation.bind(john, 'friendly');
// johnFiendly('morning');
// johnFiendly('night');

// john.presentation.apply(emily,['friendly', 'afternoon']);



var years = [1990, 1965, 1937, 2005, 1998];

function arrayCalc(arr, fn){
    var arrRes = [];

    arr.forEach(element => {
        arrRes.push(fn(element));
    });

    return arrRes;
}

function calculateAge(el){
    return (2016 - el);
}

function isFullAge(limit, el){
    return el >= limit;
}

var ages = arrayCalc(years, calculateAge);

var fullJapan = arrayCalc(ages, isFullAge.bind(this, 20));
console.log(ages);
console.log(fullJapan);