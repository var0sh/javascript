let Employee = function(name, salary){
    if(!(this instanceof Employee)){ //bu if'i kullanırsak eğer Employee prototype'ından bir object türetirken new anahtar kelimesini kullanmamıza gerek kalmaz
        return new Employee(name, salary);
    }
    this.name = name;
    this.salary = salary;
};

Employee.prototype.canculateTax = function(){

    let month = new Date().getMonth() + 1;
    let tax;
    let paid;
    let total = month * this.salary;
    
    if(total < 20000){
        tax = total * 0.2;
        paid = total - tax;
    }else if(total >= 20000 && total < 3000){
        tax = total * 0.2;
        paid = total - tax;
    }else{
        tax = total * 0.2;
        paid = total - tax;
    }

    return {tax, paid}
}

let emp1 = Employee('furkan', 2000);
let emp1Salary = emp1.canculateTax();

console.log(`${emp1.name} isimli personelin kesilen toplam vergi miktarı ${emp1Salary.tax} TL. Ödenen miktar ${emp1Salary.paid} TL.`);