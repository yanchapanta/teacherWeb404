import baseDeDatos from './ddbb.js';//en default hay como cambiar el nombre
import {imprimirHTML} from './funciones.js';
import {codeHTML} from './index.js';
const container=document.querySelector('.container');
container.innerHTML=codeHTML;
baseDeDatos()
.then(registro=>imprimirHTML(registro),
    error=>console.error(new Error('ok estabien'+error))
);










