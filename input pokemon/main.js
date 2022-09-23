function enviarNombre() {
  let entrada = document.getElementById("entrada").value;
  document.getElementById("resultado").innerHTML = entrada;
  const pokemonInput = `https://pokeapi.co/api/v2/pokemon/${entrada}`;
  

          fetch(pokemonInput)
            .then((response) => response.json())
            .then((data) => {
              //document.getElementById("resultado").innerHTML = data
              console.log(data)
            })
            .catch((err) => console.log("esto no pita!"));
}
