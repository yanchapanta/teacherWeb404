'use strict'
let slider=document.querySelector('.slider_content'),
    sliderIndice=document.querySelectorAll('.slider_art');

let contador=1,
    sizeWidth=sliderIndice[0].clientWidth,
    intervalo=2000;

window.addEventListener("resize",()=>{
    sizeWidth=sliderIndice[0].clientWidth
});

setInterval(()=>{
    slides();
},intervalo);

function slides(){
    slider.style.transform='translate(-'+(sizeWidth*contador)+'px)';//500*1 | 500*2
    slider.style.transition='transform 1s';
    contador++;//2 | 3
    if(contador===sliderIndice.length){//2===3  ||3===3
        contador=0;
        setTimeout(() => {
            slider.style.transform='translate(0px)';
            slider.style.transition='transform 0s';
        }, intervalo);
    }
}

