
// i =5

// while (i) {
//     console.log("hey");
//     i--;
 // }

// do {
//     console.log(i);
//     i--
// } while(i == 0)



// =========================


// funcsiyani creat qilish yollari ?
// function decloration
// function exprestion

// hoisting nima ? 
// verabillarni va funksiyalarni doim faylninih yuqorisida decler yani chaqirib ketishga aytiladi




///// Function decloration//////
// function getAvr() {
    //   console.log("Yusufxon, Welcome to Webbrain");
// }
// getAvr()


////// calback Function////

//// Function experation/////
// const getAvr = function(){
//   console.log("Yusufxon, Welcome to Webbrain");
// }
// getAvr()


// Arrov Function

// const getAvr =(){

// }

 
//  const getAvr = function(name, surname, age){
//       console.log(`Name: ${name}`);
//       console.log(`Surname: ${surname}`);
//       console.log(`Age: ${age}`);
//       console.log(`==============`);
// }
// getAvr('Najmiddin','Abdullayev', 15)
// getAvr('Iqbol','Abdullayev', 15)
// getAvr('Yusufxon','Valiyev', 15)
// getAvr('Qodir','Abdullayev', 15)
// getAvr('SArvar','Akbarov', 15)


// default parametrs function 
// const telegram = (name, surname= "")=>{
//     console.log(name, surname);
// }
// telegram("yusufxon")




const gpa = (a=0, b=0, c=0, d=0) =>{
    let res=(a+b+c+d)/ 4;
    return res;
}
console.log(gpa(5,3,3,2));


const getNum =(a) =>{
    let total= 160;
    return(a*100) / total

}
console.log(parseInt(getNum(110)));











// function num(a, b) {
//     return a+b;
// }
// console.log(num(5,6))
// const num = function(s,a,v) {
//     return s*a+v;
// }
// console.log(num(5,3,2));b
const num = (a,b) =>{
   return a+b;
}
console.log(num(2,3));
