//**object literals
// let furkan = {
//     name: 'furkan',
//     yearOfBirth: 2003,
//     job: 'student'
// }
// let taha = {
//     name: 'taha',
//     yearOfBirth: 2011,
//     job: 'student'
// }
// let ayse = {
//     name: 'ayşe',
//     yearOfBirth: 1981,
//     job: 'cleaner'
// }
// let halil = {
//     name: 'halil',
//     yearOfBirth: 1979,
//     job: 'installation'
// }

// function person(name, yearOfBirth, job){
//     this.name = name;
//     this.yearOfBirth = yearOfBirth;
//     this.job = job;
//     this.calculateAge = function(){  
//         return 2021 - this.yearOfBirth;
//     }
//     // console.log(this);
// };

// yada bu şekil de de tanımlayabiliriz

let person = function(name, yearOfBirth, job){
    this.name = name;
    this.yearOfBirth = yearOfBirth;
    this.job = job;
    this.calculateAge = function(){  
        return 2021 - this.yearOfBirth;
    }
    // console.log(this);
}

let furkan = new person('furkan', 2003, 'student');

console.log(furkan.job);
console.log(furkan.name);
console.log(furkan.yearOfBirth);
console.log(furkan.calculateAge());