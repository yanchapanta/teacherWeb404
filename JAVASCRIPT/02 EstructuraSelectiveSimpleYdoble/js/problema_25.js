"use strict"
const c=console.log
const container = document.querySelector(".container");

const codeHeader=`
<h2>
    25.- Dada la hora, minuto y segundo, encuentre la hora del
    siguiente segundo.
</h2>
`;
const codeDiv=`
<form id='formulario'>
    <div>            
        <input type="text" id="valor0" placeholder="ID" >
        <input type="text" id="valor1" placeholder="Hora" >
        <input type="text" id="valor2" placeholder="Minuto" >
        <input type="text" id="valor3" placeholder="Segundo" >
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
    const hora=parseInt(document.getElementById('valor1').value)
    const minuto=parseInt(document.getElementById('valor2').value)
    const segundo=parseInt(document.getElementById('valor3').value)
    const tiempo=[hora,minuto,segundo]

    let [inverso]=[...tiempo].reverse()
    console.log(inverso)
    console.log(tiempo)
    segundo = segundo + 1
    if (segundo==60) {
        segundo=0
        minuto += 1
        if (minuto=60) {
            minuto=0
            hora=hora+1
            if (hora=60) {
                hora=0
            }
        }
    }

    
       
   

    
})


infoSelect.addEventListener('change',(e)=>{
   
    
})




