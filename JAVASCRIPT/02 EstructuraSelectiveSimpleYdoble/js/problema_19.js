"use strict"
const c=console.log
const container = document.querySelector(".container");

const codeHeader=`
<h1>19.-  Ejercicio sobre consumo

    </h1>
`;
const codeDiv=`
<div>            
<input type="text" id="valor1" placeholder="Ingrese consumo" >
</div>

<div>
<input class="btn" type="submit" value="Pagar   ">
<span class="resultado" ></span>
</div>
`;

container.innerHTML = codeHeader;
container.innerHTML += codeDiv;

const boton=document.querySelector(".btn")
boton.addEventListener("click",(e)=>{
    e.preventDefault()
    const cantidad=parseInt(document.getElementById("valor1").value)
    const resultado=document.querySelector(".resultado")

    const iva=0.12,
          des1=0.1,
          des2=0.2;
    let montoDescuento;

    //ingreso datos a objeto
    const dato={
        descuento1:des1,
        descuento2:des2
    }
    if (cantidad<=100) {
        //sacar datos de un objeto
        const {descuento2,descuento1}=dato
        montoDescuento=cantidad*descuento1   
    }else{
        //sacar datos de un objeto
        const {descuento2,descuento1}=dato
        montoDescuento=cantidad*descuento2        
    }
    const impuesto=(cantidad-montoDescuento)*iva
    const importePagar=cantidad+impuesto


    resultado.innerHTML=`
    Monto descuento: ${montoDescuento}<br>
    Impuesto IVA: ${impuesto.toFixed(2)}<br>
    Importe a pagar: ${importePagar}
    `;


})