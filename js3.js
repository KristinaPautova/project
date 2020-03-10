window.addEventListener('DOMContentLoaded',function() {

    'use strict'
let tab = document.querySelectorAll(".info-header-tab"),
    info = document.querySelector(".info-header"),
    tabContent = document.querySelectorAll('.info-tabcontent');

    function hideTagContent(a) {
        for (let i = a; i < tabContent.length;i++){
            tabContent[i].classList.remove('show');
            tabContent[i].classList.add('hide');
        }
    }
hideTagContent(1);

function showTabContent(b){

    if(tabContent[b].classList.contains('hide')){
        tabContent[b].classList.remove('hide');
        tabContent[b].classList.add('show');
    }
}

info.addEventListener('click',function(event){
    let target = event.target;
    if(target && target.classList.contains('info-header-tab')){
       for(let i = 0;i < tab.length;i++) {
           if (target === tab[i]){
            hideTagContent(0);
            showTabContent(i);
            break;
           }
       }
    }
  });
   //Timer

   let deadline = '2020-04-21';


   function getTimeRemaining(endtime) {
       let t = Date.parse(endtime) - Date.parse(new Date()),
       seconds = Math.floor((t/1000) % 60),
       minutes = Math.floor((t/1000/60) % 60),
       hours = Math.floor((t/(1000*60*60)));
    // hours = Math.floor((t/1000/60/60) % 24),
    // daus = Math.floor((t/(1000*60*60*24)));

    return{
       "total" : t,
       "hours" : hours,
       "minutes" : minutes,
       "seconds" : seconds
    };
   }


   function setClock(id, endtime) {
     let timer = document.getElementById(id),
          hours = timer.querySelector('.hours'),
          minutes = timer.querySelector(".minutes"),
          seconds = timer.querySelector(".seconds"),
          timeInterval = setInterval(updateClock,1000);
          

          function updateClock() {
              let t = getTimeRemaining(endtime);
          function addZero(num){
              if(num <= 9){
                  return '0' + num;
              }else{ return num;}
          }

              hours.textContent = addZero(t.hours);
              minutes.textContent = addZero(t.minutes);
              seconds.textContent = addZero(t.seconds);
              
              if(t.total <= 0) {
                  clearInterval(timeInterval);
                    hours.textContent =  '00';
                    minutes.textContent = '00';
                    seconds.textContent = '00';
                  
              }
              
              
          }

   }

   setClock("timer",deadline);


   //Modl
   let more = document.querySelector(".more"),
       overlay = document.querySelector(".overlay"),
       close = document.querySelector(".popup-close");

more.addEventListener("click",function () {
    overlay.style.display = 'block';
    this.classList.add('more-splash');
    document.body.style.overflow = 'hidden';
    });

    close.addEventListener("click",function () {
        overlay.style.display = 'none';
        more.classList.remove('more-splash');
        document.body.style.overflow = ''
        });
let age = document.getElementById('age');
function showUser(surname, name) {
	alert("Пользователь " + surname + " " + name + ", его возраст " + this.value);
}
showUser.apply(age,['Kris','Pautova']);

class Options {
    constructor(height,width,bg,fontDize,textAlign){
        this.height = height;
        this.width = width;
        this.bg = bg;
        this.fontDize = fontDize;
        this.textAlign = textAlign;
    }
    createDiv() {
    let obj = document.createElement('div');
    document.body.appendChild(obj);
    let param = `height:${this.height}px; width:${this.width}px; background-color:${this.bg}; font-size:${this.fontSize}px; text-align:${this.textAlign}`;
    obj.style.cssText = param;
    }
 }
const square = new Options(210,310,'green',20,'center');

//Slider

let slideIndex = 1,
    slides = document.querySelectorAll(".slider-item"),
    prev = document.querySelector(".prev"),
    next = document.querySelector('.next'),
    dotsWrap = document.querySelector(".slider-dots"),
    dots = document.querySelectorAll('.dot');

    showSlides(slideIndex);

    function showSlides(n) {

        if(n > slides.length){
            slideIndex = 1;
        }
        if(n < 1) {
            slideIndex = slides.length;
        }

        slides.forEach((item) => item.style.display = 'none');
        // for (let i = 0; i < slides.length;i++) {
        //     slides[i].style.display = 'none';
        // }
      dots.forEach((item) => item.classList.remove("dot-active"));

      slides[slideIndex-1].style.display = "block";
      slides[slideIndex-1].classList.add("dot-active");
    }

    function plusSlides(n) {
        showSlides(slideIndex += n);
    }
    function currentSlide(n) {
        showSlides(slideIndex = n);
    }

    prev.addEventListener('click',function(){
        showSlides(-1);
    });
    next.addEventListener('click',function(){
        plusSlides(1);
    });

    dotsWrap.addEventListener('click',function(event){
      for(let i = 0; i < dots.length + 1;i++) {
          if(event.target.classList.contains('dot') && event.target === dots[i - 1]){
              currentSlide(i);
          }
      }
    });

    //Calc

    let persons = document.querySelectorAll(".counter-block-input")[0],
        restDays = document.querySelectorAll(".counter-block-input")[1],
        place = document.getElementById("select"),
        totalValue = document.getElementById('total'),
        personsSum = 0,
        daysSum = 0,
        total = 0;

        totalValue.innerHTML = 0;

        persons.addEventListener('change',function() {
            personsSum = +this.value;
            

            if(restDays.value === "") {
                totalValue.innerHTML = 0;
            }else {
                total = (daysSum + personsSum)*4000;
                totalValue.innerHTML = total;
            }
        });

        restDays.addEventListener('change',function() {
            daysSum = +this.value;
            

            if(persons.value === "") {
                totalValue.innerHTML = 0;
            }else {
                total = (daysSum + personsSum)*4000;
                totalValue.innerHTML = total;
            }
        });

        place.addEventListener('change', function() {
            if(restDays.value === "" || persons.value === "" ){
                totalValue.innerHTML = 0;
            }else{
                let a = total;
                totalValue.innerHTML = a * this.options[this.selectedIndex].value;
            }
        });
        
});
