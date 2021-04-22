'use strict'
class DispositivoEntrada{
    constructor(tipoEntrada,marca){
        this._tipoEntrada=tipoEntrada;
        this._marca=marca;
    }
    get tipoEntrada(){
        return this._tipoEntrada;
    }
    set tipoEntrada(tipo){  
        this._tipoEntrada=tipo;      
    }
    get marca(){
        return this._marca;        
    }
    set marca(marca){  
        this._tipoEntrada=marca;      
    }
}


class Raton extends DispositivoEntrada{
    static contadorRatones=0;
    constructor(tipoEntrada,marca){
        super(tipoEntrada,marca);
        this._idRaton=++Raton.contadorRatones;               
    }
    get idRaton(){
        return this._idRaton;
    }
    toString(){
        return `idRaton: [ ${this._idRaton} tipoEntrada: ${this._tipoEntrada} mara: ${this._marca}]`;
    }
}

const raton1=new Raton('USB','HP');
raton1.marca='STANDLE';
console.log(raton1.marca);
console.log(raton1)
const raton2=new Raton('Bluetooth','DELL');
console.log(raton2.marca);
console.log(raton2);

class Teclado extends DispositivoEntrada{
    static contadorTeclado=0;
    constructor(tipoEntrada,marca){
        super(tipoEntrada,marca);
        this._idTeclado=++Teclado.contadorTeclado;               
    }
    get idTeclado(){
        return this._idTeclado;
    }
    toString(){
        return `idTeclado: [ ${this.idTeclado}, tipoEntrada: ${this.tipoEntrada}, marca: ${this.marca} ]`
    }
}
const teclado1=new Teclado('USB','MSI');
console.log(teclado1.marca);
console.log(teclado1);
console.log(teclado1.toString());
const teclado2=new Teclado('Bluetooth','ACER');
console.log(teclado2.marca)

class Monitor{
    static contadorMonitor=0;
    constructor(marca,tamanio){
        this._idMonitor=++Monitor.contadorMonitor;
        this._marca=marca;
        this._tamanio=tamanio;
    }
    get idMonitor(){
        return this._idMonitor;
    }
    get marca(){
        return this._marca;
    }
    set marca(marca){
        return this._marca=this.marca;
    }
    get tamanio(){
        return this._tamanio;
    }
    set tamanio(tamanio){
        return this._tamanio=this.tamanio;
    }
    toString(){
        return `idMonitor: [${this._idMonitor}, marca:${this._marca}, tamanio:${this._tamanio} pulgadas]`;
    }   

}
const monitor1=new Monitor('SONY VAIO','14');
const monitor2=new Monitor('HP','16');
const monitor3=new Monitor('DELL','27');
console.log(monitor1)
console.log(monitor2)
console.log(monitor3.toString())
console.log(`${monitor3}`);

class Computadoras{
    static contadorComputadoras=0;
    constructor(nombre,monitor,teclado,raton){
        this._idComputadora=++Computadoras.contadorComputadoras;
        this._nombre=nombre;
        this._monitor=monitor;
        this._teclado=teclado;
        this._raton=raton;
    }
    get idComputadora(){
        return this._idComputadora;
    }
    get nombre(){
        return this._nombre;
    }
    get monitor(){
        return this._monitor;
    }
    get teclado(){
        return this._teclado;
    }
    get raton(){
        return this._raton;
    }
    set nombre(nombre){
        return this._nombre=nombre;
    }
    set monitor(monitor){
        return this._monitor=monitor;
    }
    set teclado(teclado){
        return this._teclado=teclado;
    }
    set raton(raton){
        return this._raton=raton;
    }   
    toString(){
        return `idComputadora:[${this._idComputadora}, nombre: ${this._nombre},\n monitor: ${this._monitor}, \nteclado: ${this._teclado}, \n raton: ${this._raton}]`;
    }

}

const compu1=new Computadoras('Toshiba',monitor1,teclado1,raton1);
const compu2=new Computadoras('Armada',monitor2,teclado2,raton2);
console.log(compu1);
console.log(compu1.toString());
console.log(`${compu2}`);
class Orden{
    static contadorOrden=0;
    constructor(){
        this._idOrden=++Orden.contadorOrden;
        this._computadoras=[];
    }
    get idOrden(){
        return this._idOrden;
    }
    get computadoras(){
        return this._computadoras;
    }
    set computadoras(comp){
        return this._computadoras=comp;
    }
    agregarComputadora(compu){
        this._computadoras.push(compu);
    }
    mostrarOrden(){
        let productoOrden=' ';
        for (const producto of this._computadoras) {
            // productoOrden += `\n { ${producto.toString()} } `;
            productoOrden += `\n { ${producto} } `;
        }
        console.log(`idOrden: ${this._idOrden}, Productos:${productoOrden}`);
    }
    toString(){
        return `idOrden:${this._idOrden}, Productos:${this._computadoras}`;
    }
}

const orden1=new Orden();
const orden2=new Orden();
orden1.agregarComputadora(compu1);
orden2.agregarComputadora(compu2);
orden1.mostrarOrden();
orden2.mostrarOrden();

