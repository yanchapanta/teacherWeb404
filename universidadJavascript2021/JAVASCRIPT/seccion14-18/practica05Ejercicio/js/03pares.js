/* 23) Programa una función que dado un array de 
    números devuelva un objeto con 2 arreglos en 
    el primero almacena los números pares y en el 
    segundo los impares, pe. miFuncion([1,2,3,4,5,6,7,8,9,0] devolver pares
    {pares: [2,4,6,8,0], impares:[1,3,5,7,9]}    
    */

    function miFuncion(arreglo){
        let par=[];
        let impar=[];
        for (let key in arreglo) {
           if (key%2==0) {
               par[key]=key;
           }else{
               impar[key]=key;
           }
        }
        return {pares:par,impares:impar};
    }
    const objeto=miFuncion([1,2,3,4,5,6,7,8,9,0]);

    ///////////////////////////////////
    console.log(objeto);
    for (const key in objeto) {
       console.log(objeto[key])
    }

    const maxMin = (...array) => {
        let pares=[];
        let impares=[];
        array.forEach(element => {
          parseInt(element)
          if (element % 2 == 0) {
            pares.push(element);
          }else{
            impares.push(element);
          }
        });
        return console.log({
          pares,
          impares
        })
      }
      maxMin(1,2,4,5,10)
    //   forma tres
      const encuentra = (a) => {
        let pares = [];
        let impares = [];
    
        for (let i = 0; i < a.length; i++) {
            if(a[i] % 2!== 0){
                impares.push(a[i]);
            }
            if(a[i] % 2== 0){
                pares.push(a[i]);
            }
            
        }
        console.log({pares,impares});
        
      
    }
    encuentra([1,2,3,4,5,6,7,8,9,0]);