"use strict"
const c=console.log
const container = document.querySelector(".container");

const codeHeader=`
<h2>23.- Elabore un algoritmo que resuelva una ecuación de 
    primer grado

    </h2>
`;
const codeDiv=`
<form id='formulario'>
    <div>            
        <input type="text" id="valor0" placeholder="ID" >
        <input type="text" id="valor1" placeholder="Ingrese valor 'a'" >
        <input type="text" id="valor2" placeholder="Ingrese valor 'b'" >
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
const infoDDBB=document.getElementById('infoDDBB')
formulario.addEventListener('submit',(e)=>{
    e.preventDefault()
    const resultado=document.querySelector('.resultado')
    const codeid=parseInt(document.getElementById('valor0').value)
    const cocienteA=parseInt(document.getElementById('valor1').value)
    const termIndeB=parseInt(document.getElementById('valor2').value)
    let raiz;//x
    const complejo=new Promise((resolve,reject)=>{
        if (cocienteA != 0) {
            resolve(-termIndeB/cocienteA);

        }else{
            reject(0);
        }
    })
    
    complejo.then((res)=>{
        sessionStorage.setItem(codeid,res)
        resultado.innerHTML=res
    })
    .catch(rej=>{
        sessionStorage.setItem(codeid,rej)
        resultado.innerHTML=rej

    })
    const getDato=sessionStorage.getItem(infoDDBB[infoDDBB.selectedIndex].textContent)

    infoDDBB.innerHTML+=`<option>${codeid}</option>`
    formulario.reset()
})

infoDDBB.addEventListener('change',(e)=>{
   let getServer=sessionStorage.getItem(infoDDBB[infoDDBB.selectedIndex].textContent)
   const infoValue=document.querySelector('#infoValue');
   infoValue.innerHTML=getServer
})

