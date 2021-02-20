const button=document.querySelector('.button');
const resultado=document.querySelector('.resultado');

export const calFacultad=(cali)=>{
    console.log(cali)
    button.addEventListener('click',(e)=>{
        const puntaje=parseInt(document.querySelector('.puntaje').value);
        console.log(puntaje)
        e.preventDefault();
        console.log('boton')
        let result='';
    if (puntaje>=70 && puntaje<=79) {
        result='CIENCIAS';
    }else if (puntaje>=80 && puntaje <= 89) {
        result='INDUSTRIA';
    }else if (puntaje>=90 && puntaje <= 99) {
        result='ELECTRONICA';
    }else if (puntaje>=100) {
        result='SISTEMAS';
    }else{
        result='NIGUNA'
    }
    resultado.innerHTML+=` ${result} <br>`
    })
    
}

