class Persona{
    constructor(nombre, apellido){
        this._nombre = nombre; 
        this._apellido = apellido;
    }
    get getNombre(){
        return this._nombre;
    }
    set setNombre(nombre){
        this._nombre = nombre;
    }
}

const persona1 = new Persona('Juan', 'Perez');
persona1.setNombre = 'Juan Carlos';//set nombre('Juan Carlos')
console.log( persona1.getNombre );//get nombre