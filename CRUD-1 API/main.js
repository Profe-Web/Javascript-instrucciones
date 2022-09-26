const placeHolder = "https://jsonplaceholder.typicode.com/posts";


// GET : por defecto (no hace falta decirle que es GET) = READ = SELECT
fetch(placeHolder)
.then((response)=> response.json())
.then((data) => {
    console.log(data)
})
.catch((err)=> console.log("conexión a JSON PlaceHolder no funciona!"))


// POST : crear uno nuevo (subirlo, añadirlo) = INSERT
// FETCH : (url,  {parametros de método, headers, contenido que le pasas...} )
fetch(placeHolder, {
    method: "POST",
    headers: {
        "Content-Type": "application/JSON"
    },
    body: JSON.stringify ({
        body: "En un lugar de la mancha, de cuyo nombre no quiero acordarme...",
        title: "el Quijote",
        userId: 6
    })

})
.then((response)=> response.json())
.then((data) => {
    console.log(data)
})
.catch((err)=> console.log("conexión a JSON PlaceHolder no funciona!"))


/*
// PUT = UPDATE = MODIFY
fetch("https://jsonplaceholder.typicode.com/posts/100", { 
    method: "PUT",
    headers: {
        "Content-Type": "application/JSON"
    },
    body: JSON.stringify ({
        body: "En un lugar de la mancha, de cuyo nombre no quiero acordarme...",
        title: "El Lazarillo de Tormes",
        userId: 1
    })
})
.then((response)=> response.json())
.then((data) => {
    console.log(data)
})
.catch((err)=> console.log("conexión a JSON PlaceHolder no funciona!"))*/


// DELETE 
fetch("https://jsonplaceholder.typicode.com/posts/10", {
    method: "DELETE",
    headers: { "Content-type": "application/JSON"}
})
.then((response)=> response.json())
.then((data) => {
    console.log("Registro 101 borrado!")
})
.catch((err)=> console.log("conexión a JSON PlaceHolder no funciona!"))