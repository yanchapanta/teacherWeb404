/* 
Crea una clase Libro
La clase libro tendrá título, autor, año y género. ok
Crea un método que devuelva toda la información del libro ok
Pide 3 libros y guárdalos en un array
Los libros se introducirán al arrancar el programa pidiendo los datos con prompt.
Validar que los campos no se introduzcan vacíos
Validar que el año sea un número y que tenga 4 dígitos
Validar que el género sea: aventuras, terror o fantasía
Crea una función que muestre todos los libros
Crea una función que muestre los autores ordenados alfabéticamente
Crea una función que pida un género y muestre la información de los libros que pertenezcan a ese género usando un el método que devuelve la información
*/
class Libro{
    constructor(titulo,autor,anio,genero){
        this.titulo=titulo;
        this.autor=autor;
        this.anio=anio;
        this.genero=genero;

    }
    showInfo () {
        return `El titulo del libro es ${this.titulo}, su autor es${this.autor}
            , el anio del autor es ${this.anio} y su genero es ${this.genero}
        `;
    }
    getAutor(){
        return this.autor;
    }
    getGenero(){
        return this.genero;
    }
}
const dato=[
    {titulo:"Pablo Vargas",autor:"Danilo montero",anio:"2012",genero:"Novela"},
    {titulo:"Mirian Vargas",autor:"Danilo montero",anio:"2012",genero:"Novela"},
    {titulo:"Pablo Delgado",autor:"Danilo montero",anio:"2012",genero:"Novela"},
    {titulo:"Emancipada",autor:"Danilo montero",anio:"2012",genero:"Novela"}
]

let libros ;
for (const ele in dato) {
   libros  =new Libro(dato[ele]['titulo']
                      ,dato[ele]['autor']
                      ,dato[ele]['anio']
                      ,dato[ele]['genero']);

   document.body.innerHTML+=`
        ${libros.showInfo()} <br>   
   `;
//    console.log(libros.showInfo())
}


const container=document.querySelector('.container')
