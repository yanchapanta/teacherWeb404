
const download=()=> new Promise((resolve,reject)=>{
    const xml=new XMLHttpRequest();
    const url='ddbb/datos.text';
    xml.open('GET',url,true);

    xml.onerror=(error)=>reject(error);
    xml.send();
    xml.onload=()=>{
        
        if (xml.status===200) {
            resolve(JSON.parse(xml.response));
        }else{
            reject(Error(xml.status));
        }
    }

})
export default download;