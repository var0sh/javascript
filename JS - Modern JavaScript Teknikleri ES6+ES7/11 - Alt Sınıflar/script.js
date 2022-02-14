// Sub Classes => Bir sınıf için oluşturulan özelliklerin başka bir sınıfa aktarılması;

// ES5

function PersonES5(firstName, lastName){
    this.firstName = firstName;
    this.lastName = lastName;
}

PersonES5.prototype.sayHi = function(){
    return `Hello I'm ${this.firstName} ${this.lastName}`
}

function CustomerES5(firstName, lastName, phone, userName){
    PersonES5.call(this, firstName, lastName);
    this.phone = phone;
    this.userName = userName;
}

CustomerES5.prototype = Object.create(PersonES5.prototype);

var customer = new CustomerES5('Furkan', 'Akçatepe', '5437368680', 'varosh');

console.log(customer.sayHi());
console.log(customer);

// ES6

class PersonES6{
    constructor(firstName, lastName){
        this.firstName = firstName;
        this.lastName = lastName;
    }
    sayHi(){
        return `Hello I'm ${this.firstName} ${this.lastName}`;
    }
}

class CustomerES6 extends PersonES6{
    constructor(firstName, lastName, phone, userName){
        super(firstName, lastName) // ES6'da .call metodu yerine .super() metodunu kullanıyoruz.
        this.phone = phone;
        this.userName = userName;
    }
    static getTotal(){
        return 1000;
    }
}

let customer1 = new CustomerES6('Furkan', 'Akçatepe', '234325345', 'var0sh');

console.log(customer1.sayHi());
console.log(customer1);
console.log(CustomerES6.getTotal());