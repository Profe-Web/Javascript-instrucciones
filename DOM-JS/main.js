// ELEMENTOS DOM DESDE JS
//PRIMERO SE CREA, LUEGO SE DICE DONDE VA

//crear un nuevo párrafo
let texto1 = document.createElement("p");
texto1.innerHTML = "pepitooooo"; //innerText

//añadir al final del body
document.body.appendChild(texto1);

//añadir más en texto1
texto1.innerHTML="<div> DIV PRIMERO </div> <div> DIV SEGUNDO</div> <div> DIV TERCERO</div>"

//añadir otro div
let div4 = document.createElement("div");//se crea
texto1.appendChild(div4) //se añade
//Child=hijo/ children=hijos // parent=padre

//añadir contenido a div4
div4.innerHTML = "<p> HOLA </p> <p> AMIGOS </p> <p> Aqui el CUARTO div </p>"
//Cambiar estilo div4
div4.style.backgroundColor="red";
div4.style.color="white"

//generar párrafos automáticamente
let newP;
for(let i=1; i<=10; i++){
    newP= document.createElement("p");//se crea el párrafo
    newP.innerHTML = i +": me gustan los viernes!"; //contenido
    div4.appendChild(newP);//añadir a div4
}

//QUITAR ELEMENTOS
div4.removeChild(div4.firstElementChild); //quitar primero de div4
div4.removeChild(div4.lastElementChild); //quitar último
div4.removeChild(div4.children[3])

//no funciona
/* for(let i=0; i<div4.length; i++){
    div4.removeChild(div4.lastElementChild);
} */

// Mientras existe un primer elemento, irlo borrando

/* while(div4.firstChild){ //==true
    div4.removeChild(div4.firstChild);
} */


// o bien actuar sobre el parent:
div4.innerHTML ="";
