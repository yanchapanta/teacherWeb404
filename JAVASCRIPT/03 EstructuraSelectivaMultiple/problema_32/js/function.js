export const calEstacion=(estaciones)=>{
for (const estacion of estaciones) {
    let mes=estacion['mes'];
        mes=parseInt(mes);
    let dia=estacion['dia'];
        dia=parseInt(dia);
    // console.log(dia)
    // console.log(mes)
    let estation="";
    switch (mes) {
        case 1:
        case 2:
        case 3:
            estation="VERANO";
            if (mes==3 && dia >20) {
                estation="OTOÑO"
            }
            break;
        case 4:
        case 5:
        case 6:
            estation="OTOÑO";
            if (mes==6 && dia >21) {
                estation="INVIERNO"
            }
            break;
        case 7:
        case 8:
        case 9:
            estation="INVIERNO";
            if (mes==9 && dia >22) {
                estation="PRIMAVERA"
            }
            break;
        case 10:
        case 11:
        case 12:
            estation="INVIERNO";
            if (mes==12 && dia >20) {
                estation="VERANO";
            }
            break;
    
        default:
            estation='Valor incorrecto!';
            break;
    }
    const resultado=document.querySelector('.resultado');
    resultado.innerHTML+=`${estation} <br>`;
}
}
