let person = function(name, job, yearOfBirth){
    this.name = name;
    this.job = job;
    this.yearOfBirth = yearOfBirth;
    // this.calculateAge = function(){ 
    //     return 2021 - this.yearOfBirth;
    // }
    this.getName = function(){
        return this.name;
    }
};

person.prototype.calculateAge = function(){
    return 2021 - this.yearOfBirth;
};
person.prototype.lastName = 'akçatepe';

let taha = new person('taha', 'student', 2011);
let furkan = new person('furkan', 'student', 2003);

console.log(furkan);
console.log(furkan.calculateAge()); 
console.log(furkan.getName());
console.log(furkan.hasOwnProperty('lastName'));
console.log(furkan.lastName);
console.log(taha.lastName);

/*
    Bir yapıcı fonksiyona(constructor) yeni bir özellik eklemek için:
        yapiciFonksiyonAdi.prototype.propertyName = 'value';

    Bir yapıcı fonksiyonumuza(contructor) yeni bir metot eklemek için:
        yapiciFonksiyonAdi.prototype.functionName = function(){
            
        };
*/