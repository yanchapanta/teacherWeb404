let resultado = sumarTodo(5, 4, 13, 10, 9, 10, 11, 3);
console.log( resultado );
/* 
Nota: "similar a Array" significa que arguments tiene una propiedad lenght y propiedades 
indexadas desde cero, pero no tiene métodos integrados de Array como forEach() o map(). 
Ve la §Descripción para obtener más detalles. 
*/
function sumarTodo(){
    let suma = 0;
    
    for(let i = 0; i < arguments.length; i++){
        suma += arguments[i]; // suma = suma + arguments[i]
    }
    return suma;
}
