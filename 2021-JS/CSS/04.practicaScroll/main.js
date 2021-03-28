window.addEventListener('scroll',()=>{
    let animacion=document.getElementById('animado');
    {
        // nos da la posicion scroll mas cercana a la imagen
    }
    let posicionObj1=animacion.getBoundingClientRect().top;
    // console.log(posicionObj1);
    //mientras mas se hacerque al 1 mas cera para toda la pantalla

    let sizePantalla = window.innerHeight/3.5;

    if(posicionObj1 < sizePantalla){
        animacion.style.animation='mover 1s ease-out';
    }
    
});