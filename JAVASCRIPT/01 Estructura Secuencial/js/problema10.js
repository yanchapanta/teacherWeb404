"use strict"

const container = document.querySelector(".container");

const codeDiv=`
<div>            
<input type="text" id="num1" placeholder="Ingrese número en segundos" >
</div>

<div>
<input class="btn" type="submit" value="Enviar">
<span class="resultado" ></span>
</div>
`;

container.innerHTML = codeDiv;

const boton=document.querySelector(".btn");
boton.addEventListener("click",(e)=>{

    const num1 = parseInt(document.getElementById("num1").value);//600000
    const resultado = document.querySelector(".resultado");
    class Hora{
        constructor(valor){
            this.valor= valor;
        }
        hora(){
            return (this.valor)/(60*60)
        }
        minutos(){
            return (this.valor)/60;
        }
    }
    const newHora= new Hora(num1);    
    
    resultado.innerHTML=`
    Hora: ${newHora.hora()}<br>
    Minuto: ${newHora.minutos()}<br>
    Segundo: ${num1}<br>
    `;


    
});