/*
Para el desafio tanto obligatorio como complementario, me base en el ejercicio de sumar iva. Hice que los datos puedan ser ingresados por el usuario. Tambien le agregue una funcion que convierte los dolares ingresados a pesos e hice que calcule esa conversion tanto con iva, como sin iva.
Ambos resultados se muestran mediante una alert.
*/

const suma  = (a,b) => a + b;
const resta = (a,b) => a - b;
const calcularDolarSolidario = y => y * 171;
const iva   = x => x * 0.21;

let precioProducto  = Number(prompt("Ingrese el precio del producto en dolares")); 
let precioDescuento = Number(prompt("Ingrese su descuento en dolares"));  
let nuevoPrecioConIva = resta(suma(precioProducto, iva(precioProducto)), precioDescuento);
let nuevoPrecioSinIva = resta(precioProducto, precioDescuento);

let precioDolarSolidarioConIva = calcularDolarSolidario(nuevoPrecioConIva);
let precioDolarSolidarioSinIva = calcularDolarSolidario(nuevoPrecioSinIva);

if (precioProducto < precioDescuento) {
  alert("El precio de descuento no puede ser mayor al precio del producto")
} else {
  alert("El precio del producto a la cotizacion del dolar actual es de: " + precioDolarSolidarioSinIva + " pesos " + `(Precio final con iva incluido: ${precioDolarSolidarioConIva} pesos)`);
}
