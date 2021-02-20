export const codeHeader=`
<h2>
    26.-Al ingresar un numero entre 1 y 4, devolver la estacion del 
    anio de acuerdo a la siguiente tabla
</h2>
<table class="tabla">
<tr>
    <th>Numero</th>
    <th>Estacion</th>
</tr>
<tr>
    <td>1</td>
    <td>Verano</td>
</tr>
<tr>
    <td>2</td>
    <td>Otonio</td>
</tr>
<tr>
    <td>3</td>
    <td>Invierno</td>
</tr>
<tr>
    <td>4</td>
    <td>Primavera</td>
</tr>
</table>
`;
export const codeDiv=`
<form id='formulario'>
    <div>            
        <input type="text" id="valor1" placeholder="Ingresar opcion" >
    </div>

    <div>
        <input type="submit" value="Calcular">
        <span class="resultado" ></span>
    </div>
</form>

`;

export const search=(valor)=>{
    let clima
    switch (valor) {
        case 1:clima='Verano'
            
            break;
        case 2:clima='Otonio'
            
            break;
        case 3:clima='Invierno'
            
            break;
        case 4:clima='Primavera'
            
            break;
    
        default:clima='Ninguna de las opciones'
            break;
    }
    return clima;
}