// 'use strict';



// let persone = {
//     name : 'jone',
//     age: 25,
//     isMarried: false
// };
// console.log(persone['name'])

// let arr = ["plum.png", "organge.jpg", 'apple.bmp'];

// console.log(arr[2]);

// //alert('Hello world');

// //let answer = confirm("Are you here?");

// //console.log(answer);

// //let answer = +prompt("Есть ли вам 18?", 'Да');

// //console.log(typeof(answer));

// //console.log('arr' + " - object");
// //console.log(4 + +" - object");

// let incr = 10,
//     decr = 10;

 

//  console.log(incr++);
//  console.log(decr--)

//  console.log(5%2)
//  console.log('2'=== 2);

//  let isChecked = false,
//     isClose = false;

// console.log(isChecked || !isClose);

//функции
// let num = 20;
// function showFirstMessage(text){
//     alert(text);
//     // let num = 10;
//      console.log(num);

// }

// showFirstMessage("Hello World");
// console.log(num);

// let calc = function(a,b){
//     return (a + b);
// }
// let calc = (a,b) => a+b

// console.log(calc(3,4));
// console.log(calc(8,4));

// function retVar(){
//     let num = 50;
//     return num;
// }

// let anotherNum = retVar ();
// console.log(anotherNum);

// let str = "test";
// console.log(str.length);

// console.log(str.toUpperCase());
// console.log(str.toLowerCase());

// let twelve = "12.2px";
// // console.log(Math.round(twelve));
// console.log(parseInt(twelve));
// console.log(parseFloat(twelve));
//Callback-функция
// function first (){
//     //что-то делаем
//     setTimeout( function(){
//     console.log(1);
//     } , 500 );
// }

// function second(){
//     console.log(2);

// }
// first();
// second();
// function learnJS (lang, Callback){
//     console.log("Я учу"+ " " + lang);
//     Callback();

// }
// function done(){
//     console.log("Я прошел 3й урок!")
// }
// learnJS("Javacript",done )
// Объект
// let options = {
//     width: 1024,
//     height: 1024,
//     name: "test"
// }

// //console.log(options.name);

// options.bool = false;
// options.colors = {
//     border: "black",
//     bg: "red"
// }

// delete options.bool;

// //console.log(options);

// for(let key in options){
//     console.log("Свойство " + key + "  имеет значение " + options[key])
// }
// console.log(Object.keys(options).length);
// Массивы и псевдоМасивы
//let arr = ["first",2,3,"four",5];

// arr.pop();
// arr.push('5');
// arr.shift();
// arr.unshift('1');
// for(let i = 0;i < arr.length;i++){
//     console.log(arr[i])
// }
// arr.forEach(function(item, i, mass){
//     console.log(i + ": " + item + " (массив: " + mass + " )");
// });

//console.log(arr);

// let mass = [1,3,4,6,7];

// for(let key of mass){
//     console.log(key)
// }

// let ans = prompt("",""),
//     arr = [];

// arr = ans.split(",");
// console.log(arr)

// let arr = ['aawe',"zzz","pp","rqa"],
//  i = arr.join(", ");

//  console.log(i);

// let arr = [1,15,4],
//  i = arr.sort(compareNum);

//  function compareNum(a,b){
//      return a-b;
//  }
//  console.log(arr);

//  let soldier = {
// health: 400,
// armor: 100

//  };
//  let john = {
//      health: 100
//  };

//  john.__proto__ = soldier;
//  console.log(john);
//  console.log(john.armor)
//      //динамическая типизация
// - to string

//1)
// console.log(typeof(Boolean(4)));
// //2)
// console.log(typeof(""+ false));
// console.log("https://vk.com/catalog/"+ 5);

// // - to Nomber

// //1)
// console.log(typeof(Number(5)));
// //2)
// console.log(typeof(5 + "5"));
// //3)
// console.log(typeof(parseInt("15xp",10)));

// let ans = +prompt("Hello?","");

// //0, '',null,undefined,NaN=false

// let switcher = null;

// if(switcher){
//     console.log('Worfing')
// }
//  switcher = 1;
//  if (switcher){
//     console.log('Worfing')
//  }

//  //2)
//  console.log(typeof(Boolean("5")));
//  //3)
// let box = document.getElementById("box"),
//     btn = document.getElementsByTagName('button'),
//     circle = document.getElementsByClassName("circle"),
//     heart = document.querySelectorAll(".wrapper.heart"),
//     oneHeart = document.querySelector(".heart"),
//     wrapper = document.querySelector(".wrapper")

// box.style.backgroundColor = "blue";
// btn[1].style.borderRadius = '100%;

// circle[0].style.backgroundColor = 'red';
// circle[1].style.backgroundColor = 'yellow';
// circle[2].style.backgroundColor = 'green';

// // for (let i = 0; i < heart.length; i++){
// //     heart[i].style.backgroundColor = 'blue';
// // }

// // heart.forEach(function(item, i, hearts){
// //     item.style.backgroundColor = 'blue';
// // });

// let div = document.createElement('div'),
//     Text = document.createTextNode("Тут был я");
// div.classList.add('black');

// //document.body.appendChild(div);
// // wrapper.appendChild(div);
// // div.innerHTML = "<h1>Hello World!</h1>";

// div.textContent = 'Hello World!';

//  document.body.insertBefore(div, circle[0]);
//  document.body.removeChild(circle[1]);
//  wrapper.removeChild(heart[1]);

//  document.body.replaceChild(btn[1], circle[1]);

//     console.log(div);

let btn = document.querySelectorAll('button'),
    wrap = document.querySelector('.wrapper'),
    link = document.querySelector('a');

// btn[0].onclick = function (){
//     alert('Вы нажали первую кнопку!')
// };
// btn[0].onclick = function (){
//     alert('Вы  опять нажали первую кнопку!')
// };


// btn[0].addEventListener('click', function(event){
//      let target = event.target;
//      target.style.display = 'none';
//     console.log('произошло событие: ' + event.tupe + ' на элементе ' + event.target )
   
// });

// wrap.addEventListener('click', function(event){
//     console.log('произошло событие: ' + event.tupe + ' на элементе ' + event.target )
// });

link.addEventListener('click',function(event){
    event.preventDefault();
    console.log('произошло событие: ' + event.tupe + ' на элементе ' + event.target );
});
btn.forEach(function(item){
    item.addEventListener('mouseleave',function(){
        console.log('Вышли')
    })
})
// btn[0].addEventListener('mouseenter',function(){
//     alert('Вы навели на первую кнопку');
// });




 