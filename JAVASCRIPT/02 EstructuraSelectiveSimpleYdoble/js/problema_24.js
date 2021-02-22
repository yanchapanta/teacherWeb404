"use strict"
const c=console.log
const container = document.querySelector(".container");

const codeHeader=`
<h2>24.-Elabore un algoritmo que obtenga las raices reales
    de una ecuacion de segundo grado

    </h2>
`;
const codeDiv=`
<form id='formulario'>
    <div>            
        <input type="text" id="valor0" placeholder="ID" >
        <input type="text" id="valor1" placeholder="Coeficiente (a)" >
        <input type="text" id="valor2" placeholder="Coeficiente (a)" >
        <input type="text" id="valor3" placeholder="Termino independiente (c)" >
    </div>

    <div>
        <input type="submit" value="Calcular raiz">
        <span class="resultado" ></span>
    </div>
</form>



<select id="infoSelect">
    <option value="">Seleccionar</option>
</select>
<p id="infoValue"></p>
`;

container.innerHTML = codeHeader;
container.innerHTML += codeDiv;


const formulario=document.getElementById("formulario")
const infoSelect=document.getElementById('infoSelect')
formulario.addEventListener('submit',(e)=>{
    e.preventDefault()
    const codigo=parseInt(document.getElementById('valor0').value)
    const coefA=parseInt(document.getElementById('valor1').value)
    const coefB=parseInt(document.getElementById('valor2').value)
    const terminoC=parseInt(document.getElementById('valor3').value)
    let firstRaiz
        ,secondRaiz
        ,discriminante;
    const isPromise=new Promise((resolve,reject)=>{
        const evaluar1=coefA!==0
        const evaluar2=Math.sqrt(coefB)-4*coefA*terminoC!==0
        discriminante=(Math.sqrt(coefB)-4*coefA*terminoC)
        if (evaluar1 && evaluar2 && terminoC>=0) {
            let mas=Math.abs(-coefB + discriminante)//positivo para sacar cuadrado
            let menos=-coefB - discriminante
            let x1=Math.sqrt(menos) / (2*coefA)
            let x2=Math.sqrt(mas) / (2*coefA)
            resolve(`
            Resultado: 
                <b style='color:peru'>x1:</b> ${Math.round(x1*100)/100} 
                <b style='color:peru'>x2:</b> ${Math.round(x2*100)/100}
                
            `)
            // console.log(mas)
        }else{
            reject('variable a y discriminante debe ser mayor igual de cero')
        }
    });
    isPromise.then(res=>{
        c(res)
        localStorage.setItem(codigo,res)        
    }).catch(rechazo=>{
        c(rechazo)
        localStorage.setItem(codigo,rechazo)
    })
    
    infoSelect.innerHTML+=`<option>${codigo}</option>`
   

    
})
let newArray
infoSelect.addEventListener('change',(e)=>{
    let infoValue=document.getElementById('infoValue')
    let idSelect=infoSelect[infoSelect.selectedIndex].textContent
    infoValue.innerHTML=localStorage.getItem(idSelect)
    
})
for (let i = 0; i < infoSelect.selectedIndex; i++) {
     [newArray]=[...localStorage.getItem(idSelect)]
    
}

console.log(newArray)


