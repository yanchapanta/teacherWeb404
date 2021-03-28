/* 
Crea una clase Libro
La clase libro tendrá título, autor, año y género.
Crea un método que devuelva toda la información del libro
Pide 3 libros y guárdalos en un array
Los libros se introducirán al arrancar el programa pidiendo los datos con prompt.
Validar que los campos no se introduzcan vacíos
Validar que el año sea un número y que tenga 4 dígitos
Validar que el género sea: aventuras, terror o fantasía
Crea una función que muestre todos los libros
Crea una función que muestre los autores ordenados alfabéticamente
Crea una función que pida un género y muestre la información de los libros que pertenezcan a ese género usando un el método que devuelve la información
*/

class Book{
    constructor(title,author,year,gender) {
        this.title=title;
        this.author=author;
        this.year=year;
        this.gender=gender        
    }
    bookInfo(){
        return `${this.title} es un libro de ${this.gender}
        escrito por ${this.author} en el anio de ${this.year}`
    }
    getAuthor(){
        return this.author
    }
 
    getGender(){
        return this.gender
    }
 
    
}
let books=[];
while (books.length <3) {
    let title=prompt('Introducee el titulo del libro')
    let author=prompt('Introducee el autor del libro')
    let year=prompt('Introducee el anio del libro')
    let gender=prompt('Introducee el genero del libro')
    if (title!='' && author != '' && !isNaN(year) && year.length==4 &&
        (gender == 'aventura' || gender == 'terror' || gender == 'fantasia')
    ) {
        books.push(new Book(title,author,year,gender))
    }
    
}

const showAllBooks=()=>{
   console.log(books)
}
const showAuthor=()=>{
    let authors=[]
    for (const book of boooks) {
        authors.push(book.getAuthor())
    }
    console.log(authors.sort())
}
const showGender=()=>{
    const gender=prompt('Introduce el genero a buscar')
    for (const book of books) {
        if (book.getGender()==gender) {
            console.log(book.bookInfo())
        }
    }
}
// showAllBooks
showAuthor()
document.write('hola mundo')