//calback no se usa, no es asincrono, se procesa en orden
//cb=callback


/* 
const getUser=(id,cb)=>{
    //esto es igual id     |  id:id
    const user={
        name:'Dorian',
        id
    }
    if (id==2) cb('User not exist!')
    else cb(null,user.name)
}

getUser(2,(error,user)=>{
    if (error) return console.log(error)
    console.log('Es usuario es '+user);
})
 */


//DDBB
 const users=[
     {id:1,name:'Dorian'},
     {id:2,name:'Laura'},
     {id:3,name:'Carlos'}
 ]
 const emails=[
     {id:1,email:'dorian@gmail.com'}, 
     {id:2,email:'laura@gmail.com'}, 
 ]
 //PROCESO
const getUser=(id,cb)=>{
    const user = users.find(user=>user.id == id)
    if (!user) cb('User not exist')
    else cb(null,user)
    
}
const getEmail=(id,cb)=>{
    // console.log(data)
    const email=emails.find(user=>user.id==id);
    if (!email) cb('Email not exist')
    else cb(null,email.email)

}
getUser(0,(error,user)=>{
    if (error) return console.log(error);
    console.log(user.name)
    console.log(user)
    getEmail(user.id,(error,email)=>{
        if(error) return console.log(error);
        console.log(email)
    });

})