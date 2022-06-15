// *** FOR EACH *** //

const array1 = [2,4,8,10,23,36,25,6,9,8,74,15,623,26];
const array2 = [[415,546,56],[234,789,458], [15,45,6]]

//manera tipica de recorrer un array con bucle FOR
for(let i=0; i<array1.length;i++){
    document.write(array1[i]**2 + "<br>")
}


//forEach recorre todos los elementos del array sin hacer un for
array1.forEach(function(x){ //función anónima
    document.write(x**2 +"<br>")
})


//forEach(function(item, indice, array)) ***** parametros deben ir en ese orden***
array1.forEach(function(x, y, z){
    document.write("en el índice "+ y + " hay un " + x + " del array " + z +"<br>")
})


array1.forEach(function(x, y){ //"item" necesario para mostrar solo index
    document.write("Es el índice " + y + "<br>")
})


array2.forEach(function(item){ // para recorrer dentro de cada elemento
    for(let i=0; i<item.length; i++){
        document.write(item[i] + "<br>")
    }
})


array1.forEach(item => { //funcion flecha => funcion anonima
    document.write("El item vale " + item + "<br>")
}); 


//funcion que NO sea anónima:

const frutas = ["apple", "orange", "cherry"];

frutas.forEach(listaCompra);

document.getElementById("demo").innerHTML = text;
 
function listaCompra(item, index) {
  document.write((index+1) + ": " + item + "<br>") ; 
} 


// pasar todo a mayúsculas
let animales = ["perro", "gato", "delfin", "pajaro", "araña"]

animales.forEach(animal => {
    document.write(animal.toUpperCase()+ " --- ")
});
