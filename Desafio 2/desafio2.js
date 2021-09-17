//Desafio 2 - Crea un algoritmo con un condicional

let numeroIngresado = prompt("ingrese aqui un numero del 1 al 10")

if ((numeroIngresado < 1) || (numeroIngresado > 10)) {
  alert("Ese no es un numero entre 1 y 10. Media pila.")
}
else if ((numeroIngresado >= 1) || (numeroIngresado <=10 ) ){
  alert("ingresaste " + numeroIngresado + ". Gracias!")
}
