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

//Objetos

const tokyo = new Productos( "toyko", 2000, 7)
const osaka = new Productos("osaka", 1700,  7)
const kyoto = new Productos("kyoto", 1800, 7)
const fukuoka = new Productos("fukuoka", 1500, 7)
const nagano = new Productos("nagano", 1400, 7)

//Array con mis objetos

const lugares = [tokyo, kyoto, osaka, nagano, fukuoka]

//Metodo para filtrar los paquetes por precio maximo

const filtrarPrecioMaximo = () => {

  const precioMaximo = Number(prompt("Cual es el precio maximo que quiere pagar?"))
  
  const filtroPrecioMaximo = lugares.filter (lugares => lugares.precioP <= precioMaximo)
  console.log(filtroPrecioMaximo)
  
  }
  
//metodo para filtrar los paquetes por precio minimo
  
  const filtrarPrecioMinimo = () => {
  
    const precioMinimo = Number(prompt("Cual es el precio minimo que quiere pagar?"))
    
    const filtroPrecioMinimo = lugares.filter (lugares => lugares.precioP >= precioMinimo)
    console.log(filtroPrecioMinimo)
  }
  
  //funcion para agregar un nuevo objeto al array
  
  const agregarLugares = () => {
    let nombreP = prompt("Nombre del lugar");
    let precioP = Number(prompt("Precio del paquete"));
    let diasP = Number(prompt("Cantidad de dias"));
    let nuevoLugar = new Productos(nombreP, precioP, diasP)
    lugares.push(nuevoLugar)
  
    lugares.sort((a, b) => {
      if (a.precioP > b.precioP) {
          return 1
      }
      if (a.precioP < b.precioP) {
          return -1
      }
      return 0
    })
  
    console.log(lugares)
  }

filtrarPrecioMaximo()
filtrarPrecioMinimo()  

let boton = prompt("Nuestros paquetes disponibles son Osaka, Tokyo, Nagano, Fukuoka y Kyoto. Ingrese el nombre del paquete que desea comprar:")
let cantidadCompra = prompt("Que cantidad de paquetes desea comprar?")

if (boton.toLowerCase() == "osaka"){
  osaka.comprarP(cantidadCompra);
} else if(boton.toLowerCase() == "tokyo"){
  tokyo.comprarP(cantidadCompra);
} else if(boton.toLowerCase() == "nagano"){
  nagano.comprarP(cantidadCompra);
} else if(boton.toLowerCase() == "fukuoka"){
  fukuoka.comprarP(cantidadCompra);
} else if(boton.toLowerCase() == "kyoto"){
  kyoto.comprarP(cantidadCompra);
}
else {
  alert("No ingresaste una opcion valida")
}

//Ordeno los objetos de array por precio. De menor a mayor.

lugares.sort((a, b) => {
  if (a.precioP > b.precioP) {
      return 1
  }
  if (a.precioP < b.precioP) {
      return -1
  }
  return 0
})

console.log(lugares)