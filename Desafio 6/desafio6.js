//Para este desafio 6 y el desafio 6 complementario. Se utilizo los objetos del desafio anterior y se creo un array de los mismos para no comenzar con una lista vacia. Tambien se creo la funcion agregarLugares() que permite agregar nuevos lugares a dicho array, introduciendo sus respectivos parametros mediante prompt. Por ultimo se ordeno el array por el precio de sus objetos de menor a mayor.

class Paquetes {
  constructor ({
    nombreP = "Lugar", 
    precioP = 0, 
    diasP = 0, 
    comidasIncluidasP = 0
  }){
    this.nombreP = nombreP
    this.precioP = precioP
    this.diasP = diasP
    this.comidasIncluidasP = comidasIncluidasP
  }

  //metodo personalizado de compra de objetos

  comprar(cantidad) {
    alert(`Compraste el paquete de ${this.nombreP} a ${this.precioP * cantidad}`)
  }
}

//objetos

const tokyo = new Paquetes({
  nombreP: "Tokyo",
  precioP: 2000,
  diasP: 7,
  comidasIncluidasP: 2
})

const kyoto = new Paquetes({
  nombreP: "Kyoto",
  precioP: 1800,
  diasP: 7,
  comidasIncluidasP: 2
})

const osaka = new Paquetes({
  nombreP: "Osaka",
  precioP: 1500,
  diasP: 7,
  comidasIncluidasP: 2
})

const nagano = new Paquetes({
  nombreP: "Nagano",
  precioP: 1300,
  diasP: 7,
  comidasIncluidasP: 2
})

const fukuoka = new Paquetes({
  nombreP: "Fukuoka",
  precioP: 1200,
  diasP: 7,
  comidasIncluidasP: 2
})

//array

const lugares = [tokyo, kyoto, osaka, nagano, fukuoka]

//funcion para agregar un nuevo objeto al array

const agregarLugares = () => {
  let nombreP = prompt("Nombre del lugar");
  let precioP = Number(prompt("Precio del paquete"));
  let diasP = Number(prompt("Cantidad de dias"));
  let comidasIncluidasP = Number(prompt("Cantidad de comidas"));
  let paquete = new Paquetes({nombreP, precioP, diasP, comidasIncluidasP})
  lugares.push(paquete)
}

//Ordeno los objetos por precio de menor a mayor

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