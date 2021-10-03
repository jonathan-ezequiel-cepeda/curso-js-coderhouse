//Para este desafio se creo el objeto paquetes con su respectivas propiedades y constructor y el metedo personalizado comprar. Donde introduciendo la cantidad calcula el precio de alguno de los productos creados.

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

  comprar(cantidad) {
    alert(`Compraste el paquete de ${this.nombreP} a ${this.precioP * cantidad}`)
  }
}

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
