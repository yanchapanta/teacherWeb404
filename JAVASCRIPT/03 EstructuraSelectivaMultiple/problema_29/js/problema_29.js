import { solution,deterVocal } from './funciones.js'//FUNCIONES
import { codigoHTML } from './index.js'//HTML
const container=document.querySelector('.container')

container.innerHTML = codigoHTML;



const formulario=document.getElementById('formulario')
const resultado=document.querySelector('.resultado')
formulario.addEventListener('submit',(e)=>{
   
    const valor1=document.getElementById('valor1').value
    // solution(operador,valor1,valor3)
    e.preventDefault()
   

    resultado.innerHTML=`La letra "${valor1}" ${deterVocal(valor1)}`
    formulario.reset()
   
})


// 