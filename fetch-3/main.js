const pokemon3 = "https://pokeapi.co/api/v2/pokemon/3";

fetch(pokemon3)
.then((response)=> response.json())
.then((data) => {
    //console.log(data)

    //name de version de game_indices[1]}
    /*console.log(data.game_indices)
    console.log(data.game_indices[1])
    console.log(data.game_indices[1].version)
    console.log(data.game_indices[1].version.name)*/

    /*console.log(data.stats[0]) //primer OBJETO clave-valor del ARRAY de objetos
    console.log(data.stats[0].effort)
    console.log(data.stats[0].stat.name) //da el nombre final, "hp"

    // verlo en pantalla (manejo del DOM)
    let render = document.getElementById("render")
    render.innerHTML = data.stats[0].stat.name*/

})
.catch((err)=> console.log("conexión a pokemon3 no funciona"))


/// CONEXION API EL TIEMPO
 //documentación API en https://openweathermap.org/current

const eltiempo = "https://api.openweathermap.org/data/2.5/weather?q=Barcelona&units=metric&APPID=12bcd931813b66fb794cd92941110130";

fetch(eltiempo)
.then((response)=> response.json())
.then((data) => {
    /*console.log(data)
    console.log("Ciudad: " + data.name)
    console.log("Temperatura: " + data.main.temp + " ºC")
    console.log("Humedad: " + data.main.humidity + "%")*/

    let elTiempo = document.getElementById("elTiempo")
    elTiempo.innerHTML = (data.name + ", " + data.main.temp + " ºC, " + data.main.humidity + "%")
})
.catch((err)=> console.log("conexión a el tiempo no funciona"))