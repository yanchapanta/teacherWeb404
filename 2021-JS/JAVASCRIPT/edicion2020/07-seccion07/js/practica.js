"use strict"
const c=console.log
const form = document.getElementById("form");
const usuario = document.getElementById("usuario");
const password = document.getElementById("password");
const male = document.getElementById("male");
const female = document.getElementById("female");
const subEnviar = document.getElementById("subEnviar");
const terms = document.getElementById("terms");

const validIsForm={
    usuario:false,
    password:false,
    male:false,
    female:false,
    terms:false
} 

usuario.addEventListener("change",(e)=>{ 
   if( e.target.value.trim().length>0) validIsForm.usuario=true;
})
password.addEventListener("change",(e)=>{ 
   if( e.target.value.trim().length>0) validIsForm.password=true;
})
female.addEventListener("change",(e)=>{ 
   if( e.target.value.trim().length>0) validIsForm.female=true;
})
male.addEventListener("change",(e)=>{ 
   if( e.target.value.trim().length>0) validIsForm.male=true;
})
terms.addEventListener("change",(e)=>{ 
   
    validIsForm.terms=e.target.checked
   if(e.target.checked){
       subEnviar.removeAttribute("disabled")
    }else{
       subEnviar.setAttribute("disabled",true)

   }
})



form.addEventListener("submit",(e)=>{
    e.preventDefault()
    validarFormulario()

})
const validarFormulario=()=>{
    const arrayObjeto=Object.values(validIsForm)
    const buscarFalse=arrayObjeto.findIndex((values)=>values==false)

    if (buscarFalse == -1) {
        return form.submit();
    }else alert("Formulario invalido")

    // const formValues=Object.values(formIsValid)
    // c(formValues)
    // const valid = formValues.findIndex(value => value == false)
    // if(valid == -1) form.submit()
    // else alert("Formulario invalido")
}