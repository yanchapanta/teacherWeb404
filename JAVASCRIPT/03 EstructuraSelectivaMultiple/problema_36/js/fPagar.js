const resultado=document.getElementById('resultado');
export const fPagar=function (datas){
    for (const data of datas) {
        let calidad=parseInt(data.calidad);
        let producto=parseInt(data.producto);        
       let result=calcular(calidad,producto);

       let id=datas.indexOf(data) 


        console.log(id);
        resultado.innerHTML+='<br>'+`
         Resultado usuario ${id + 1} es: ${result}
         
         `;
    }
}

function calcular(c,p) {
    console.log(c)
    let precio=0;
 
    switch (c) {
        case 1:
            switch (p) {
                case 1:
                    precio=5000;
                    break;
                case 2:
                    precio=4500;                    
                    break;
                case 3:
                    precio=4000;                    
                    break;             
            }
            
            break;
        case 2:
            switch (p) {
                case 1:
                    precio=4500;
                    break;
                case 2:
                    precio=4000;                    
                    break;
                case 3: 
                    precio=3500;                    
                    break;             
            }
            
            break;
        case 3:
            switch (p) {
                case 1:
                    precio=4000;
                    break;
                case 2:
                    precio=3500;                    
                    break;
                case 3: 
                    precio=3000;                    
                    break;             
            }
            
            break;
    
        default:
            precio='Valores incorrectos'
            break;
    }
    return  precio;
}