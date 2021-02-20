"use strict"
const c=console.log
const container = document.querySelector(".container");

const codeHeader=`
<h1>17.- Dado un número, devolver el dobloe si el número no es par;
    caso contrario, el triple
    </h1>
`;
const codeDiv=`
<div>            
<input type="text" id="numero1" placeholder="Ingrese un número" >
</div>

<div>
<input class="btn" type="submit" value="Calcular">
<span class="resultado" ></span>
</div>
`;
container.innerHTML = codeHeader;
container.innerHTML += codeDiv;


const boton=document.querySelector(".btn");
boton.addEventListener("click",(e)=>{
    e.defaultPrevented;
    const num1=parseInt(document.getElementById("numero1").value)
    const resultado=document.querySelector(".resultado")

    function Task(numero) {
        this.numero=numero
    }
    Task.prototype.showNumero=function () {
        let resultado;
        let valor=this.numero
        if (valor%2==0) {
            resultado=`Es par por lo tanto es ${valor*3}`
        }else{
            resultado=`No es par por lo tanto es ${valor*2}`
        }
        return resultado
    }
    const ingresarNumero=new Task(num1)
    
    

   
    



    
    resultado.innerHTML=ingresarNumero.showNumero()
});
