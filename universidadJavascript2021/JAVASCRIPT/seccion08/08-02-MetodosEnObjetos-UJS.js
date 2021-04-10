let x = 10;
console.log(x.length);

let persona = {
    nombre: 'Juan',
    apellido: 'Perez',
    email: 'jperez@mail.com',
    edad: 28,
    diseño:true,
    //metodo del objeto
    
    nombreCompleto: function(telf){
        return this.nombre + ' ' + this.apellido+" telefono: "+telf;
    }
}

console.log(persona.nombre);
console.log(persona.edad);
console.log(persona.apellido);
console.log(persona['diseño']);
console.log(persona.nombreCompleto(09812340000));

console.log(persona);