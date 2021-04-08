// varables locales
let  numero=12;
numero=666;

const html = document.getElementById("");

const url='https://youtube.com';

// varibles globales
var  global=1222;

for(let contador = 0; contador <= 10; contador++){

    if( contador % 2 !== 0){
        continue;//ir a la siguiente iteracion
    }

    console.log(contador);

}


const crearFuncion1=()=>{
    return 'funcion 01';
}

console.log(crearFuncion1());


const crearFuncion2=function(){
    return 'funcion 02';
}
console.log(crearFuncion2());


console.log(crearFuncion3());


function crearFuncion3(){
    return "funcion 03";
}
