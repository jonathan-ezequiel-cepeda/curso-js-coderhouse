let listaObjetos;
let imprimirDatos = document.getElementById("paqueteDinamico2")
let btn = document.getElementById("finalizarCompra")

if (localStorage.getItem("carrito") == null) {
    alert("Carrito vacio")
} else {
    listaObjetos = JSON.parse(localStorage.getItem("carrito"))
}

listaObjetos.forEach(element => {
  imprimirDatos.innerHTML += `  
  <ul class="list-group">
  <li class="list-group-item d-grid gap-2 col-6 mx-auto vertical list-group-item-danger">Paquete ${element.nombreP}, ${element.precioP}</li>
  </ul>
  `
})


const aceptarCompra = () => {

  let total = 0

  listaObjetos.forEach(e => {

    total += e.precioP

  })

  alert("Se realizo la compra por un total de " + total + ". Gracias!")
  localStorage.removeItem("carrito")

}

btn.addEventListener("click", () => {
  aceptarCompra()
})
