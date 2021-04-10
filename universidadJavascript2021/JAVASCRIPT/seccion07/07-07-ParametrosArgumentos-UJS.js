//Declaración Función de tipo Expresión
let sumar = function (a = 4, b = 5){
    // arguments, es arreglo o array que almacena los valores que recibe
    console.log(arguments[0]);
    console.log(arguments[1]);
    console.log(arguments[2]);
    console.log(arguments[3]);
    console.log(arguments.length);
    return a + b + arguments[2];
};

resultado = sumar(3, 6, 7, 666);
console.log(resultado);