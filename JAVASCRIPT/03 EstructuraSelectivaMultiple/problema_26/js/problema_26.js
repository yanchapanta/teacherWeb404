"use strict"
const c=console.log
import { codeHeader,codeDiv,search } from "./funciones.js";//HTML
const container = document.querySelector(".container");




container.innerHTML = codeHeader;
container.innerHTML += codeDiv;


const formulario=document.getElementById("formulario")
const resultado=document.querySelector('.resultado')
formulario.addEventListener('submit',(e)=>{
    e.preventDefault()
    const valor=parseInt(document.getElementById('valor1').value)

    resultado.innerHTML=search(valor)//funcion exportada
    
})





