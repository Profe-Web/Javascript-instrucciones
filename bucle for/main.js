// BUCLE FOR
//Tabla multiplicar un número solo
/* let numeroMultiplicar = parseInt(prompt("di un número para multiplicar"));

for(let i=1; i<=10; i++){ 
    document.write(numeroMultiplicar+"x"+i+"="+  numeroMultiplicar*i + "<br>");
} */


//Tabla multiplicar del 1 al 10

/* for(let j=1; j<=10; j++){ //para cada tabla

        for(let i=1; i<=10; i++){ //para cada número, pasa 10 veces
            document.write(j+"x"+i+"="+  j*i + "<br>");
        }

        document.write("<hr>"); //Dibuja línea horizontal
} */


// Acumulador carro de la compra
// pedimos precio cinco productos

document.write("CARRITO DE LA COMPRA"+"<br>"+"<br>");
let precio;
let precioTotal=0;

for(let i=1; i<=5; i++){
    precio=parseInt(prompt("indica precio producto " +i));
    precioTotal= precioTotal+precio;
    document.write(precio +"<br>");
}

document.write("<hr>"+ precioTotal + "<br>");