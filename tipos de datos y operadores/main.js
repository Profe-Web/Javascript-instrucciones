// comentario una linea
/* comentario
varias lineas
pim pam */

// tipos de datos básicos:
let x=5; //dato numérico
let y="hola!" //string alfanumérico
let z=true // dato booleano (true/false)

// Visualizar resultados
console.log(x); //muestra en consola
document.write(y); //muestra en pantalla
//alert(z); // salta ventana de aviso

//var, let, const
//CUIDADO, var hoy en dia casi no se utiliza. Son variables globales
// let es el más usado
// const para constantes. No puedes cambiar el valor de esa constante

/* let al=7;
console.log("el valor de al es: " + al);
al=77;
console.log("el valor de al es: " + al);

const bert=7;
console.log("el valor de bert es: " + bert);

console.log("la suma de " + al + " y " + bert + " es " + (al + bert)) */

let a="al";
let b="bert";
console.log(a+b);

x=5;
xx=20;
console.log(x+xx)//da 25. Pero no se guarda
let resultado = x+xx;
console.log(resultado) //Se guarda y visualiza

//entrada de valores numéricos por el usuario
let valorA= parseInt(prompt("escribe el primer valor"));
let valorB= parseInt(prompt("escribe el segundo valor"));
alert("Suma= "+ (valorA+valorB) + "\nResta=" + (valorA-valorB)); // contrabarra para valores de escape (salto de linea, tabulacion, mostrar commillas, etc)

/* let valorA= prompt("escribe el primer valor");
let valorB= prompt("escribe el segundo valor");
let aOK= parseInt(valorA); //castear a numérico el primer valor
let bOK=parseInt(valorB); //castear a numérico el segundo valor
alert(aOK+bOK) */

// operadores aritméticos *********************************
// = es para ASIGNAR -- diferente a == que es para comparar
// + sumar números -- y para concatenar strings
// - restar
// * multiplicar
// / dividir
// % módulo o resto de una división. para encontrar pares e impares por ejemplo.
// ++ suma uno. ejemplo: i++;
// -- resta uno. ejemplo: i--;

//operadores relacionales *********************************
// == para comparar si dos valores son iguales
// != para ver si son diferentes los valores
// !== para ver si son diferentes valores y tipos
// === para comparar si son iguales y del mismo tipo
// >= mayor o igual
// <= menor o igual
// > mayor
// < menor

// operadores lógicos *************************************
// AND &&
// OR  ||
// NOT  !



let num1=9;
let num2= num1**3;
console.log(num2)