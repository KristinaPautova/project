// localStorage.setItem("number",1)//создать число в локал

// console.log(localStorage.getItem('number'));//вытащить в кансоль

// localStorage.removeItem('number');//удалить из локал(Application)

// localStorage.clear();//очистить весь локл(Application)

// window.addEventListener('DOMContentLoaded',function(){

    //  let checkbox = document.getElementById("rememberMe"),
    //      change = document.getElementById('change'),
    //      from = document.getElementsByTagName('form')[0];

    //    if(localStorage.getItem("isChecked") === "true"){
    //        checkbox.checked = true;
    //    }
    //    if(localStorage.getItem("bg") === "change") {
    //        from.style.backgroundColor = "#FF4766";
    //    }
    //  checkbox.addEventListener("click", function(){
    //     localStorage.setItem("isChecked",true);
    //  });
     
    //  change.addEventListener("click",function(){
    //      localStorage.setItem("bg","change");
    //      from.style.backgroundColor = "#FF4766";
    //  });

//      let persone = {
//          name: "Alex",
//          age: 25,
//          tech: ["mobile","notebook"]
//      };

//     let serializedPersone = JSON.stringify(persone);
//     localStorage.setItem("Alex",serializedPersone);

//     console.log(JSON.parse(localStorage.getItem("Alex")));
// })

//lesson39

// let json = '{"id":2}'

// try {
//     let user = JSON.parse(json)
//     console.log(user);

//     if(!user.name){
//         throw new Error("В этих данных нет имени")
//     }
   
// } catch(error) {
//     console.log(error.name);
//     console.log(error.message);
//     console.log(error.stack);

//     console.log(`Мы получили ошибку: ${error.name}`)

// } finally {
//     console.log('Я выплнюсь всегда!')
// }

// console.log("А я буду работать дальше")

