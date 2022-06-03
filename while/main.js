// WHILE
// bucle con condicional para el número de veces, que es indeterminado
// for(let i=0; i<10; i++){
   // codigo a ejecutar} 
   // -estructura del FOR

// WHILE: i=0; while(i<10){
    //codigo a ejecutar, incremento i++

/* for(let i=0; i<10; i++){
    document.write(i + "<br>")
} */

let j=0;

/* while(j<=5){
    alert("Bienvenid@ a mi web!")
    document.write(j);
    j++;
} */


// Si el número no es entre 1 y 5, sigue preguntando:
let num=0;

while(num<1 || num>5){
    num=parseInt(prompt("escribe un número entre 1 y 5"));
}

alert("Bien!!!")

/* 
let tecla="";

while(tecla!=="s"){
    tecla=prompt("escribe una letra. Para salir pulsa S")
    tecla=tecla.toLowerCase();
} */


// DO WHILE para que se haga al menos una vez, aunque no se cumpla la condición
// Defines las variables antes del do...while
/* do{
    alert("Bienvenid@ a mi web!")
    document.write(j);
    j++;
}while(j<=10) */