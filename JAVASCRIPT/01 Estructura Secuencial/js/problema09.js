'use strict'

const container = document.querySelector(".container");

const codeDiv=`
<input type="text" id="num1" placeholder="Ingrese Radio" >
<input class="btn" type="submit" value="Calcular"> <br>
<span class="resultado" ></span>
`;


container.innerHTML = codeDiv;

const boton=document.querySelector(".btn");
boton.addEventListener("click",(e)=>{

    const num1 = parseInt(document.getElementById("num1").value);
    const resultado = document.querySelector(".resultado");
    const area=Math.PI*(num1**2);
    // console.log(area);
    resultado.innerHTML=`El area es:${area}`;


    
});