class Empleado{
    constructor(nombre, sueldo){
        this._nombre = nombre;
        this._sueldo = sueldo;
    }
    obtenerDetalles(){
        return `Empleado: ${this._nombre}, sueldo: ${this._sueldo}`;
    }
}
class Gerente extends Empleado{
    constructor(nombre, sueldo, departamento){
        super(nombre, sueldo);
        this._departemento=departamento;
    }
    obtenerDetalles(){
        return `Gerente: ${super.obtenerDetalles()} Departemento: ${this._departemento}`;
    }
}
const empleado1 = new Empleado('Jusus',100);
const gerente1 = new Gerente('Computacion',6000,'Logistica');
console.log(gerente1.obtenerDetalles());

// console.log(empleado3.obtenerDetalles());
function imprimir(tipo){
    console.log(tipo.obtenerDetalles());
    if(tipo instanceof Gerente){
        console.log('Es un objeto de tipo geretne')
    }else if(tipo instanceof Empleado){
        console.log('Es de tipo empleado');
    }else if(tipo instanceof Object){
        console.log('Es un tipo objecto');
    }
}
imprimir(empleado1);
imprimir(gerente1);