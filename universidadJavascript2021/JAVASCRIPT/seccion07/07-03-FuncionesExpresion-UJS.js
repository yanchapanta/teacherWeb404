//Llamando a la función
let resultado = miFuncion(2, 3);
console.log(resultado);

//Declaración de la función
function miFuncion(a, b){
     return a + b;
}


//Declaración Función de tipo Expresión
let sumar = function (a, b){return a + b};

resultado = sumar(1, 2);
console.log(resultado);