import showInfo from './dataBase.js';
import {calEstacion} from './function.js';




showInfo()
.then(res=>calEstacion(res),
error=>console.error(new Error('se establecio'+error))
)


