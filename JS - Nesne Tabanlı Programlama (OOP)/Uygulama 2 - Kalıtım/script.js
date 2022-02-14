let Person = function(name){
    this.name = name;
};
Person.prototype.introduce = function(){
    return 'Merhaba ismim ' + this.name + ', tanıştığıma memnun oldum.'
}
var per1 = new Person('per1')


// Teacher Constructor
let Teacher = function(name, branch){
    Person.call(this, name);
    this.branch = branch;
}
Teacher.prototype = Object.create(Person.prototype);
Teacher.prototype.constructor = Teacher;

Teacher.prototype.teach = function(){
    return 'Ben ' + this.branch + ' öğretmeniyim.'
}


// Student Constructor
let Student = function(name, number){
    Person.call(this, name);
    this.number = number;
}

Student.prototype = Object.create(Person.prototype);
Student.prototype.constructor = Student;

Student.prototype.study = function(){
    return '' + this.number + ' numaralı öğrenci. Ders çalışmalısın.'
};
 

// Headmaster Constructor
let Headmaster = function(name, branch){
    Teacher.call(this, name);
    this.branch = branch;
}

Headmaster.prototype = Object.create(Teacher.prototype);
Headmaster.prototype.constructor = Headmaster;

var hm1 = new Headmaster('müdür', 'math');
console.log(hm1.teach());
console.log(hm1);
