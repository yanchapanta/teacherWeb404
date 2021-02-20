"use strict"
const c=console.log
const container = document.querySelector(".container");

const codeHeader=`
<h2>
    71.-Dado 5 numeros, obtener la suma.
</h2>
`;
const codeDiv=`
<form id='formulario'>
    <div>            
       
        <input type="text" id="valor1" placeholder="Ingrese numero uno" >
        <input type="text" id="valor2" placeholder="Ingrese numero dos" >
        <input type="text" id="valor3" placeholder="Ingrese numero tres" >
    </div>

    <div>
        <input type="submit" value="Calcular raiz">
        <span class="resultado" ></span>
    </div>
</form>



<select id="infoSelect">
    <option value="">Seleccionar</option>
</select>
<p id="infoValue"></p>
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
    

    const numeros=[
        {numbers:num1},
        {numbers:num2},
        {numbers:num3},
    ]

    const valorTotal=numeros.reduce((Total,dato)=>{
        return Total + dato.numbers
    },0)
    
    resultado.innerHTML=valorTotal
    
    formulario.reset()  
})


infoSelect.addEventListener('change',(e)=>{
   
    
})




