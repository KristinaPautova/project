// touchstart  //нажимает на экран
// touchmove  //нажимает и удерживает
// touchend  //перестает соприкосаться с экраном
// touchenter //зашел на элемент
// touchleav //ушел из элемента
// touchcancel // за пределами браузера

// window.addEventListener('DOMContentLoaded',function(){
//     let box = document.querySelector('button');

    // box.addEventListener('touchstart', function(e){
    //     e.preventDefault();
    //     console.log('Red box: touchstart');
    //     console.log(e.target);
    //     console.log(e.touches[0].target);//сколько пальцев
    //     console.log(e.changedTouches);//список пальцев
    //     console.log(e.targetTouches);//те пальцы с определёным обектом
    // });
    // box.addEventListener('touchmove', function(e){
    //     e.preventDefault();
    //     console.log('Red box: ' + e.touches[0].pageX);
    // });
//     box.addEventListener('touchend', function(e){
//         e.preventDefault();
//         console.log('Red box: touchend');
//     });
//   new RegExp('pattern', 'flags');
//   /pattern/
//поиск Элемнтов
//   let ans = prompt('Введите ваши имя');


//   let reg = /n/gi;
// // //   console.log(ans.search(reg));
// //   console.log(ans.match(reg));
// console.log(reg.test(ans));//true/fols

  // i //флаг регистра (маленькая буква или большая)
  // g //флаг глобальности(все вхождения)
  // m // флаг многострочности 

 // \d  // цифру \D // не цифру
//  \w  // все буквы \W // не букву
//  \s  //найти пробелы \S // не пробел

//   let pass = prompt('Введите пароль');

//   console.log(pass.replace(/./g,"*"));// . - все,любые символы которые попадут в строку
//   alert('12-34-56'.replace(/-/g,':'))


// let ans = prompt('Введите число');


//   let reg = /\d/g;

//   console.log(ans.match(reg));

let str = 'My name is$ R2D2';

console.log(str.match(/\$/i));