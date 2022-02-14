// let category = 'beyaz eşya';

// switch (category) {
//       case 'telefon':
//             console.log(`telefon kategorisi`);
//             break;
//       case 'bilgisayar':
//             console.log(`bilgisayar kategorisi`);
//       default:
//             console.log(`yanlış kategori`);
//             break;
// }
// let day;

// switch (new Date().getDay()+ 5) {
//       case 0:
//       case 6:
//             day = 'hafta sonu';
//             break;

//       case 1:
//       case 2:
//       case 3:
//       case 4:
//       case 5:
//             day = 'hafta içi';
//             break;


//       default:
//             break;      
// }
// if (day === 'hafta sonu') {
//       console.log(`Bugün ${day}.`);
// }else{
//       console.log(`Bugün ${day}.`);
// }

const age = 18;
const firstName = 'Furkan';

switch (true) {
      case age > 0 && age < 12:
            console.log(`${firstName} bir çocuk.`);
            break;
      case age >= 13 && age <= 18:
            console.log(`${firstName} bir ergen.`);
            break;
      case age >= 19:
            console.log(`${firstName} bir yetişkin.`);
            break;
      default:
            console.log(`undifenid`);
            break;
}