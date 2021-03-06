function tabs() {
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
}

mod