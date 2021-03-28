const pendding=document.getElementById('pendding')
const finished=document.getElementById('finished')
const tarea1=document.getElementById('task-1')

pendding.addEventListener('dragstart',(e)=>{
    e.dataTransfer.setData('text/plain',e.target.id)
    console.log('prueba dragstart')
    
    
})
pendding.addEventListener('drag',(e)=>{
    // e.target es equivalente a llama id=task-2....
    e.target.classList.add('active')
    console.log('prueba drag')
})
pendding.addEventListener('dragend',(e)=>{
    // e.target es equivalente a llama id=task-2....
    e.target.classList.remove('active')
    console.log('prueba drag')
})

finished.addEventListener('dragover',(e)=>{
    e.preventDefault()
    console.log('drag dragover')

})
finished.addEventListener('drop',(e)=>{
    e.preventDefault()
    //id del elemento actual arrastrado
    let elemento=document.getElementById(e.dataTransfer.getData('text'))
    console.log(elemento)
    elemento.classList.remove('active')
    //quita tareas pendientes y agrega tarea determinadas
    finished.appendChild(pendding.removeChild(elemento))

    console.log('drag drop')

})




finished.addEventListener('dragstart',(e)=>{
    e.dataTransfer.setData('text/plain',e.target.id)
    console.log('prueba dragstart')
    
    
})
finished.addEventListener('drag',(e)=>{
    // e.target es equivalente a llama id=task-2....
    e.target.classList.add('active')
    console.log('prueba drag')
})
finished.addEventListener('dragend',(e)=>{
    // e.target es equivalente a llama id=task-2....
    e.target.classList.remove('active')
    console.log('prueba drag')
})

pendding.addEventListener('dragover',(e)=>{
    e.preventDefault()
    console.log('drag dragover')

})
pendding.addEventListener('drop',(e)=>{
    e.preventDefault()
    //id del elemento actual arrastrado
    let elemento=document.getElementById(e.dataTransfer.getData('text'))
    console.log(elemento)
    elemento.classList.remove('active')
    //quita tareas pendientes y agrega tarea determinadas
    pendding.appendChild(finished.removeChild(elemento))

    console.log('drag drop')

})