'use strict'
const factura=[
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
        name:'Lucas'
    },
    {
        id:4,
        name:'Juan'
    }
]
const emails=[
    {
        id:1,
        email:'domenica@gmail.com'
    },
    {
        id:2,
        email:'pepe@gmail.com'
    },
    {
        id:3,
        email:'lucas@gmail.com'
    },
    {
        id:4,
        email:'juan@gmail.com'
    }
]
const productos=[
    {
        id:1,
        product:['Naranjas','fresa']
    },
    {
        id:2,
        product:['queso','jamon','aceite']
    },
    {
        id:3,
        product:['Pastel','fideo','aceite']
    }
]
const infoFactura=(idFact,callbackInterno)=>{
    const fact=factura.find(fact=>fact.id==idFact);
    if(!fact) callbackInterno("No existe la factura")
    else callbackInterno(null,fact);
}
// const interno=(error,facturaDelCallback)=>{
//     if(error) return console.log(error)
//     console.log(facturaDelCallback);
// }
// console.log(interno);
const idGlobal=4;
const infEmail=(idEmail,cb)=>{
    const email=emails.find(email=>email.id==idEmail)
    if(!email) cb("El email no existe")
    else cb(null,email)
    // console.log(email)
}
const infProduto=(idProducto,cb)=>{
    const producto=productos.find(producto=>producto.id==idProducto)
    if(!producto) cb("El producto no existe")
    else cb(null,producto)
    // console.log(email)
}
infoFactura(idGlobal,(error,facturaDelCallback)=>{
    if(error) return console.log(error)
    console.log(facturaDelCallback);
    infEmail(idGlobal,(err,email)=>{
        if(err) return console.log(err)
        console.log(email);
        infProduto(idGlobal,(err,producto)=>{
            if(err) return console.log(err)
            console.log(producto.product[0]);
            // infBoleta(idGlobal,(err,producto)=>{
            //     if(err) return console.log(err)
            //     console.log(producto.product[0]);
            //     infBoleta2(idGlobal,(err,producto)=>{
            //         if(err) return console.log(err)
            //         console.log(producto.product[0]);
            //     })
            // })
        })
    })
})


const boton=document.getElementById('titulo')

boton.addEventListener('click',(e)=>{


})
