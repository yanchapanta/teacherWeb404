 /* 
    1 - Solicita un nombre, la edad y muestra por pantalla 
    el mensaje
     "Hola ____, tienes ____ años y el año que viene tendrás ____ años"

    Realiza el ejercicio con html y haz uso de los template strings ``
*/
let formulario=document.getElementById('formulario');
let boton=document.getElementById('boton');
// let nombre=document.getElementById('name');

boton.addEventListener('click',(evento)=>{
    evento.preventDefault();
    let nombre=formulario.nombre.value;
    let edad=formulario.edad.value;
        edad=parseInt(edad);//Null
    let result=document.getElementById('resultado');
    if(isNaN(edad)){
        return result.textContent=`el valor ${edad} no es valido`;
    }

    const showInfo=(nombre,edad)=>`Hola ${nombre}, tienes ${edad} años 
        y el año que viene tendrás ${edad+1} años`;
    
    
    result.textContent=showInfo(nombre,edad);

    console.log(showInfo(nombre,edad));
    

})
