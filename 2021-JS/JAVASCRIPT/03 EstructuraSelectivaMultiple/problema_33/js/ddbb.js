const downloadDDBB=()=>new Promise((res,rej)=>{
    const xml=new XMLHttpRequest();
    const url='base/info.text';
    xml.open('GET',url,true);
    xml.onerror=(error)=>rej(error);
    xml.send();
    xml.onload=()=>{
        if (xml.status===200) {
            res(JSON.parse(xml.response));
        }else{
            rej(Error(xml.status))
        }
    }
})


export default downloadDDBB;