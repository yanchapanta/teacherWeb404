"use strict"

const container = document.querySelector(".container");

const codeHeader=`
<h1>13.- Dado un caracter determinar si es una vocal</h1>
`;
const codeDiv=`
<div>            
<input type="text" id="valor1" placeholder="Ingrese un caracter" >
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
    const valor1 = document.getElementById("valor1").value;
    const resultado = document.querySelector(".resultado");

    const determinarChart=(valor1)=>{
        valor1=valor1.toLowerCase();
        return (valor1=="a" ||valor1=="e" || valor1=="i" ||valor1=="o" ||valor1=="u")?`SI`:`NO`;
    }
    
    resultado.innerHTML=`
    El caracter "${valor1}" ingresado ${determinarChart(valor1)} una vocal
    
    `;


    
});