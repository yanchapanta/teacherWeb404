const c=console.log;
const data=async ()=>{
    try {
        //verifica fetch en el navegador
        if (window.fetch != undefined)console.log('FETCH OK')
        else console.log('FETCH NOT WORKS')
        const url='base/institute.text';
        const respuesta=await fetch(url);
        const data=await respuesta.json();
        calular(data)     
    } catch (error) {
        console.log(error)
    }
    // c('desde dato server')
}
const resultado=document.querySelector('.resultado');
function calular(colegio) {
    let cantPagar;
    
    for (const ele of colegio) {
        c(ele)
        const school=ele.school.toLowerCase();
        let level=ele.level.toLowerCase();
        let usuario=colegio.indexOf(ele)
        if (school==='nacional') {
            if (level==='a') {
                cantPagar='300';                
            }else  if (level==='b') {
                cantPagar='200';                
            } else if (level==='c'){
                cantPagar='100';                
            }
        }else if (school==='particular') {
            if (level==='a') {
                cantPagar='400';                
            }else  if (level==='b') {
                cantPagar='300';                
            } else{
                cantPagar='200';                
            }
        }
      
    resultado.innerHTML+='Usuario '+(usuario+1)+' : '+cantPagar+'<br>';
    }
    return resultado;

}





export default data;