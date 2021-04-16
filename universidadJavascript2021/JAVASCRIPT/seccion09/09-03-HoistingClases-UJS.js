//NO es posible crear objetos antes de declarar la clase
//No se aplica el concepto de hoisting
//let persona2 = new Persona('Karla', 'Juarez');

class Persona{
    constructor(nombre, apellido){
        this._nombre = nombre; 
        this._apellido = apellido;
    }
    get nombre(){
        return this._nombre;
    }
    set nombre(nombre){
        this._nombre = nombre;
    }
}

const persona1 = new Persona('Juan', 'Perez');
persona1.nombre = 'Juan Carlos';//set nombre('Juan Carlos')
console.log( persona1.nombre );//get nombre

const persona2 = new Persona('Karla', 'Juarez');
console.log( persona2 );

const persona3 = new Persona('Karla', 'Juarez');
console.log( persona3 );



const miF=function (){

    return 'hola mundo';

}
console.log(miF());