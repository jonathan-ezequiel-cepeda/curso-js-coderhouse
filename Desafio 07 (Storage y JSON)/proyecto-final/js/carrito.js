let listaObjetos;
let imprimirDatos = document.getElementById("paqueteDinamico2")
let btn = document.getElementById("finalizarCompra")

if (localStorage.getItem("carrito") == null) {
    alert("Carrito vacio")
} else {
    listaObjetos = JSON.parse(localStorage.getItem("carrito"))
}

for (let i = 0; i < listaObjetos.length; i++){
  const div = document.createElement("div");
  div.innerHTML = `  
  <ul class="list-group">
  <li class="list-group-item d-grid gap-2 col-6 mx-auto vertical list-group-item-danger">Paquete ${listaObjetos[i].nombreP}, ${listaObjetos[i].precioP}</li>
  </ul>
  `
  paqueteDinamico2.appendChild(div);
}

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

