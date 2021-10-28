let listaObjetos;
let imprimirDatos = document.getElementById("paqueteDinamico")

if (localStorage.getItem("lista") == null) {
    alert("No tenes productos para mostrar")
} else {
    listaObjetos = JSON.parse(localStorage.getItem("lista"))
}

for (let i = 0; i < listaObjetos.length; i++){
  let div = document.createElement("div");
  div.innerHTML =  `  
  
  <div class="d-grid gap-2 col-6 mx-auto vertical ">
  <button type="button" class="btn btnColor fst-italic fw-bold" data-bs-toggle="modal" data-bs-target="#staticBackdrop${i}">Paquete ${listaObjetos[i].nombreP}</button>

  <div class="modal fade" id="staticBackdrop${i}" data-bs-backdrop="static" data-bs-keyboard="false" tabindex="-1" aria-labelledby="staticBackdropLabel" aria-hidden="true">
    <div class="modal-dialog">
      <div class="modal-content">
        <div class="modal-header">
          <h5 class="modal-title" id="staticBackdropLabel">${listaObjetos[i].nombreP}</h5>
          <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
        </div>
        <div class="modal-body text-center fst-italic fw-bold">
          Este paquete incluye alojamiento por ${listaObjetos[i].diasP} en un hotel 5 estrellas con desayuno y cena incluidos. Como así también, una excursión por día gratuita a diferentes lugares turísticos tanto dentro, como fuera de la ciudad.
          Tiene un costo de ${listaObjetos[i].precioP} dolares.
        </div>
        <div class="modal-footer">
          <button type="button" class="btn btnColor fst-italic fw-bold" data-bs-dismiss="modal">Cancelar</button>
          <button type="button" class="btn btnColor fst-italic fw-bold" onclick="agregar(${[i]})">Agregar al carrito</button>
        </div>
      </div>
    </div>
  </div>
  `
  paqueteDinamico.appendChild(div);
}

const agregar = (i) => {

    let carrito;
    if (localStorage.getItem("carrito") == null) {
        carrito = []
    } else {
        carrito = JSON.parse(localStorage.getItem("carrito"))
    }


    carrito.push(listaObjetos[i])
    localStorage.setItem("carrito", JSON.stringify(carrito))
    alert("Agregaste el paquete al carrito")
}

$(".btnPetalo").prepend('<button><img class="petalo-btn" src="../imagenes/sakura-btn.png" alt="sakura10"></button>')

$(".petalo-btn").on("click", () => {
  $(".petalo").slideToggle()
})