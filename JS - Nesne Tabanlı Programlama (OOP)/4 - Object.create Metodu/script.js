// ***obeject.create()

let personProto = {
    calculateAge : function(){
        return 2021 - this.yearOfBirth;
    }
}

let furkan = Object.create(personProto); // bu şekilde furkan isminde yeni bi obje oluşturuyoruz. ve property'lerini oluşturduğumuz prototype'dan alıyor yani personProto'dan.

furkan.name = 'furkan';
furkan.yearOfBirth = 2003;
furkan.job = 'student';
// yada
let taha = Object.create(personProto, {
    name : {value : 'taha'},
    yearOfBirth : {value : 2011},
    job : {value : 'student'}
})
let ayse = Object.create(personProto, {
    name: {value: 'ayşe'}
})
console.log(ayse);

console.log(furkan.calculateAge());
console.log(furkan);
console.log(taha);

/*

    Bir constructor'dan object oluşturulursa, oluşturulan object'in üzerinden constructor'ının prototype'ına (varsayılan bir şey olarak) ulaşabiliriz. 

*/