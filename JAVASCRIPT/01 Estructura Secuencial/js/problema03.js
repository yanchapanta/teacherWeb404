'use strict'
const c=console.log;


const container=document.querySelector(".container");
const divHTML=`
<input type="text" id="num1" placeholder="Ingrese valor de venta" >
= <input class="boton" type="submit" value="Calcular">
    <span class="resultado" ></span>
`;
container.innerHTML=divHTML;

//proceso

const boton=document.querySelector(".boton");
const resultado=document.querySelector(".resultado");
boton.addEventListener("click",()=>{

    let valorVenta=parseInt(document.getElementById("num1").value);
    if (isNaN(valorVenta)!=true && valorVenta>0 && valorVenta!="") {
        const iva=valorVenta*0.12;
        const precioVenta=valorVenta+iva;
    
        resultado.innerHTML=`
        <br>
        Valor iva 0.12%:${iva}<br>
        Precio de venta:${precioVenta}
        `;
        resultado.classList.add("rojo")
    }else{
        resultado.innerHTML=`Ingresar solo valores positivos`;

    }
})


