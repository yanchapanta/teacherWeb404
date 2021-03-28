"use strict"
const c=console.log
import { codeDiv } from "./index.js";//HTML
import { searchNumero } from "./funciones.js";

const container = document.querySelector(".container");
container.innerHTML = codeDiv;


const formulario=document.getElementById("formulario")
const resultado=document.querySelector('.resultado')
formulario.addEventListener('submit',(e)=>{
    e.preventDefault()
    const valor=parseInt(document.getElementById('valor1').value)

    resultado.innerHTML=searchNumero(valor)//funcion exportada
    
})