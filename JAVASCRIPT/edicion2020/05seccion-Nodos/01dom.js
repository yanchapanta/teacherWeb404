
const caja=document.querySelector('.caja');

caja.addEventListener('mousedown',(e)=>{
caja.classList.replace('red','green')
    console.log('soy mousedown')
})
caja.addEventListener('mouseup',(e)=>{
    caja.classList.replace('green','red')
    console.log('soy mouseup')
})
