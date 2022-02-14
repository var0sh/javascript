// for loop

// for(let i = 0; i < 10; i++){
//       if (i === 3) {
//             console.log(`Döngü ${i} de`);
//             continue;
//       }
//       if (i === 6) {
//             console.log(`en sevmediğim rakam ${i}`);
//             break;
//       }
//       console.log(i);
// }

// while loop

// let i;
// while (i < 10) {
//       console.log(i);
//       i++;
// }

// do-while loop

// let i = 0;
// do{
//       console.log(i);
//       i++;
// }while (i < 10);

let val = '\n';
for (let i = 0; i < 10; i++) {
      for (let j = 0; j < 10; j++) {
            val += '* ';            
      }
      val += '\n';
} 
console.log(val);