// ***Prototip Kalıtım - Prototypal Inheritance
 
let Person = function(name, yearOfBirth, job){
    this.name = name;
    this.yearOfBirth = yearOfBirth;
    this.job = job;
}

Person.prototype.calculateAge = function(){
    return 2021 - this.yearOfBirth;
};

let teacher = function(name, yearOfBirth, job, subject){
    Person.call(this, name, yearOfBirth, job);
    this.subject = subject;
};

// person'ın prototype'ını teacher'ın prototype'ına inherit ettik
teacher.prototype = Object.create(Person.prototype);

// set teacher constructor
teacher.prototype.constructor = teacher;

teacher.prototype.greeting = function(){
    return 'hello my name is ' + this.name;
}

let furkan = new teacher('furkan', 2003, 'teacher', 'mat');

console.log(furkan);
console.log(furkan.calculateAge());

// nesneler arasında kalıtım prototype sayesinde olr