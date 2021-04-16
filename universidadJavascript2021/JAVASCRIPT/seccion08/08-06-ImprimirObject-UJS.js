const persona = {
    nombre: 'Juan',
    apellido: 'Perez',
    email: 'jperez@mail.com',
    edad: 28,
    nombreCompleto: function(){
        return this.nombre + ' ' + this.apellido;
    }
}

persona.tel = '55443322';
persona.tel = '44332211';

console.log( persona );

delete persona.tel;

console.log( persona );

//Concatenar cada valor de cada propiedad
console.log('Nombre: '+ persona.nombre + ', Apellido' + persona.apellido);
//backtick 
console.log(`
Nombre: ${persona.nombre} \n
Apellido: ${persona.apellido}

`)

//for in
for( nombrePropiedad in persona){
    console.log( persona[nombrePropiedad]);
}

let personaArray = Object.values( persona );
console.log( personaArray );

let personaString = JSON.stringify( persona );
console.log( personaString );







/* 
for(let property in persona) {
    console.log(persona);
}

//   digo property xd
  
for(let property of persona) {
    console.log(property);
} */
