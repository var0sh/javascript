// Static Metotlar

// class PersonES6{
//     constructor(name, job, yearOfBirth){
//         this.name = name;
//         this.job = job;
//         this.yearOfBirth = yearOfBirth;
//     }
//     calculateAge(){
//         return 2021 - this.yearOfBirth;
//     }
//     // Static olarak oluşturulan metotlara instances'lar ulaşamaz;
//     static sayHi(){
//         console.log(`Hello there`);
//     }
// }

// let furkan = new PersonES6('Furkan', 'Student', 2011);

// console.log(furkan.calculateAge());
// console.log(furkan);
// PersonES6.sayHi();


class Point{
    constructor(x, y){
        this.x = x;
        this.y = y;
    }
    static distance(a, b){
        const dx = a.x -b.x;
        const dy = a.y - b.y;

        return Math.hypot(dx, dy); // hypot => hipotenüs hesaplar
    }
}

const d1 = new Point(10, 10);
const d2 = new Point(20, 20);

console.log(Point.distance(d1, d2));