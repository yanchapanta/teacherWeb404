class Producto{
    static contadorProductos =0;
    constructor(nombre,precio){
        this._idProducto=++Producto.contadorProductos;
        this._nombre=nombre;
        this._precio=precio;
        // this._fecha= new Date();        
    }
    get idProducto(){
        return this._idProducto;
    }

    get nombre(){
        return this._nombre;        
    }
    set nombre(nombre){
        this._nombre=nombre;
    }
    get precio(){
        return this._precio;
    }
    set precio(precio){
        return this._precio=precio;
    }
    toString(){
        return `idProducto: ${this._idProducto}, nombre: ${this._nombre} , precio:$ ${this._precio} `;
    }    
}
class Orden{

    static contadorOrden=0;
    static get MAX_PRODUCTOS(){
        return 5;
    }
    constructor(){
        this._idOrden = ++Orden.contadorOrden;
        this._productos=[];//
        // this.producto=[
        //     {id:1,nombre:'Pantalon',precio:200,'sat Apr'},//0
        //     {id:1,nombre:'Pantalon',precio:200,'sat Apr'},
        // ]
        // this._contadorProductosAgregados=0;
    }
    get idOrden(){
        return this._idOrden;
    }
    agregarProducto(producto){//objeto con todos los metodos
        if(this._productos.length <
            Orden.MAX_PRODUCTOS){
            this._productos.push(producto);
            
        }else{
            console.log('No se pueden agregar mas productos')
        }
    }
    calcularTotal(){
        let totalVenta=0;
        for (const producto of this._productos) {
            totalVenta += producto.precio;// total venta = totalVenta +producot.precio
        }
        return totalVenta;
    }
    mostrarOrden(){
        let productoOrden=' ';
        for (const producto of this._productos) {
            productoOrden += '\n {'+producto.toString()+" }";
        }
        console.log(`Orden: ${this._idOrden} Total: $${this.calcularTotal()}, Productos: ${productoOrden} `);
    }
}



const producto1=new Producto('Pantalon',200);
const producto2=new Producto('Camisa',100);
console.log(producto1.toString());
console.log(producto2.toString());
// relacion agregacion
const orden1=new Orden();//5
orden1.agregarProducto(producto1);
orden1.agregarProducto(producto2);
orden1.agregarProducto(producto1);
orden1.agregarProducto(producto2);
orden1.agregarProducto(producto1);
orden1.agregarProducto(producto2);
orden1.mostrarOrden();

const orden2=new Orden();

const producto3=new Producto('Cinturon',50);
orden2.agregarProducto(producto3);
orden2.agregarProducto(producto1);
orden2.agregarProducto(producto3);
orden2.agregarProducto(producto1);
orden2.agregarProducto(producto2);
orden2.agregarProducto(producto3);
orden2.mostrarOrden();
