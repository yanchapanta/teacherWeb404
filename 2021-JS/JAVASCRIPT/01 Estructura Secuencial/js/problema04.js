'use strict'
const c=console.log;


const container=document.querySelector(".container");
const divHTML=`
<input type="text" id="num1" placeholder="Ingrese base" ><br><br>
<input type="text" id="num2" placeholder="Ingrese exponente" ><br><br>
<input class="boton" type="submit" value="Calcular">
    <span class="resultado" ></span>
`;
container.innerHTML=divHTML;

//proceso

const boton=document.querySelector(".boton");
const resultado=document.querySelector(".resultado");
boton.addEventListener("click",()=>{

    let num1=parseInt(document.getElementById("num1").value);
    let num2=parseInt(document.getElementById("num2").value);
    if (isNaN(num1)!=true && isNaN(num2)!=true && num1>0 && num1!="" && num2>0 && num2!="") {
        const potencia=num1**num2;
    
        resultado.innerHTML=`
        <br><br>
        La potencia calculada es: ${potencia}
        `;
        resultado.classList.add("rojo")
    }else{
        resultado.innerHTML=`Ingresar solo valores positivos`;
    }
})


