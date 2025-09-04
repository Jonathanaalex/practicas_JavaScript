function sumar(a, b) {
 return a + b;
 }
 const sumarFlecha = (a, b) => a + b;

 document.write(sumar(5, 3)); 
// 8 
document.write(sumarFlecha(5, 3)); 
// 8
// ejemplo 2
function dividir(a, b) { 
if (b === 0) {
 return 'Error: División por cero'; } 
return a / b; 
}
 const dividirFlecha = (a, b) => b === 0 ? 'Error: División por cero' : a / b;

 

 