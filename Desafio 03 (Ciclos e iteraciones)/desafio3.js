//Pequeño juego con while. Para ganar (salir del loop) hay que ingresar "PALABRAS SECRETAS"

let palabra = prompt("ingrese las PALABRAS SECRETAS para pasar")
let intentos = 3

while (palabra != "PALABRAS SECRETAS" && intentos > 0) {
  alert(palabra + ` no son las PALABRAS SECRETAS, te quedan ${intentos} intentos para poder pasar`);
  intentos--
  palabra = prompt("ingrese las PALABRAS SECRETAS"); 
}


