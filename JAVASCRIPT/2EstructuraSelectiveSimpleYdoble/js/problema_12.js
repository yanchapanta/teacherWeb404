"use strict"

const container = document.querySelector(".container");

const codeHeader=`
<h1>Determinar si un número es positivo, negativo o neutro</h1>
`;
const codeDiv=`
<div>            
<input type="text" id="num1" placeholder="Ingrese un número" >
</div>

<div>
<input class="btn" type="submit" value="Determinar">
<span class="resultado" ></span>
</div>
`;
container.innerHTML = codeHeader;
container.innerHTML += codeDiv;

const boton=document.querySelector(".btn");
boton.addEventListener("click",(e)=>{
    e.defaultPrevented;
    const num1 = parseInt(document.getElementById("num1").value);
    const resultado = document.querySelector(".resultado");

    function valuation(numero){
        if (numero>0) {
            return `Positivo`;
        }else if (numero<0) {
            return `Negativo`;            
        }else{
            return `Neutro`;
        }
    }
    
    resultado.innerHTML=`
    El número ${num1} es ${valuation(num1)}
    
    `;


    
});