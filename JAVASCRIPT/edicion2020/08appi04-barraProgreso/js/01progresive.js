const c=console.log;
const fileInput=document.getElementById('file');
const htmlSpan=document.getElementById('progress');
// CARGAR UN ARCHIVO
fileInput.addEventListener('change',(e)=>{
    const file = e.target.files[0]
    const FR=new FileReader()
    FR.readAsDataURL(file)
    // e.loaded show porcentaje carga archivo
    // e.total  show total carga archivo
    FR.addEventListener('progress',(e)=>{
        htmlSpan.style.width = 
        Number.parseInt(e.loaded * 100 / e.total)+'%';               
        
    })
    FR.addEventListener('loadend',()=>{
        htmlSpan.style.width='100%';
    })
})
const fileMultiple=document.getElementById('fileMultiple');
const htmlSpanMultiple=document.getElementById('progressMultiple');
const root=document.documentElement;

fileMultiple.addEventListener('change',(e)=>{
    const file=e.target.files[0] 
    const FR=new FileReader()
    FR.readAsDataURL(file)

    FR.addEventListener('progress',(e)=>{
        root.style.setProperty('--ancho',Number.parseInt(e.loaded * 100 / e.total)+'%')
        
    })
    FR.addEventListener('loadend',(e)=>{
        root.style.setProperty('--ancho','100%')
    })
})