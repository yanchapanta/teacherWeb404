

const list=document.getElementById('list');
const html='<li>hola des li</li>';

list.children[0].after(html);

const elemento=document.createElement('SPAN');
    elemento.textContent='soy elemento fuera de UL'

list.children[0].after(elemento);

const texto='texto creado';
list.children[4].after(texto);

