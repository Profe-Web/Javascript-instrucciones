let frase = "Erase una vez, el señor Angel diciendo 'Hola Mundo' para hacer una prueba de texto"
let frase2 = "y estaba muy contento"

//SLICE (rebanada)
let rebanada = frase.slice(0,5); //inicio, fin
console.log(rebanada); // da "erase"


//INCLUDES (se incluye, se encuentra)
//REPLACE (cambia un texto por otro)

if(frase.includes("Angel")){
    frase = frase.replace("Angel", "Alejandro");
    alert(frase)
}

//SPLIT (contrario seria JOIN)
let separar= frase.split(" ");
console.log(separar)

//CONCAT = une strings, separados por comas
let fraseTotal = frase.concat(" ", frase2," REPETIMOS: ", frase, " ", frase2);
console.log(fraseTotal)

//CHAR AT charAt() Te busca caracter en una posicion del string
let charBuscar = fraseTotal.charAt(8);
console.log(charBuscar)

for(let i=0; i<fraseTotal.length; i++){
    //length = longitud total (cantidad de elementos, en este caso caracteres)
    console.log("posicion letra: " + i + " " + fraseTotal.charAt(i));
}