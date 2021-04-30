// 21) Programa una función que dado un array numérico 
//     devuelve otro array con los números elevados al 
//     cuadrado, pe. mi_funcion([1, 4, 5]) devolverá [1, 16, 25]

function mi_funcion(array){
// console.log(array);
    for (const key in array) {
        array[key]=array[key]**2;    
    }
    return array;
}
console.log(mi_funcion([1, 4, 5]));

