import { solution } from './funciones.js'//FUNCIONES
import { codigoHTML } from './index.js'//HTML
const container=document.querySelector('.container')

container.innerHTML = codigoHTML;



const formulario=document.getElementById('formulario')
const selectId=document.querySelector('#selectId')
const resultado=document.querySelector('.resultado')
formulario.addEventListener('submit',(e)=>{
    const valor1=parseInt(document.getElementById('valor1').value)
    const valor2=parseInt(document.getElementById('valor2').value)
    // solution(operador,valor1,valor3)
    e.preventDefault()
    const index=formulario.selectId[selectId.selectedIndex] 
    console.log(index.id)
    resultado.innerHTML+='<br>'+'La '+index.innerHTML+solution(index.id,valor1,valor2)
    console.log(index.innerHTML)
    formulario.reset()
   
})

// 