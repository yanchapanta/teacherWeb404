let hora=-10;
let saludar;
if(hora>=6 && hora<=11){
    saludar='Buenos dias';
}else if(hora>=12 && hora<=18){
    saludar='Buenas tardes';
}else if(hora>=19 && hora<=24){
    saludar='Buenas noches';
}else if(hora>=0 && hora<64){
    saludar='Durmiendo';
}else{    
    saludar='Opcion incorrecta!';
}

console.log(saludar);