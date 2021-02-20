const c=console.log;
const fileInput=document.getElementById('file');
const img=document.getElementById('img');
const text=document.getElementById('text');
// EJERCICO CARGAR TEXTO
fileInput.addEventListener('change',(e)=>{
    // e.target.files
    const file=e.target.files[0];
    //metodos y propiedades de file Reader
    const fileReader = new FileReader();
    fileReader.readAsText(file);
    //se ejecuta cuando se termine cargar los archivos
    fileReader.addEventListener('load',(e)=>{
        text.textContent=e.target.result;
    })

})
// EJERCICIO CARGAR IMAGEN
const inputImg=document.getElementById('inputImg');
const resultImagen=document.getElementById('resultImagen');
console.log(inputImg);
inputImg.addEventListener('change',(e)=>{
    const file=e.target.files[0];
    console.log(file)
    const fileReader=new FileReader();
    fileReader.readAsDataURL(file);
    console.log(e.target.files[0])
    fileReader.addEventListener('load',(e)=>{
        resultImagen.setAttribute('src',e.target.result)
    })
})

const fileInputMultiple=document.getElementById('fileInputMultiple');
const imagenes=document.querySelector('.imagenes')
fileInputMultiple.addEventListener('change',(e)=>{
    const files=e.target.files;
    const frangement=document.createDocumentFragment();
    for (const file of files) {
        const fileReader=new FileReader();
        const img=document.createElement('IMG');
        fileReader.readAsDataURL(file);
        fileReader.addEventListener('load',(e)=>{
            img.setAttribute('src',e.target.result);
        })
        frangement.appendChild(img);
    }
    imagenes.appendChild(frangement)
})


