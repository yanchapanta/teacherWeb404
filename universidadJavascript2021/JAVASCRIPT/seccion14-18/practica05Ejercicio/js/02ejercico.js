/* 22) Programa una función que dado un array devuelva el número 
    mas alto y el más bajo de dicho array, pe. 
    miFuncion([1, 4, 5, 99, -60]) devolverá [99, -60]. */
    function miFuncion(arreglo){
        const ordenar=arreglo.sort((a,b)=>a-b);

        return console.log(`menor: ${ordenar[0]} y mayor: ${ordenar[arreglo.length-1]}`);
    }

    miFuncion([1, 4, 5, 99, -60]);