'use strict'
const cl=console.log

let num=4;
switch (num) {
    case 1: cl(`${num} tiene el valor 1`)
        
        break;
    case 2: cl(`${num} tiene el valor 2`)
        
        break;

    default: cl(`${num} no vale ni uno ni dos`)
        break;
}
switch (num) {
    case 1:
        
    case 3:
        
    case 5:
        cl(`${num} es impar`)
        
    case 2:
    case 4:
        cl(`${num} es par`)
            
        break;
    default:
        break;
}