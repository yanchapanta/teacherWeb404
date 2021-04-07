let miNumero = "17";

console.log(typeof miNumero);

let edad = Number(miNumero); 

console.log(typeof edad)
console.log( edad );

if( isNaN(edad)){
    console.log("No es un número");
}else{
    (edad >= 18)?console.log("Puede votar"):
    console.log("Muy joven para votar");
} 



if( isNaN(edad)){
    console.log("No es un número");
}
else{
    let resultado = (edad >= 18)? "Puede votar" : "Muy joven para votar";
    console.log( resultado ); 
}

