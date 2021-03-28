'use strict';
const container=document.querySelector('.container')
const codigoHTML=`
<h1>local storage</h1>
<form class="form" id="form">
	<div class="form__field">
		<label for="key">key</label>
		<input type="text" name="key" id="key">
	</div>
	<div class="form__field">
		<label for="value">value</label>
		<input type="text" name="value" id="value">
	</div>
	<input type="submit" value="Save">
</form>
<div id="info" class="info">
	<select name="keys" id="keys">
		<option value="default">Select key</option>
	</select>
	<p id="infoValue"></p>
</div> 

`;
container.innerHTML=codigoHTML;

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