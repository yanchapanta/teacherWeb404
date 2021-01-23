"use strict"

const container = document.querySelector(".container");

const codeHeader=`
<h1>13.- Determinar si un número entero es par o impar</h1>
`;
const codeDiv=`
<div>            
<input type="text" id="numero" placeholder="Ingrese un número" >
</div>

<div>
<input class="btn" type="submit" value="Enviar">
<span class="resultado" ></span>
</div>
`;
container.innerHTML = codeHeader;
container.innerHTML += codeDiv;

const boton=document.querySelector(".btn");
boton.addEventListener("click",(e)=>{
    e.defaultPrevented;
    let numero = document.getElementById("numero").value;
    const resultado = document.querySelector(".resultado");
    // const deff=(numero%2==0)?`${numero} es par`:`${numero} es impar`;
    const determination={
        calcular:function calcular(params) {
            return (numero%2==0)?`${numero} es par`:`${numero} es impar`;
            
        }
    }
  
    
    resultado.innerHTML=determination.calcular();


    
});