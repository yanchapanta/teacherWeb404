'use strict'
const divHTML=`
<input type="text" id="num1" placeholder="Ingresar Capital" value="500"><br><br>
<input type="text" id="num2" placeholder="Ingresar Tasa Interes" value="12"><br><br>
<input type="text" id="num3" placeholder="Ingresar Tiempo" value="12"><br><br>
<input class="boton" type="submit" value="Resolver">
<span class="resultado" ></span>
`;
const container=document.querySelector(".container");
container.innerHTML=divHTML;

let boton=document.querySelector(".boton");
let resultado=document.querySelector(".resultado");

boton.addEventListener("click",()=>{
    let  capital= document.getElementById("num1").value;
    let  tasaInteres=document.getElementById("num2").value;
    let  tiempo=document.getElementById("num3").value;
    let interes,
        monto;
    capital=parseFloat(capital);
    tasaInteres=parseFloat(tasaInteres);
    tiempo=parseFloat(tiempo);
    console.log(capital)
    console.log(interes)
    console.log(tiempo)
        
    monto=(1+(tasaInteres/100)**tiempo)*capital;
    interes=monto - capital;
    resultado.innerHTML=`
    Interes: ${interes}<br>
    Monto: ${monto}
    `;    
    
})
