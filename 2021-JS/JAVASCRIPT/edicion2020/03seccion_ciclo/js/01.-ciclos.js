const c=console.log
let num1=0;
let num2=1;

if (num1>0) {
    if (num2>0) {
        c(`${num1} y ${num2} son mayores que cero`)
        
    }else if(num2<0){
        c(`${num1} son mayores que cero y num 2  se menor que cero`)

    }else{
        c(`${num1} es mayores que cero y num 2 es ugual que cero`)

    }
}else if(num1<0){
    if (num2>0) {
        c(`${num1} no es mayor que cero y ${num2} es mayor que cero`)
        
    }else if(num2<0){
        c(`${num2} es menor que cero`)

    }else{
        c(`${num1}  es menor que cero y ${num2} es igual a cero`)
        
    }
    
}else{
    if (num2>0) {
        c(`${num2} es mayor que cero`)
    }else if(num2<0){
        c(`${num2} es menor que cero`)
        
    }else{
        c(`${num2} es igual a cero`)

    }

}

let word="holah"
if (word.length>4) {
    c(`word tien ${word} tiene mas de 4 letras`)
}else if(word.length<4){
    c(`word tien ${word} tiene menos de 4 letras`)
    
}else{
    c(`word tien ${word} tiene  4 letras`)

}

let respuesta=false;
 if (respuesta==true) {
     c(`Repuesta tiene el valor true`)
 }
 if (respuesta==false) {
     c(`Repuesta tiene el valor false`)
 }



