'use strict'
const c=console.log;


const container=document.querySelector(".container");
const divHTML=`
<input type="text" id="num1" placeholder="Ingrese base" ><br><br>
<input type="text" id="num2" placeholder="Ingrese raiz" ><br><br>
<input class="boton" type="submit" value="Resolver">
    <span class="resultado" ></span>
`;
container.innerHTML=divHTML;

//proceso

const boton=document.querySelector(".boton");
const resultado=document.querySelector(".resultado");

boton.addEventListener("click",()=>{

    let base=parseInt(document.getElementById("num1").value);
    let exponente=parseInt(document.getElementById("num2").value);
    
    
    if (isNaN(base)!=true && isNaN(exponente)!=true && base>0 && base!="" && exponente>0 && exponente!="") {
        // const radicacion=Math.sqrt(base,(1/exponente));
        const radicacion=base**(1/exponente);
        
        resultado.innerHTML=`
        <br><br>
        La raiz<b class="raiz">${exponente}</b> de ${base} es: ${radicacion}
        `;
        resultado.classList.add("rojo")
    }else{
        resultado.innerHTML=`Ingresar solo valores positivos`;
        
    }
    let raiz=document.querySelector(".raiz");
          raiz.style.cssText=`color:white; vertical-align:super; `
})


