let persona = {
    nombre: 'Juan',
    apellido: 'Perez',
    email: 'jperez@mail.com',
    edad: 28,
    idioma: 'es',
    get getLang(){
        return this.idioma.toUpperCase();
    },
    set setLang( lang ){
        this.idioma = lang.toUpperCase();
    },
    get nombreCompleto(){
        return this.nombre + ' ' + this.apellido;
    }
}

console.log( persona.lang );

persona.setLang = 'en';//se llama metodo set lang

console.log( persona.getLang );//se llama metodo get lang
console.log( persona.idioma );