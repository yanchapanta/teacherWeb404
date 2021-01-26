const c=console.log

/* 

*/
const text=document.getElementById("text").textContent
const regEx=/lorem/g
const regEx2=new regEx("lorem","gi");
const regExp3=new regEx("/lorem/","gi")

c(regEx.text(text))
c(text.includes("lorem"))

