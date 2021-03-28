export const codigoHTML=`
<h2>
    28.-Dados dos numeros enteros y un operador (+,-,* y /), devolve la operacion de los dos
    numeros segun el operador ingresado; condidere que si el segundo es cero y el operadors es/, no
    es divisible con el primer numero, entonces devolver como resultado 0.
</h2>
<form id='formulario'>
    <div>            
        <select id='selectId'>
            <option id='+'>suma</option>
            <option id='-'>resta </option>
            <option id='*'>multiplicacion</option>
            <option id='/'>division</option>
        </select>
        <input type="text" id="valor1"  placeholder="Ingresar numero uno">
        <input type="text" id="valor2"  placeholder="Ingresar numero dos">
    </div>

    <div>
        <input type="submit" value="Calcular">
        <span class="resultado" ></span>
    </div>
    
</form>

`
