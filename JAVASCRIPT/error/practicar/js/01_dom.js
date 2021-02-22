/* 
const list=document.getElementById('list');
const li=document.createElement('LI');
const a=document.createElement('A');
    a.setAttribute('href','#')
    a.textContent='row 1.1'
li.appendChild(a);
console.log(li)


const li2=document.createElement('LI')
    li2.textContent='holam li2'
    list.insertAdjacentElement('afterbegin',li);
    list.insertBefore(li2,list.children[3])
    
const li3=document.createElement('LI')
    li3.textContent='holam li3'

list.children[8].before(li3) */

const list=document.getElementById('list');
const li=document.createElement('LI');
const a=document.createElement('A');
    a.setAttribute('href','#')
    a.textContent='row 1.1'
li.appendChild(a);
console.log(li)


const li2=document.createElement('LI')
    li2.textContent='holam li2'
    list.insertAdjacentElement('afterbegin',li);
    list.insertBefore(li2,list.children[3])
    
const li3=document.createElement('LI')
    li3.textContent='holam li3'

list.children[8].before(li3)








