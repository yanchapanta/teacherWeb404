"use strict"
const c=console.log
const container = document.querySelector(".container");

const codeHeader=`
<h1>20.- Debido a los excelentes resultados, el  restaurante 
decide ampliar sus ofertas de acuerdo a la siguiente escala 
del consumo


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
    const resultado=document.querySelector(".resultado")
    const valor1=parseInt(document.getElementById("valor1").value)
    function Task(num1) {
        this.num1=num1
    }
    const vol=new Task(valor1)
    Task.prototype.showResultTask=function () {
        const cant=this.num1
        const des1=0.1,
              des2=0.2,
              des3=0.3,
              iva=0.12;
        let montoDescuento,
              impuesto,
              importe;
        const output={
            dato:{
                descuento1:des1,
                descuento2:des2,
                descuento3:des3,
                ivaInicial:iva
            },
            cantidad:cant
        }

        const {cantidad}=output
        const {descuento1,descuento2,descuento3,ivaInicial}=output.dato
        if (cantidad>200) montoDescuento=cantidad*descuento3
        else{
            if (cantidad>100) montoDescuento=cantidad*descuento2
            else montoDescuento=cantidad*descuento1
        }
        impuesto=(cantidad - montoDescuento)*ivaInicial
        importe=cantidad-montoDescuento+impuesto

        return [montoDescuento,impuesto,importe]

        
    }

    

    resultado.innerHTML=`
    Monto descuento:   ${vol.showResultTask()[0]}<br>
    Impuesto IVA:  ${vol.showResultTask()[1]}<br>
    Importe a pagar:   ${vol.showResultTask()[2]}<br>
    
    `;
})






