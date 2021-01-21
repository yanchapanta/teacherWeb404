"use strict"

const container = document.querySelector(".container");

const codeDiv=`
<div>            
<input type="text" id="num1" placeholder="Número uno" >
<input type="text" id="num2" placeholder="Número dos" >
</div>

<div>
<input class="btn" type="submit" value="Enviar">
<span class="resultado" ></span>
</div>
`;

container.innerHTML = codeDiv;

const boton=document.querySelector(".btn");
boton.addEventListener("click",(e)=>{

    const num1 = parseInt(document.getElementById("num1").value);
    const num2 = parseInt(document.getElementById("num2").value);
    const resultado = document.querySelector(".resultado");

    const solution=(num1,num2)=>{
        if(num1<0 || num2<0 || isNaN(num1) || isNaN(num2)){
            return `Solo números enteros`;
        }else{
            if (num1>num2) {
                return `Número mayor: ${num1}`;                
            }else if(num1<num2){
                return `Número mayor: ${num2}`; //conbierte a positivos               

            }
        }
    }
    
    resultado.innerHTML=`
     ${solution(num1,num2)}
    
    `;


    
});