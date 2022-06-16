function pidePersonaje(){
    let personaje = prompt("dime un personaje")
    return personaje
}

function pideLugar(){
    let lugar = prompt("dime un lugar")
    return lugar
}

function pideAccion(){
    let accion = prompt("dime una acción en gerundio (rodando, caminando...)")
    return accion
}

function mostrarResultado(){
    let personaje = pidePersonaje();
    let lugar = pideLugar();
    let accion = pideAccion();
    
    document.getElementById("resultado").innerHTML = "Estaba " + personaje + " en " + lugar + ", " + accion + " un buen rato"
}


/* 

// Ejemplo variable global que llama a función y que modifica fuera el resultado que devuelve la función:

function cuentaCoches(){
    let cochesUsuario = parseInt(prompt("cuantos coches más?"));
    //return cochesUsuario
}

// recoge el número de coches que ha introducido el usuario y le suma 5:

let coches= 5+ cuentaCoches();

alert(coches);

 */