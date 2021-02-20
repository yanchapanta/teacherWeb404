'use strict'
const c=console.log;


const container=document.querySelector(".container");
const divHTML=`
<input type="text" id="num1" placeholder="Ingrese base" value="12345"><br><br>
<input class="boton" type="submit" value="Resolver">
<span class="resultado" ></span>
`;
container.innerHTML=divHTML;

//proceso

const boton=document.querySelector(".boton");
const resultado=document.querySelector(".resultado");

boton.addEventListener("click",()=>{

    let numero=parseInt(document.getElementById("num1").value);//12345 
    
    if (isNaN(numero)!=true && numero>0 && numero!="") {
        let resto=numero%10,
            cociente=numero/10,
            numeroInverso=resto*10;           
            
        cociente=Math.floor(cociente);
        resto=cociente%10;
        cociente=cociente/10;
        numeroInverso=(numeroInverso +resto)*10;


        cociente=Math.floor(cociente);
        resto=cociente%10;
        cociente=cociente/10;
        numeroInverso=(numeroInverso +resto)*10;

        cociente=Math.floor(cociente);
        resto=cociente%10;
        cociente=cociente/10;
        numeroInverso=(numeroInverso +resto)*10;
        
        cociente=Math.floor(cociente);
        resto=cociente%10;
        cociente=cociente/10;
        numeroInverso=numeroInverso +resto;   
        
        resultado.innerHTML=`
        <br><br>
        resto:${resto} <br>
        Número ingresado:${numero}<br>
        cociente:${cociente} <br>
        numeroInverso:${numeroInverso} <br>
         
        Número inverso:${numeroInverso}<br>

        `;
        resultado.classList.add("rojo")
    }else{
        resultado.innerHTML=`Ingresar solo valores positivos`;
        
    }
   
    
})


