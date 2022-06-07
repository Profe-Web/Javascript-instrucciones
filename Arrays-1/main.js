// ARRAYS - 1
const animales = ["perro", "gato","delfin", "tortuga", "elefante"]

// OJO, el indice empieza por cero! ("perro"=[0])

console.log(animales)
console.log("Array animales: " + animales)

//length: indica la cantidad de elementos
console.log("cantidad de elementos: " + animales.length); //da 5

console.log(animales[3])// sale "tortuga"
console.log(animales[5])// sale undefined

// recorrido típico de arrays
for(let i=0; i<animales.length; i++){
    console.log(animales[i]);
}

//for in y for of **************************************
//for in te indica el indice
for(let x in animales){
    console.log(x); //muestra el indice de cada elemento
}

//for of te indica el contenido
for(let x of animales){
    console.log(x); //muestra el valor de cada elemento
}

// lo más habitual es añadir o quitar del final de la lista
// PUSH para añadir, y POP para quitar
// Push = añade al final
animales.push("pato", "lagarto", "comadreja");
console.log("ahora la lista es: " + animales);

// Pop = quita al final
animales.pop();
console.log("ahora la lista es: " + animales);
animales.pop();
console.log("ahora la lista es: " + animales);
animales.pop();
console.log("ahora la lista es: " + animales);

// unshift, shift = añadir o quitar en el primero
// splice = borrar varios, o insertar en medio


// * C * R * U * D * //

// CREATE
animales[10] = "cucudrulu" 
//entraria el push

// READ
console.log(animales[10])

// UPDATE
animales[10] = "jirafa" //entre medio son undefined (empty)
console.log("penúltima actualizacion del ZOO: " + animales)

// DELETE
animales.pop()

animales[8] = "leopardo"
animales[9] = "león"
console.log("ultima actualizacion del ZOO: " + animales)

