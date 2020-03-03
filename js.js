//Условие
/*
let num = 50;

if (num < 49) {
    console.log("Неверно")
} else if (num > 100) {
    console.log("Много!")
} else {
    console.log("Верно!")
}

(num == 50) ? console.log('Верно!') : console.log("Неверно");

switch (num) {
    case num < 40:
        console.log("Неверно");
        break;
    case num > 100:
        console.log("Много!");
        break; 
    case 50:
        console.log("Верно!");
        break;
    default:
        console.log("Что-то не так");
        break;
}
*/
//Цикл
// let num = 50;
// while (num <let num = 50; 55) {
//     console.log(num);
//     num++;
// }
// let num = 50;
// do {
//     console.log(num);
//     num++;
// }
// while (num < 55)//проверь

// for (let i = 1; i < 8; i++){
//     if(i == 6){
//         continue;
//     }
//     console.log(i)
// }
var someString = "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.";
var symbols = {};
var uniqLetters = [];
var lettersCount = [];
var minMax = {};

for(var i = 0;i<someString.length;i++){
   var count = 0;
   someString1= someString[i];
  
   
   for(var k = 0; k < someString.length; k++){
     
   
     
     if(someString1 === someString[k] && someString1 !== ' '){
      
       count++;
  
     }
     if(someString1 === someString[k] && someString1 !== ' '){
        uniqLetters[uniqLetters.length]=someString1;
        
     }
    
    
     
   }symbols[someString1] = count;
   
 
} 
console.log(uniqLetters)

