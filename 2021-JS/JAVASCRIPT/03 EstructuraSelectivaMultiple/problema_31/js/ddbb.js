const downloadDatos=()=>new Promise((resolve,reject)=>{
    const xml=new XMLHttpRequest();
    const url='ddbb/notas.text';
    xml.open('GET',url,true);//asincrona
   
    xml.onerror=(error)=>reject(error)
    xml.send();
    xml.onload=()=>{
        
        if (xml.status===200) {
            resolve(JSON.parse(xml.response));
        }else{
            reject(Error(xml.status));
        }
    }
    
})
export default downloadDatos;