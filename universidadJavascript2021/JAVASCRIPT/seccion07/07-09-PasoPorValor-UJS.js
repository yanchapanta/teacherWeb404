//Tipos primitivos
let x = 10;

function cambiarValor(a){
    a = 20;
    console.log(a);//10
}

//Paso por valor
cambiarValor(x);//10
console.log(x);
console.log(a);
