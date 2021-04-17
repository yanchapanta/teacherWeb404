class Persona{

    static contadorPersonas = 0;//atributo de nuestra clase

    static get MAX_OBJETO(){
        return 5;
    }

    constructor(nombre, apellido){
        this._nombre = nombre; 
        this._apellido = apellido;
        if( Persona.contadorPersonas < Persona.MAX_OBJETO){/// 1,2,3,4 <5
            this.idPersona = ++Persona.contadorPersonas;
        }
        else{
            console.log('Se han superado el máximo de objetos permitidos');
        }
    }
    get nombre(){
        return this._nombre;
    }
    set nombre(nombre){
        this._nombre = nombre;
    }
    get apellido(){
        return this._apellido;
    }
    set apellido(apellido){
        this._apellido = apellido;
    }
    nombreCompleto(){
        return this.idPersona + ' ' + this._nombre + ' ' + this._apellido;
    }
    //Sobreescribiendo el metodo de la clase Padre (Object)
    toString(){
        //Se aplica poliformismo (multiples formas en tiempo de ejecucion)
        //el metodo que se ejecuta depende si es una referencia de tipo padre 
        //o de tipo hijo
        return this.nombreCompleto();
    }
    static saludar(){
        console.log('saludos desde método static');
    }
    static saludar2(persona){
        console.log(persona.nombre + ' ' + persona.apellido);
    }

}
// AltGr + } + espacio

class Empleado extends Persona{
    constructor(nombre, apellido, departamento){
        super(nombre, apellido);//llamar al constructor de la clase padre
        this._departamento = departamento;
    }
    get departamento(){
        return this._departamento;
    }
    set departamento(departamento){
        this._departamento = departamento;
    }
    //Sobreescritura
    nombreCompleto(){
        return super.nombreCompleto() + ', ' + this._departamento;
    }
}

let persona1 = new Persona('Juan', 'Perez');
    persona1.nombre='Julieta';//set
console.log( persona1.nombre );//get

let empleado1 = new Empleado('Maria', 'Jimenez', 'Sistemas');
console.log( empleado1.toString() );

console.log( Persona.contadorPersonas );

let persona2 = new Persona('Karla', 'Ramirez');
console.log( persona2.toString() );
console.log( Persona.contadorPersonas);

console.log( Persona.MAX_OBJETO);
Persona.MAX_OBJETO = 10;//no se puede modificar
console.log( Persona.MAX_OBJETO);

let persona3 = new Persona('Mariano', 'Lara');//4
let persona4 = new Persona('Armando', 'Toledo');//5
let persona5 = new Persona('Laura', 'Quintero');//
console.log( persona4.toString() );

{/* <form id='form'>
    <input id='idNombre' type='text' name='nombre'>
</fomr> */}
// let form=document.getElementById('form');
// let valor=form.nombre.value
// valor=parseInt(valor);
// let idNombre=parseInt(document.getElementById('idNombre').value);



// function miFuncion(a,b){
//     let variable1=a;
// }
// miFuncion(12,23);



