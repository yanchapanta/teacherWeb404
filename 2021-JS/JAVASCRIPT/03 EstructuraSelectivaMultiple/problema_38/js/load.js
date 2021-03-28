'use strict'
const c=console.log;
const load=()=>{
    
    try {
        const newPost={
            day:20,
            mes:7,
            year:2020
        }
        // fetch('https://jsonplaceholder.typicode.com/users',{
        //     method:"POST",
        //     body:JSON.stringify(newPost),
        //     headers:{"Content-type":"application/json"}
        // })
        // .then(res=>res.json())
        // .then(res=>c(res))

        axios({url:'https://jsonplaceholder.typicode.com/users',method:'POST',data:newPost})
        .then(res=>{
            const dia=(res.data.day)
            const mes=(res.data.mes)
            const year=(res.data.year)
            calcullar(dia,mes,year)
        })
        
    } catch (error) {
        c(error)
    }

}
function calcullar(d,m,a) {
    let dmax=0,r;
    switch (m) {
        case 1:
        case 3:
        case 5:
        case 7:
        case 8:
        case 10:
        case 10:
        case 12:
            dmax=31;
            break;
           
        case 4:
        case 6:
        case 9:
        case 11:
            dmax=30;
            break;
        case 2:
            if (a%4==0 && (!(a%100==0)|| a %400==0)) {
                dmax=29;                
            }else{
                dmax=28;                
            }
           
            break;
    
        default:
            break;
    }
    
    if ((d>0 && d<=dmax) && (m>0 && m<13) && a>0) {
        r="CORRECTO";
    }else{
        r="INCORRECTO";
    }
    return c(r);
}
export default load;