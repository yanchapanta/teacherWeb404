'use strict'
const users=[
    {
        id:1,
        name:'Domenica'
    },
    {
        id:2,
        name:'Pepe'
    },
    {
        id:3,
        name:'Juan'
    }
]
const emails=[
    {
        id:1,
        name:'domenica@gmail.com'
    },
    {
        id:2,
        name:'pepe@gmail.com'
    }
]
const getUserExterno=(userId,callback)=>{
    const usuario=users.find(user=>user.id==userId);
    if(!usuario) callback('No existe el usuario')
    else callback(null,usuario);

   
}
// const interno=(err,user)=>{
//     if(err) return console.log(err)
//     else console.log(user.name)
    
// }
// console.log(interno);
const getEmail=(emailId,callback)=>{
    const email=emails.find(email=>email.id==emailId);
    if(!email) callback('No existe email')
    else callback(null,email);

   
}

let idGlobal=3;
getUserExterno(idGlobal,(err,user)=>{
    if(err) return console.log(err)    
    console.log(user)
    getEmail(idGlobal,(err,email)=>{
        if(err) return console.log(err) 
        console.log(email);
        // getTelefono(idGlobal,(err,email)=>{
        //     if(err) return console.log(err) 
        //     console.log(email);
        //     getCedula(idGlobal,(err,email)=>{
        //         if(err) return console.log(err) 
        //         console.log(email);
                
        //     })
            
        // })
    })
    
});
const titulo=document.getElementById('title')