// con IF... ELSE IF
// y INPUT variable numérica
//let mes = parseInt(prompt("introduce número del mes (1/12)"));
/* if (mes == 1 || mes == 2 || mes == 12) {
  alert("es invierno");
} else if (mes == 3 || mes == 4 || mes == 5) {
  alert("es primavera");
} else if (mes == 6 || mes == 7 || mes == 8) {
  alert("es verano");
} else if (mes == 9 || mes == 10 || mes == 11) {
  alert("es otoño");
} else {
  alert("debe ser un número del 1 al 12");
} */


// con SWITCH...CASE
// y INPUT variable string
let mes = prompt("introduce el nombre del mes");
let estacion; //variable para usar fuera después
switch (mes) {
  case "diciembre":
  case "enero":
  case "febrero":
    estacion = "INVIERNO";
    break;

  case "marzo":
  case "abril":
  case "mayo":
    estacion = "PRIMAVERA";
    break;

  case "junio":
  case "julio":
  case "agosto":
    estacion = "VERANO";
    break;

  case "septiembre":
  case "octubre":
  case "noviembre":
    estacion = "OTOÑO";
    break;

  default:
    alert("has escrito mal el mes");
}

alert(
  "este mes pertenece a " + estacion + "\n\nGracias por participar bla bla bla bla bla"
);
