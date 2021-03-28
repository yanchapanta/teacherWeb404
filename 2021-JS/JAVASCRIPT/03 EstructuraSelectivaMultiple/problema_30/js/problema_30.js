const c=console.log;
import { codigoHTML } from './index.js'
const container=document.querySelector('.container');
container.innerHTML=codigoHTML;
const downloadDatos=()=> new Promise((resolve,reject)=>
{
    const peticion=new XMLHttpRequest();
    const url='ddbb/informacion.text'
    peticion.open('GET',url,true);//true .- para que sea asincrono
    peticion.onerror=(error)=>reject(error);//opcional
    peticion.send();
    
    /* 
    //Opcion uno
    peticion.addEventListener("load",()=>{
        let respuesta; 
        if (peticion.status == 200) respuesta=peticion.response
        else respuesta="Lo siento, no se ha encontrado el recurso";
        c(respuesta);
    });
    */

    //opcion dos

    peticion.onload=()=>{
       
        if (peticion.status === 200) {
           
            resolve(JSON.parse(peticion.response))
        }else {
            reject(Error(peticion.status))
        };
        // console.log(peticion)
    
    }
    
});

downloadDatos()
.then(registro=>imprimirHTML(registro),
error=>console.error(
   new Error('Hubo un error'+error) 
)

)
function imprimirHTML(params) {
    console.log(params)
    let result;
    
    console.log(params[0]['mes'])
    for (const ele in params) {
        
        if (params[ele]['mes']==="01" || params[ele]['mes']=="02" || params[ele]['mes']=="03") {
            result='Verano';
            console.log(result)
            container.innerHTML+=`mes: ${result} <br>`;
        }else  if (params[ele]['mes']=="04" || params[ele]['mes']=="05" || params[ele]['mes']=="06") {
            result='Otonio';
            console.log(result)
            container.innerHTML+=`mes: ${result} <br>`;
        }else  if (params[ele]['mes']=="07" || params[ele]['mes']=="08" || params[ele]['mes']=="09") {
            result='Invierno';
            console.log(result)
            container.innerHTML+=`mes: ${result} <br>`;
        }else  if (params[ele]['mes']==="10" || params[ele]['mes']=="11" || params[ele]['mes']=="12") {
            result='Primavera';
            console.log(result)
            container.innerHTML+=`mes: ${result} <br>`;
        }
       
        // console.log(params[ele]['mes'])
    }
}



