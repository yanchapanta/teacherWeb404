"use strict"
const c=console.log
const container = document.querySelector(".container");

const codeHeader=`
<h1>18.-  Dado tres números devolver los números en orden ascendente

    </h1>
`;
const codeDiv=`
<div>            
<input type="text" id="numero1" placeholder="Primer número" >
<input type="text" id="numero2" placeholder="Segundo número" >
<input type="text" id="numero3" placeholder="Tercer número" >
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
    const num2=parseInt(document.getElementById("numero2").value)
    const num3=parseInt(document.getElementById("numero3").value)
    const resultado=document.querySelector(".resultado")
    function Task(numero1,numero2,numero3) {
        this.numero1=numero1;
        this.numero2=numero2;
        this.numero3=numero3;
    }
    const calc1=new Task(num1,num2,num3)
    Task.prototype.mostrarResultado=function () {
        let numero1=this.numero1;
        let numero2=this.numero2;
        let numero3=this.numero3;
        let mayor,menor,inter;

        if (numero1>numero2 && numero1>numero3) {
            mayor= numero1
        }else{
            if(numero2>numero1 && numero2>numero3){
                mayor= numero2
            }else if(numero3>numero1 && numero3>numero2){
                mayor= numero3
            }

        }
        
        if (numero1<numero2 && numero1<numero3) {
            menor= numero1
        }else{
            if(numero2<numero1 && numero2<numero3){
                menor= numero2
            }else{
                menor=numero3
            }

        }
        inter=(numero3+numero2+numero1)-(mayor+menor)
        return `Mayor:${mayor}  <br>  Intermedio:${inter} <br> Menor:${menor}`
    }
    calc1.mostrarResultado()


    
    

   
    



    
    resultado.innerHTML=calc1.mostrarResultado()
});
