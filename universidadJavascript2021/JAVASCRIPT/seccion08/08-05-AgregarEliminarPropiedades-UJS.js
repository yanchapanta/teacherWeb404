//OBJETO
const persona = {
    nombre: 'Juan',
    apellido: 'Perez',
    email: 'jperez@mail.com',
    edad: 28,
    nombreCompleto: function(){
        return this.nombre + ' ' + this.apellido;
    }
}

//agregar
persona.tel = '55443322';
persona.tel = '44332211';
persona.nonbre='Pepito';

console.log( persona );
//eliminar
delete persona.tel;

console.log( persona );


// ES UN ARREGLO
let frutas = ['Peras','Manzana'];
// si haces
frutas.unshift('Mango');
// quedaria 
console.log(frutas);