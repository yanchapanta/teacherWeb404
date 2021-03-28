"use strict"
const c=console.log
const container = document.querySelector(".container");

const codeHeader=`
<h1>21.- Al ingresar el valor de una temperatura, obtener 
el tipo de clima sigun la siguiente tabla

    </h1>
`;
const codeDiv=`
<div>            
<input type="text" id="valor1" placeholder="Ingresa temperatura" >
</div>

<div>
<input class="btn" type="submit" value="Calcular temperatura">
<span class="resultado" ></span>
</div>
`;

container.innerHTML = codeHeader;
container.innerHTML += codeDiv;

const boton=document.querySelector(".btn")
boton.addEventListener('click',(e)=>{
    const resultado=document.querySelector(".resultado")
    const temperatura=parseInt(document.getElementById("valor1").value)
    // const arrayClima=['FRIO','NUBLADO','CALOR','PROPICAL']
    const objetoClima={
        clima1:'FRIO',
        clima2:'NUBLADO',
        clima3:'CALOR',
        clima4:'TROPICAL'
    }
    const {clima1,clima2,clima3,clima4}=objetoClima
    let clima;
    if (temperatura<10) clima=clima1
    else{
        if (temperatura>= 11 && temperatura<=20) clima=clima2
        else{
            if (temperatura>=21 && temperatura<=20) clima= clima3
            else clima=clima4
        }
    }
    c(Object.keys(objetoClima))

 


    resultado.innerHTML=`Clima:${clima}`


})
