

export const searchNumero=(valor)=>{
    let clima
    switch (valor) {
        case 1:clima='uno'
            
            break;
        case 2:clima='dos'
            
            break;
        case 3:clima='tres'
            
            break;
        case 4:clima='cuatro'
            
            break;
        case 5:clima='cinco'
            
            break;
        case 6:clima='seis'
            
            break;
        case 7:clima='ciete'
            
            break;
        case 8:clima='ocho'
            
            break;
        case 9:clima='nueve'
            
            break;
    
        default:clima='Ninguna de las opciones'
            break;
    }
    return clima.toUpperCase();
}