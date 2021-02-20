// const liks=document.querySelector('a');

// let word='Hola mundo';
// console.log(Array.from(word)) 
// const letters=['b','c','d','z']
// const numbers=[2,1,300,3]

// console.log(letters.sort())
// console.log(numbers.sort())
// console.log(country.from(''))

// let word1='Hola mundo';
// console.log(Array.from(word1))
// let word2='Hola mundo';
// console.log(word2.split(''))

// const numero1=[90,1000,10,1,2,20,30,3];
// const numero1=[10,5,10,10];
// const numero2=numero1.reduce((a,b)=>a+b);//resta de izquierda a derecha
// console.log(numero1);
// console.log(numero2);

const users=[
    {name:'usuario 1',online:false},
    {name:'usuario 2',online:false},
    {name:'usuario 3',online:true},
    {name:'usuario 4',online:true},
    {name:'usuario 5',online:false},
    {name:'usuario 6',online:true},
    {name:'usuario 7',online:true},
    {name:'usuario 8',online:false},
    {name:'usuario 9',online:true},
]

const userOnline=users.reduce((count,res)=>{
    if(res.online==true) count++;
    return count;
},0)
console.log(`
    Hay ${userOnline} usuarios conectados!
`)

