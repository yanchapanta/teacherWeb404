'use strict'
const c=console.log;


let container=document.querySelector(".container");


//CREACION  DE BOTONES
const inputHTML=`
<input type="text" id="num1" placeholder="Ingrese numero uno" value="10">
/
<input type="text" id="num2" placeholder="Ingrese numero dos" value="20">
=

`;
container.innerHTML=inputHTML;
const newInput=document.createElement("INPUT");
      newInput.classList.add('botonEnviar');
      newInput.setAttribute("type","submit");
      newInput.addEventListener('click',(e)=>{
        let num1=parseInt(document.getElementById("num1").value);
        let num2=parseInt(document.getElementById("num2").value); 
        let resultado=document.querySelector(".resultado");    
        const residuo=num1%num2;
        const cociente=num1/num2;
        // c("soldado");
        resultado.innerHTML=`
        <br>
        El cociente es:${cociente}<br>
        El residuo es:${residuo}
        `;
   
        
    },true);
container.appendChild(newInput)
const newDiv=document.createElement("SPAN");
      newDiv.classList.add("resultado");
container.appendChild(newDiv);



