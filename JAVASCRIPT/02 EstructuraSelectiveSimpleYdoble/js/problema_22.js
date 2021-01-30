"use strict"
const c=console.log
const container = document.querySelector(".container");

const codeHeader=`
<h2>22.- Un negocio tiene dos tipos de clientes

    </h2>
`;
const codeDiv=`
<form id='formulario'>
    <div>            
        <input type="text" id="valor0" placeholder="Codigo cliente" >
        <input type="text" id="valor1" placeholder="Monto de compra" >
        <input type="text" id="valor2" placeholder="Tipo de cliente" >
        <input type="text" id="valor3" placeholder="Forma de pago" >
    </div>

    <div>
        <input type="submit" value="Calcular temperatura">
        <span class="resultado" ></span>
    </div>
</form>



<select id="infoDDBB">
    <option value="">Seleccionar</option>
</select>
<p id="infoValue"></p>
`;

container.innerHTML = codeHeader;
container.innerHTML += codeDiv;


const formulario=document.getElementById("formulario")
let infoDDBB=document.getElementById('infoDDBB')
formulario.addEventListener('submit',(e)=>{
    e.preventDefault()
    let resultado=document.querySelector(".resultado")
    let codigoCliente=parseInt(document.getElementById("valor0").value)
    let montoCompra=parseInt(document.getElementById("valor1").value)
    let tipocliente=document.getElementById("valor2")
    let formaPago=document.getElementById("valor3")
    let montoDescuento,totalPagar,recargo;//m,tp
    const descuentoG=0.15,
          descuentoA=0.2,
          recargoG=0.10,
          recargoA=0.05;
    
    if (tipocliente.toUpperCase=="G") {
        if (formaPago.toUpperCase=='C') {
            montoDescuento=montoCompra-descuentoG
            totalPagar=montoCompra+montoDescuento
            recargo= 'DESCUENTO 15%'
        }else{
            montoDescuento=montoCompra-recargoG
            totalPagar=montoCompra-montoDescuento
            recargo= 'DESCUENTO 10%'
            
        }
        
    }else{
        if (formaPago.toUpperCase=='C') {
            montoDescuento=montoCompra*descuentoA
            totalPagar=montoCompra-montoDescuento
            recargo= 'DESCUENTO 15%'
        }else{
            montoDescuento=montoCompra*recargoA
            totalPagar=montoCompra+montoDescuento
            recargo= 'DESCUENTO 10%'
            
        }

    }
    const imprimir=`
    <b>Monto compra: </b>${montoCompra}
    <b>Total Pagar: </b>${totalPagar}
    <b>Recargo: </b>${recargo}<br>
    `
    resultado.innerHTML=imprimir
    
    sessionStorage.setItem(formulario.valor0.value,imprimir)
    
    
    infoDDBB.innerHTML += `<option>${codigoCliente}</option>`
    formulario.reset()//para vaciar los campos del formulario, pero debe ser del form y no del boton  
})

infoDDBB.addEventListener('change',(e)=>{
    let baseServidor=sessionStorage.getItem(infoDDBB[infoDDBB.selectedIndex].textContent)
    const infoValue=document.querySelector('#infoValue');
    infoValue.innerHTML+=baseServidor
    c(baseServidor)
})

