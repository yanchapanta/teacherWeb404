export const solution=function (ope,num1,num2) {
    let result;
    const suma=(num1,num2)=>num1+num2;
    const resta=(num1,num2)=>num1-num2;
    const multiplicacion=(num1,num2)=>num1*num2;
    const division=(num1,num2)=>num1/num2;
    switch (ope) {

        case '+':result=suma(num1,num2)
            
            break;
        case '-':result=resta(num1,num2)
            
            break;
        case '*':result=multiplicacion(num1,num2)
            
            break;
        case '/':result=division(num1,num2)
            
            break;
    
        default:result=`ninguna opcion`
            break;
    }
    return result
}
export const deterVocal=(letter)=>{
 
    let result;
    // letter=letter.toLowerCase();
    if (letter=='a' || letter=='e' || letter=='i' || letter=='o' || letter=='u') {
        result = 'si es un vacal';
        
    }else if(letter.length>=2){
        result='Ingrese solo una letra'
        
    }else{
        result='no es una vocal'
    }

    return result;
}