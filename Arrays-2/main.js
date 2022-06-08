const artistas = ["Alejandro Sanz", "Pau Donès", "Serrat", "Sabina", "Miguel Ríos", "Shakira", "Rosa Lopez","rosa lopez"];

console.log(artistas);
//SPLICE (1,0,"Estopa")
// En la posición 1, sin borrar nada, inserta "Estopa"
artistas.splice(1,0,"Estopa");
console.log(artistas);

// en la posicion 1 empieza, y borra 2 (pos 1 y 2), y añade "Els pets", "Mishima" a partir de la pos 1
artistas.splice(1,2,"Els pets", "Mishima");
console.log(artistas);

//Borrar ultimos:
artistas.splice(5,2); //desde la pos 5, borra 2
console.log(artistas);

// poner o quitar un o al principio: UNSHIFT y SHIFT
artistas.unshift("Camarón"); //pone uno al principio
console.log(artistas);

artistas.shift(); //quita uno al principio
console.log(artistas);

artistas.splice(0, 0, "Camarón"); //pone uno al principio
console.log(artistas);

//RANDOM: presentar lista en orden aleatorio
for(let i=0; i<artistas.length; i++){
    console.log(artistas[Math.floor(Math.random()*artistas.length)]);
}

// Math.random() que da un número entre 0-0.99, para un número entero, lo multiplcas (*10, te da un número del 1 al 10)
// REDONDEO: Math.floor() = te redondea hacia abajo
// Math.ceil() = te redondea hacia arriba

//SORT = ordena alfabeticamente
// primero, numeros (como string), después mayusculas, despues minusculas
let listaOrdenada = artistas.sort()
console.log(listaOrdenada);

console.log(listaOrdenada.reverse())

//generar lista con PROMPT
let artistas2 = [];

for(let i=0; i<5; i++){
    artistas2[i] = prompt("Escribe nombre artista");
}

console.log(artistas2);

/*
artistas2 = []; //borra todo (poner LET array)
console.log(artistas2);*/

//Juntar dos arrays: CONCAT
const arrayTotal= artistas.concat(artistas2);
console.log("total= " +arrayTotal)





