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

for (let i = 1; i < 8; i++){
    if(i == 6){
        continue;
    }
    console.log(i)
}