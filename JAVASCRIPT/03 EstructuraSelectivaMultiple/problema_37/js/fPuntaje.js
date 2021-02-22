const resultado=document.getElementById('resultado');
export const fPuntaje=function (datas){
    console.log(datas[0]['data1']);
    const frangemet=document.createDocumentFragment();
    for (const ele in datas) {
       let dato1=datas[ele].data1;
       let dato2=datas[ele].data2;
       let dato3=datas[ele].data3;
       const span=document.createElement('SPAN');
       let result= calcular(dato1,dato2,dato3);
       span.innerHTML+=`${result} <br>`;
       frangemet.appendChild(span);
    }
    resultado.appendChild(frangemet);
}

function calcular(d1,d2,d3) {
 
    let p='';
    if (d1==6 && d2==6 && d3==6) p='ORO'
    else if((d1==6 && d2==6) || (d1==6 && d3==6) || (d2==6 && d3==6)) p='PLATA'
    else if(d1==6 || d2==6 || d3==6) p='BRONCE'
    else p='PERDIDO';
    return  p;
}