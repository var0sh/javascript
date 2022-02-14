const person = {
    firstName: 'Furkan',
    lastName: 'Akçatepe',
}

Object.defineProperty(person, 'fullName', {
    get(){
        return `${this.firstName} ${this.lastName}`
    },
    set(value){
        const parts = value.split(' ');
        this.firstName = parts[0];
        this.lastName = parts[1];
    } 
})

Object.defineProperty(person, 'age', {
    value : 50,
    writable : true
})

person.age = 55;

// person.firstName = 'Taha';

person.fullName = 'Taha Akçatepe';
console.log(person.fullName);
console.log(person);