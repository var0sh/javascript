let val;

let person = {
      firstName: 'furkan',
      lastName: 'akçatepe',
      age: 18,
      hobbies: ['spor', 'müzik', 'yazılım'],
      adres: {
            city: 'Eskişehir',
            country: 'Türkiye',
      },
      getBirthYear: function () {
            return 2021 - this.age;
      }
};

val = person.lastName;
val = person.age;
val = person['firstName'];
val = person.hobbies;
val = person.hobbies[1];
val = person.hobbies.length;
val = person.adres;
val = person.adres.city;
val = person.adres['city'];
val = person.getBirthYear();

let people = [
      {firstName: 'furkan', 
      lastName: 'akçatepe', 
      age: 18},
      {firstName: 'taha', lastName: 'akçatepe', age: 10},
      {firstName: 'ayşe', lastName: 'akçatepe', age: 40},
      {firstName: 'halil', lastName: 'akçatepe', age: 42},
];

val = people[1];
val = people[1].age;

for (let i = 0; i < people.length; i++) {
      console.log(people[i].firstName);
}

console.log(val);
console.log(typeof val);