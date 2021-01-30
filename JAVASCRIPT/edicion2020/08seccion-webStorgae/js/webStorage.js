'use strict';
const form = document.getElementById('form');
const keys = document.getElementById('keys');

form.addEventListener('submit', (e) => {
	e.preventDefault();

	// const person = {
	// 	name: 'Marco',
	// 	email: 'marco@gmai.com',
	// };
	// window.sessionStorage
	// sessionStorage.setItem("person",JSON.stringify(person))
    // sessionStorage.setItem('name', 'doriam');
    sessionStorage.setItem(form.key.value,form.value.value)
    keys.innerHTML+= `<option>${form.key.value}</option>`
    form.reset()
});
keys.addEventListener('change',()=>{
    document.getElementById('infoValue').textContent=
    sessionStorage.getItem(keys[keys.selectedIndex].textContent)
})

sessionStorage.clear()
sessionStorage.removeItem('name')