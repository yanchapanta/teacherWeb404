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
const users = [
	{ id: 1, name: 'Dorian' },
	{ id: 2, name: 'Laura' },
	{ id: 3, name: 'Carlos' },
];
const emails = [
	{ id: 1, email: 'dorian@gmail.com' },
	{ id: 2, email: 'laura@gmail.com' },
];
//PROCESO
/* const getUser=(id,cb)=>{
   const user = users.find(user=>user.id == id)
   if (!user) cb('User not exist')
   else cb(null,user)
   
} */

const getUser = (id) => {
	const user = users.find((user) => user.id == id);
	const promise = new Promise((res, rej) => {
		if (!user) rej('Does"t User exist ' + id);
		else res(user);
	});
	return promise;
};
const getEmail = (user) => {
      const email = emails.find((mail) => mail.id == user.id);

    return new Promise((res,rej)=>{
        if (!email) rej(`${user.name} has't email `);
        else res({
            id:user.id,
            name:user.name,
            email:email.email
        });
    })
};
// la diferencia con el callback es que 
//solo utiliza un catch para todos los errores



/* 
getUser(3)
.then(user=>getEmail(user))
.then(user=>getEmail(user))
.then(user=>getEmail(user))
.then(user=>getEmail(user))
.then(resImail=>console.log(resImail))
.then(resImail=>console.log(resImail))
.then(resImail=>console.log(resImail))
.catch(error=>console.log(error)) */
//CODIGO REDUMIDO esto solo funciona para un parametro    
getUser(3)
.then(getEmail)
.then(console.log)
.catch(console.log)







/* if (error) return console.log(error);
console.log(user.name)
console.log(user)
getEmail(user.id,(error,email)=>{
    if(error) return console.log(error);
    console.log(email)
}); */
