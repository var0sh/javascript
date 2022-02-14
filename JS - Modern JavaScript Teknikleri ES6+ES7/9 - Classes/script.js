// Classes

// ES5

var PersonES5 = function(name, job, yearOfBirth){
    this.name = name;
    this.job = job;
    this.yearOfBirth = yearOfBirth;
}

PersonES5.prototype.calculateAge = function(){
    return 2021 - this.yearOfBirth;
}

var furkan = new PersonES5('Furkan', 'Student', 2003);
console.log(furkan.calculateAge());

// ES6

class PersonES6{
    constructor(name, job, yearOfBirth){
        this.name = name;
        this.job = job;
        this.yearOfBirth = yearOfBirth;
    }
    calculateAge(){
        return 2021 - this.yearOfBirth;
    }
    fullName(){
        return this.name + 'Akçatepe';
    }
}

let taha = new PersonES6('Taha', 'Student', 2011);

console.log(taha.calculateAge());
console.log(furkan);
console.log(taha);