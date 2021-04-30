'use strict'
/* 24) Programa una función que dado un arreglo de números 
devuelva un objeto con dos arreglos, el primero tendrá los 
numeros ordenados en forma ascendente y el segundo de 
forma descendiente, pe. miFuncion([7, 5,7,8,6]) 
devolverá { asc: [5,6,7,7,8], desc: [8,7,7,6,5] }. */
// const ordenar=arreglo.sort((a,b)=>a-b);

function miFuncion(...arreglo){
    let asc=[...arreglo.sort((a,b)=>a-b)];
    let desc=[...arreglo.sort((a,b)=>b-a)];
    // console.log(arreglo.sort((a,b)=>a+b))
    // console.log(arreglo.sort((a,b)=>a-b))
    return {asc:asc,desc:desc};
}

console.log(miFuncion(7, 5,7,8,6));

// let arreglo2=[7, 5,7,8,6,10,1,12,3];
// let asc=[...arreglo2.sort((a,b)=>a-b)];
// let desc=[...arreglo2.sort((a,b)=>b-a)];
// console.log(asc);
// console.log(desc);
class Persona{

}
const per1=new Persona();
