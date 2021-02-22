import {fPagar} from './fPagar.js';
const showhData=async ()=>{
    try {
        const url='base/data.text';
        const encapsule=await fetch(url);
        const data=await encapsule.json();
        
        fPagar(data);  
        
    } catch (error) {
        console.log(error);
    }

}





export default showhData;