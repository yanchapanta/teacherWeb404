class Persona{

    static contadorPersonas = 0;//atributo de nuestra clase

    constructor(nombre, apellido){
        this._nombre = nombre; 
        this._apellido = apellido;
        this.idPersona = ++Persona.contadorPersonas;
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
//base datos persona
const arrayPersona=[
    {nombre:'Juan', apellido:'Perez'},//0
    {nombre:'Pablo', apellido:'Gutierez'}//1
    {nombre:'Anita', apellido:'Gutierez'}//1
    {nombre:'Pablo', apellido:'Gutierez'}//1
    {nombre:'Pepe', apellido:'Gutierez'}//1
    {nombre:'Pablo', apellido:'Gutierez'}//1
    {nombre:'Gorgue', apellido:'Gutierez'}//1
    {nombre:'Pablo', apellido:'Gutierez'}//1
    {nombre:'Pablo', apellido:'Gutierez'}//1
]
//base datos empledos
runPerson(arrayPersona);
function runPerson(arr){
    
    for (const key in arr) {
        new Persona(arr[key].nombre,arr[key].apellido);
    }
}
// const persona1 = new Persona(arrayPersona[0].nombre,arrayPersona[0].apellido);
console.log( persona1.toString() );

const empleado1 = new Empleado('Maria', 'Jimenez', 'Sistemas');
console.log( empleado1.toString() );

console.log( Persona.contadorPersonas );

const persona2 = new Persona('Karla', 'Ramirez');
console.log( persona2.toString() );
console.log( Persona.contadorPersonas);