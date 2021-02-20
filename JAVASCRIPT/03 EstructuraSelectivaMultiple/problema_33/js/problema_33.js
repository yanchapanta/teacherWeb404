import data from './ddbb.js';
import {calFacultad} from './function.js';
const puntaje=document.querySelector('.puntaje');

data()
.then(
    (registro=>calFacultad(registro)),
    (error=>console.error(error))
);

