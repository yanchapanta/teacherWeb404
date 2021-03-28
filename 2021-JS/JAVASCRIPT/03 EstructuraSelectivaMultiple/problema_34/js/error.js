console.log('hola')
const array=[]
let aleatorio;


for (let i =0;i<4; i++) {
    array[i]=new Array(5)
    
    for (let j = 0; j < 5; j++) {
       aleatorio=Math.floor(Math.random()*20+1)
       array[i][j]=aleatorio;
       
   }
    
}

console.log(array)