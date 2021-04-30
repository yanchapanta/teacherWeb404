'use strict';
const formulario=document.getElementById('formulario');
let boton = document.querySelector('#resultado-boton');
boton.addEventListener('click', (e) => {
    // console.log(e);
    e.preventDefault();

	try {
        console.log(`Imprimir del formulario el dato 01 es: ${formulario.form001.value}`)
        let valor1 = document.getElementById('valor01').value;
        let valor2 = document.getElementById('valor02').value;
        valor1=Number(valor1);
        valor2=Number(valor2);
        console.log( typeof(valor1));
        console.log( typeof(valor2));
		if (isNaN(valor1) || isNaN(valor2)) {
            throw('No es un numero' + valor1+' y '+valor2);
        } else {
            console.log(`Si es un numero ${valor1} y ${valor2}`);
		}
	} catch (error) {
		console.log(error);
	}
});
