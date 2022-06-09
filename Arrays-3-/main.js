// ARRAYS - 3

let array1 = ["a","b", "c", [25, 36, 68], "d", "e","f"];
let array2 = [[4522,546,568],[526, 565, 586],[45657,65,32]];

//sobre el array1
//Todos los elementos (array de dentro cuenta como uno)
for(let i=0; i<array1.length;i++){
    document.write(array1[i]+"<br>");
}
document.write("<br>"+"<br>");

//array de dentro separado (es la posición 3)
for(let i=0; i<array1[3].length; i++){
    document.write(array1[3][i]+"<br>");
}
document.write("<br>"+"<br>");



//sobre el array2
// Los tres arrays principales
for(let i=0; i<array2.length; i++){
    document.write(array2[i] + "<br>");
}
document.write("<br>"+array2[0][2]); //queria imprimir 568 (indice dos del indice cero) [[4522,546,568],

//los elementos dentro de cada array
for(let i=0; i<array2.length; i++){  //recorre elementos array grande
    for(let j=0; j<3; j++){ //recorre elementos arrays pequeños
        //j<array2[i].length; si no sé la longitud de cada array pequeño
        document.write(array2[i][j] + "<br>"); 
        // recorre indices: [0.0 0.1 0.2] / [1.0 1.1 1.2] / [2.0 2.1 2.2]
    }
}
