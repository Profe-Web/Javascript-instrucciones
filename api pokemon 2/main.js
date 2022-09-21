const pokemon = "https://pokeapi.co/api/v2/pokemon/3";

fetch(pokemon)
  .then((response) => response.json())
  .then((data) => {
    //console.log(data)
    //console.log(data.name)

    /* for(let i=0; i<data.length; i++){ //Problema en el length
        console.log(data[i])
    } */

    //Acceso a datos en objetos JSON
    console.log(data.abilities); //Muestra todas las habilidades
    console.log(data.abilities[1].ability); //Muestra solo habilidad indice 1
    console.log(data.abilities[1].ability.name); //Muestra solo nombre habilidad indice 1


    // Visualización EN PANTALLA (no en consola)

    //TITULO
    let titulo = document.getElementById("titulo");
    titulo.innerHTML = data.abilities[1].ability.name;


    //IMAGEN DELANTE
    let imagen_delante = document.getElementById("imagen_delante");
    // imagen_delante.innerHTML = data.sprites.front_default;// muestra solo el enlace
    imagen_delante.innerHTML = `<img src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/3.png" width="300"></img>`
    
    // version Template Literal:
    //imagen_delante.innerHTML = `<img src='${data.sprites.front_default}'></img>`
    
    
    //IMAGEN DETRAS
    let imagen_detras = document.getElementById("imagen_detras");
    // imagen_detras.innerHTML = data.sprites.back_default;// muestra solo el enlace
    imagen_detras.innerHTML = `<img src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/back/3.png" width="300"></img>`   

  })
  .catch((err) => console.log("esto no pita!"));
