//Declaración Función de tipo Expresión
let sumar = function (a, b){return a + b};

resultado = sumar(1, 2);
console.log(resultado);




//funcion tipo fecha
// paso por referencia=pasa la direccion de memoria
const sumarFuncionTipoFlecha = (a, b) => a + b;
resultado = sumarFuncionTipoFlecha(3, 5);
console.log(resultado);