
function calcular(average) {
    let result='';
    if(average>=0 && average<=5){
        result='Pésimo';
    }else if(average>=6 && average<=10){
        result='Malo';
    }else if(average>=11 && average<=14){
        result='Regular';
    }else if(average>=15 && average<=17){
        result='Bueno';
    }else if(average>=18 && average<=20){
        result='Exelente';
    }else{
        result='Valores incorrectos!'
    }
    // console.log(result)
    // resultado.innerHTL=`Resultado de la Operacion: ${calcular()}`
    return result;
}
export const imprimirHTML= function (notas) {
    const resultado=document.querySelector('.resultado');
    for (const ele of notas) {
        let nota=parseInt(ele['nota'])
        calcular(nota)
        let id=notas.indexOf(ele)
        console.log(id)
        resultado.innerHTML+=`Alumno ${id+1}: ${calcular(nota)}<br>`;
    }    
}