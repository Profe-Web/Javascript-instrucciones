const reqres = "https://reqres.in/api/users/1";

//reqres= REQUEST y RESPONSE (petición y respuesta)


// Se hace el CRUD
// C - CREATE (POST) => te crea uno al final
// R - READ (se hace directo con el fetch, que es un GET)
// U - UPDATE (PUT) => decirle id en la barra de dirección
// D - DELETE (DELETE) => decirle id en la barra de dirección
// response.json() para convertir en json los datos recibidos
// JSON.stringify() para convertir en json los datos enviados


// GET
// enviar fuera los data como parámetro de una función
fetch(reqres)
  .then((response) => response.json())
  .then((data) => {

        tratarDatos(data)

  })
  .catch((err) => console.log("conexión a req-res no funciona!"));

/*
// POST
fetch(reqres, {
        method: "POST",
        headers: {
             "Content-type": "application/JSON"
        },
        body: JSON.stringify ({
                nombre: "pepito",
                curro: "lopez",      
        })
})
.then((response)=> response.json())
.then((data) => {
    console.log(data)
})
.catch((err)=> console.log("conexión a req-res no funciona!"))

*/

/*
// PUT
fetch("https://reqres.in/api/users/1", {
    method: "PUT",
    headers: {
         "Content-type": "application/JSON"
    },
    body: JSON.stringify ({
        avatar:"https://reqres.in/img/faces/1-image.jpg",
        email:"orge.bluth@reqres.in",
        first_name:"orge",
        id:1,
        last_name:"uth"      
    })
})
.then((response)=> response.json())
.then((data) => {
console.log(data)
})
.catch((err)=> console.log("conexión a req-res no funciona!"))*/

/*
// DELETE
fetch("https://reqres.in/api/users/1", {
  method: "DELETE",
  headers: { "Content-type": "application/JSON" },
})
  .then((response) => response.json())
  .then((data) => {
    console.log("Registro borrado!");
  })
  .catch((err) => console.log("conexión a req-res no funciona!"));*/


/*
  // PATCH : es un PUT (update) donde solo le actualizas 
  //deteminados campos en vez de todos
  fetch("https://reqres.in/api/users/1", {
    method: "PATCH",
    headers: {
         "Content-type": "application/JSON"
            },
    body: JSON.stringify ({
                             email:"estemail@reqres.in",       
    })
})
.then((response)=> response.json())
.then((data) => {
console.log(data)
})
.catch((err)=> console.log("conexión a req-res no funciona!"))*/


function tratarDatos(data){

        console.log(data)

}