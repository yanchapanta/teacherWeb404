'use strict'

let slider=document.querySelector('.slider_content');
let sliderInd=document.querySelectorAll('.slider_test');
{
    // .clientWidth   | significa q me va a tomar el width del slider
    // si pongo en consola 
    // $0
    // <div class=​"slider_test">​…​</div>​
    //entonces
    // $0.clientWidth
    // 646     | me dice el ancho del slider_test

}

// por que contador 1   | porque cuando pase la segunda vez no va ha ser el tamañio del width de una vez tiene que ser de dos
let contador=1,
    sizeWidth=sliderInd[0].clientWidth,
    intervalo=2000;
//vuelve ha declarar la variable para que sea dinámica en resposive
window.addEventListener("resize",()=>{
    sizeWidth=sliderInd[0].clientWidth;
});

// repeticion que no sotros queramos
setInterval(function tiempo(){
    slides();
},intervalo);


function slides(){
    slider.style.transform='translate('+(-sizeWidth*contador)+'px)';
    slider.style.transition='transform 1s';

    contador++;

    if(contador===sliderInd.length){ //5===5 entonces contador será 0
        contador=0;
        // El setTimeout solamente se va ha ejecutar una vez
        setTimeout(() => {
            slider.style.transform='translate(0px)';
            slider.style.transition='transform 0s';
        }, intervalo);
    }

}
