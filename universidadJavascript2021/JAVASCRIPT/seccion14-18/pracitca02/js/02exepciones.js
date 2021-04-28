'use strict';

let boton = document.querySelector('#resultado-boton');
boton.addEventListener('click', (e) => {
    // console.log(e);
	try {
        let valor1 = document.getElementById('valor01').value;
        e.preventDefault();
        let valor2 = document.getElementById('valor02').value;
        console.log(valor2)
        valor1=Number.parseInt(valor1);
        valor2=Number.parseInt(valor2);
        // console.log(typeof(valor1));
		if (!isNaN(valor1) && !isNaN(valor2)) {
            console.log(`Si es un numero ${valor1}`);
        } else {
            throw('No es un numero' + valor1);
		}
	} catch (error) {
		console.log(error);
	}
});
