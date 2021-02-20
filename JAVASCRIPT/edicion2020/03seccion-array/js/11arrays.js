let numeros=[1,2,3,4,5,6,7,8]
/* 
console.log(numeros[3]+numeros[1])
let palabras=['hola','estamos','youtbe']
let booleans=[true,false]

console.log(`la palabra "${palabras[1] }" tiene ${palabras[1].length} letras`)
 */

/* let numbers=4;
console.log(Array.isArray(numeros))
 */
 
let nombres=['Marco','Juan','Pablo','Mirian','Pato']

console.log(Array.isArray(nombres))
for (const ele of nombres) {
    console.log(nombres.indexOf(ele))
}
console.log()
for (const ele in nombres) {
    console.log(ele)
}
