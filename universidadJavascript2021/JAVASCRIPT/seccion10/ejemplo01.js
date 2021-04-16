class Persona{
    static contadorPersonas = 0;//atributo de nuestra clase
    constructor(nombre, apellido){
        this._nombre = nombre; 
        this._apellido = apellido;
        this.idPersona = ++Persona.contadorPersonas;
    }
}
//base datos persona
const arrayPersona=[
    {nombre:'Juan', apellido:'Perez'},
    {nombre:'Pablo', apellido:'Gutierez'},
    {nombre:'Anita', apellido:'Gutierez'},
    {nombre:'Pablo', apellido:'Gutierez'},
    {nombre:'Pepe', apellido:'Gutierez'},
    {nombre:'Pablo', apellido:'Gutierez'},
    {nombre:'Gorgue', apellido:'Gutierez'},
    {nombre:'Pablo', apellido:'Gutierez'},
    {nombre:'Pablo', apellido:'Gutierez'}
]
//base datos empledos
for (const ele in arrayPersona) {
        new Persona(arrayPersona[ele].nombre,arrayPersona[ele].apellido);
}
console.log( Persona.contadorPersonas);