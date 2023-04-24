// let  data = "yomgir";
// switch (data) {
//     case 1:    // qatiy tenglikda ishledi switch keys 
//     console.log("teng");
//     case "yomgir":
//         console.log("bugun yomgir");
//         break;
//     case "qor":
//         console.log("bugun qor");
//         break;
//     default:
//         console.log("no data");
// }



 //if   -> <,><=, >=, ==, === qabul qiladi 
 //switch esa faqat === qabul qiladi if dan asosiy farqi shuu bulin qiymat qaytarmedi anniq  buyruq asosida ishledi










// =========================
// For loop

//  for (let i = 1; i <= 10; i= i+2) {
//     console.log(i,"salom"); 
//  } 
// for (let i = 10; i >= 1; i= i -2) {
//     console.log(i, "vau");
    
// }
// var sum = 0;
// for (let i = 1; i < 12; i= i + 1) {
//     console.log(`Sum = ${sum} + ${i} = ${(sum += i)}`);
//     if(sum === 18)break

//     // console.log(i);
//     // i += i;
//     // i = i*2;
// }
// for (let i = 0; i < 12; i++) {
//     if (i%2 === 1) {
//        console.log(`toq son ${i}`);
//     } else{
//         console.log(`juft son ${i}`);
//     }
// }
// ..
// for (let i = 0; i < 12; i++) {
//     if (i%2 === 0) {
//        console.log(i);
//     } 
// }
// for (let i = 0; i < 12; i++) {
//     if (i%3 === 0) continue; {
//        console.log(i);
//     } 
// }


// for (let i = 2; i <=10 ; i++) {
//     for (let j = 1; j <=10; j++) {
//         if (k = i * j) {
//             console.log(`${i} * ${j} = ${k}`);
//         }
//     }
// }

outer: for ( i = 1; i <= 5; i++) {
    inner: for (j = 1; j <= 5; j++) {
        if (i <= 2) break outer;{
            console.log(j, "j");
        }
    }
    console.log(i, "i");
}






//  let num = 100;
// for (let j = 2; j <= num; j++) {
//   for (let i = 1; i <= j; i++) {
//     if (j % i === 0) {
//     //   sum++;
//     }
//   }
//   if (sum === 2) {
//     console.log(`tub son : ${j}`);
//   }  else {
//    console.log(`tub son emas : ${j}`);
//     }
//   sum = 0;
// }