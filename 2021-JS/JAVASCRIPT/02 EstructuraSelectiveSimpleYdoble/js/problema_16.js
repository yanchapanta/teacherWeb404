"use strict"
const c=console.log
const container = document.querySelector(".container");

const codeHeader=`
<h1>16.- Dado tres números devolver el número mayor</h1>
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

    function Tarea(valor1,valor2,valor3) {
        this.valor1=valor1,
        this.valor2=valor2,
        this.valor3=valor3
    }
    
    Tarea.prototype.showInfoTask=function(){
        let valor1=this.valor1
        let valor2=this.valor2
        let valor3=this.valor3
        let mayor;
        if (valor1>valor2) {//10,20,21
            if (valor1>valor3) {
                mayor=valor1                
            }else{
                mayor=valor3                

            }
        }else{
            if(valor2>valor3){//
                mayor=valor2        
               
            }else{
                    mayor=valor3 
                }

        }


        return `El número mayor es: <b>${mayor}</b>`
    }
    
    const calculo1=new Tarea(num1,num2,num3)
    c(calculo1.showInfoTask())

   
    



    
    resultado.innerHTML=calculo1.showInfoTask()


    
});
