"use strict"
const c=console.log

const container = document.querySelector(".container");

const codeHeader=`
<h2>
    73.- Dados 5 numeros y un divisor, determinar cuantos
    numeros multiplos hay del divisor en los 5 numeros
    ingresados
</h2>
`;
const codeDiv=`
<form id='formulario'>
    <div>            
       
        <input type="text" id="valor1" placeholder="Ingrese numero uno" >
        <input type="text" id="valor2" placeholder="Ingrese numero dos" >
        <input type="text" id="valor3" placeholder="Ingrese numero tres" >
        <input type="text" id="valor4" placeholder="Ingrese numero cuatro" >
        <input type="text" id="valor5" placeholder="Ingrese numero cinco" >
    </div>

    <div>
        <input type="submit" value="Calcular raiz">
        <span class="resultado" ></span>
    </div>
</form>

`;

container.innerHTML = codeHeader;
container.innerHTML += codeDiv;


const formulario=document.getElementById("formulario")
const infoSelect=document.getElementById('infoSelect')
const resultado=document.querySelector('.resultado')
formulario.addEventListener('submit',(e)=>{
    e.preventDefault()
   
    const num1=parseInt(document.getElementById('valor1').value)
    const num2=parseInt(document.getElementById('valor2').value)
    const num3=parseInt(document.getElementById('valor3').value)
    const num4=parseInt(document.getElementById('valor4').value)
    const num5=parseInt(document.getElementById('valor5').value)
    

    const numeros=[num1,num2,num3,num4,num5]
    let cantidad=0,flag;
    for (let i = 0; i < 5; i++) {
        if (numeros[i]% 5==0) {
            cantidad = cantidad +  1
        }
        
    }
    
    resultado.innerHTML='Cantidad: '+cantidad
    
    formulario.reset()  
})

/* 
infoSelect.addEventListener('change',(e)=>{
   
    
}) */

