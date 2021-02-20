"use strict"

const container = document.querySelector(".container");

const codeHeader=`
<h2>03.- Dado un rango de números, obtener la cantidad de números pares que contiene</h2>
`;
const codeDiv=`
<div>            
<input type="text" id="valor1" placeholder="Ingrese número inicial" >
</div>
<div>            
<input type="text" id="valor2" placeholder="Ingrese número final" >
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
    
        let resultado = document.querySelector(".resultado");
        let valor1 = parseInt(document.getElementById("valor1").value);
        let valor2 = parseInt(document.getElementById("valor2").value);
        let cantidad=0;
        // console.log(valor2)
        for(let i=valor1;i<valor2;i++){
            if (i%2 == 0 ) {
                console.log(i);    
                cantidad++;
            }
            
        }
        resultado.innerHTML+=`
        Rango total: ${cantidad}
        `;
    
    
    


    
});