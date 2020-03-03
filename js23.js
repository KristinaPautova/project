// let timerId = setTimeout(sayHello,3000);//выскакивает окно
// clearTimeout(timerId);//остановить действие

// let timerId = setTimeout(sayHello,3000);//через время появляется
// clearTimeout(timerId);//остановить действие

// function sayHello() {
//     console.log('Hello World')
// }

// let timerid = setTimeout(function log() {
//     console.log('Hello');
//     setTimeout(log,2000);
// })

let btn = document.querySelector('.btn'),
    elem = document.querySelector('.box');

   function myAnimation() {
       let pos = 0;

let id = setInterval(frame, 10);
       function frame () {
           if(pos === 300){
               clearInterval(id)
           }else{
               pos++;
               elem.style.top = pos + 'px';
               elem.style.left = pos + 'px';
           }
       }
   } 

   btn.addEventListener('click',myAnimation)

   let btnBlock = document.querySelector(".btn-block"),
       btns = document.getElementsByTagName('button');

       btnBlock .addEventListener('click',function(eveny){
           if(event.target && event.target.matches("button.first")){
               console.log('Hello')
           }
       })
           }
       })