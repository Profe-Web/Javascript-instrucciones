// condicionales if-else
// comparar resultados colores

let color1 = "rosa";
let color2 = "amarillo";

let colorUsuario1 = prompt("dime un color");
let colorUsuario2 = prompt("dime otro color");

//si...
if (colorUsuario1 == color1 && colorUsuario2 == color2){ 
    //entonces...
  alert("felicidades, tienes demasiada suerte!!!");
} 

//si no, si...
else if (colorUsuario1 == "azul" || colorUsuario2 == "azul") {
   //entonces         
  alert("es azul como el cielo sobre el mar");
} 

// si no es nada de lo anterior, entonces...
else{     
    alert("tu color no es ni rosa, ni amarillo ni azul");
}

// Sale del condicional if
alert("...aquí sigue la ejecución del programa...");
