const miweb= "https://rickandmortyapi.com/api/character/3";

// conecta con esa web llamada 'miweb', y entonces...
// convertir respuesta a formato json
// data es el resultado de response.json
fetch(miweb)
.then(response=>response.json())
.then(data =>{
    console.log(data)
    console.log(data.name)
})
.catch(err=> console.log("esto no pita!"));

//aqui siguen las instrucciones
//es una conexión asíncrona, porque no puede hacer dos cosas a la vez, 
//y no espera a que le conteste, y sigue con la ejecución del programa

//Array normal
/*
let persona = ["Shakira", "Elefante", 666];
document.write(persona[0] + '<br>' + persona[2]);
*/

// Objeto clave-valor
let persona2 = {"nombre":"Shakira", "profesion":"cantante", "edad":40}

console.log(persona2.nombre); //Muestra Shakira