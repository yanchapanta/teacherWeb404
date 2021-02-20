'use strict';
const container=document.querySelector('.container')
const codigoHTML=`
<div id="pending-task" class="tasks" >
    <h2 class="title">Pending Tasks</h2>
    <div id="task-1" class="task" draggable="true">task 1</div>
    <div id="task-2" class="task" draggable="true">task 2</div>
    <div id="task-3" class="task" draggable="true">task 3</div>
    <div id="task-4" class="task" draggable="true">task 4</div>
    <div id="task-5" class="task" draggable="true">task 5</div>
</div>
<div id="finished-task" class="tasks">
    <h2 class="title">Finished Tasks</h2>
</div>

`;
container.innerHTML=codigoHTML;
const penddingTasks=document.getElementById('pending-task')
const finishTasks=document.getElementById('finished-task')
//dataTrasnfer
//setData
//getData
penddingTasks.addEventListener('dragstart',(e)=>{
    e.dataTransfer.setData('text/plain',e.target.id)
    // console.log(e.dataTransfer.getData('text'))
    // console.log(e.dataTransfer)

})
penddingTasks.addEventListener('drag',(e)=>{
    e.target.classList.add('active')
})
penddingTasks.addEventListener('dragend',(e)=>{
    e.target.classList.remove('active')
})
finishTasks.addEventListener('dragover',(e)=>{//Obligatorio.- es para que sepa que estamos en la zona
    e.preventDefault()
})
finishTasks.addEventListener('drop',(e)=>{
    e.preventDefault()
    // e.dataTransfer.getData('text')//tenemos el id del elemento que estamos arratrando
    const element=document.getElementById(e.dataTransfer.getData('text'))
    element.classList.remove('active')
    //me quita de tareas pendientes y me anade a tareas determinadas
    finishTasks.appendChild(penddingTasks.removeChild(element))

})