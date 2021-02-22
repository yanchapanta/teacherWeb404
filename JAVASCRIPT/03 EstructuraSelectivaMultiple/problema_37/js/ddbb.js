import {fPuntaje} from './fPuntaje.js';
const showhData=async function(newPost){
    try {
        const header={
            method:'POST',
            body:JSON.stringify(newPost),
            headers:{'Content-type':'application/json'}
        }
        const url='https://jsonplaceholder.typicode.com/posts';
        const encapsule=await fetch(url,header);
        const data=await encapsule.json();
 
        fPuntaje(data)
   
        
    } catch (error) {
        console.log(error);
    }

}





export default showhData;