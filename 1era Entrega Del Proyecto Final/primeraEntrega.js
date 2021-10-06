class Productos {
  constructor(nombreP, precioP, diasP){
    this.nombreP = nombreP,
    this.precioP = precioP,
    this.diasP = diasP
  }

  comprarP(cantidadP) {
    if (cantidadP <= 0) {
      alert(`Debe introducir una cantidad valida. Vuelva a intentarlo.`)
    } else {
    alert(`compraste ${cantidadP} unidades del paquete ${this.nombreP}, te salio ${this.precioP * cantidadP}`)
    }
  }
}

const tokyo = new Productos("toyko", 2000, 7)
const osaka = new Productos("osaka", 1700, 7)

let boton = prompt("Nuestros paquetes disponibles son Osaka y Tokyo. Cual de los 2 desea comprar?")
let cantidadCompra = prompt("Que cantidad de paquetes desea comprar?")

if (boton == "osaka" || boton == "Osaka" || boton == "OSAKA"){
  osaka.comprarP(cantidadCompra);
} else if(boton == "tokyo" || boton == "Tokyo" || boton == "TOKYO"){
  tokyo.comprarP(cantidadCompra);
} else {
  alert("No ingresaste una opcion valida")
}

