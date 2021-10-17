let listaObjetos;
let imprimirDatos = document.getElementById("paqueteDinamico")

if (localStorage.getItem("lista") == null) {
    alert("No tenes productos para mostrar")
} else {
    listaObjetos = JSON.parse(localStorage.getItem("lista"))
}

listaObjetos.forEach(element => {
  
  let index = listaObjetos.indexOf(element)
  console.log(index)

  imprimirDatos.innerHTML += `  
  
  <div class="d-grid gap-2 col-6 mx-auto vertical ">
  <button type="button" class="btn btnColor fst-italic fw-bold" data-bs-toggle="modal" data-bs-target="#staticBackdrop">Paquete ${element.nombreP}</button>

  <div class="modal fade" id="staticBackdrop" data-bs-backdrop="static" data-bs-keyboard="false" tabindex="-1" aria-labelledby="staticBackdropLabel" aria-hidden="true">
    <div class="modal-dialog">
      <div class="modal-content">
        <div class="modal-header">
          <h5 class="modal-title" id="staticBackdropLabel">${element.nombreP}</h5>
          <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
        </div>
        <div class="modal-body text-center fst-italic fw-bold">
          Este paquete incluye alojamiento por ${element.diasP} en un hotel 5 estrellas con desayuno y cena incluidos. Como así también, una excursión por día gratuita a diferentes lugares turísticos tanto dentro, como fuera de la ciudad.
          Tiene un costo de ${element.precioP} dolares.
        </div>
        <div class="modal-footer">
          <button type="button" class="btn btnColor fst-italic fw-bold" data-bs-dismiss="modal">Cancelar</button>
          <button type="button" class="btn btnColor fst-italic fw-bold" onclick="agregar(${[index]})">Agregar al carrito</button>
        </div>
      </div>
    </div>
  </div>
  `

})

const agregar = (index) => {

    let carrito;
    if (localStorage.getItem("carrito") == null) {
        carrito = []
    } else {
        carrito = JSON.parse(localStorage.getItem("carrito"))
    }


    carrito.push(listaObjetos[index])
    localStorage.setItem("carrito", JSON.stringify(carrito))
}

/*

  <div class="d-grid gap-2 col-6 mx-auto vertical ">
    <button type="button" class="btn btnColor fst-italic fw-bold" data-bs-toggle="modal" data-bs-target="#staticBackdrop">Paquete Tokyo</button>

    <div class="modal fade" id="staticBackdrop" data-bs-backdrop="static" data-bs-keyboard="false" tabindex="-1" aria-labelledby="staticBackdropLabel" aria-hidden="true">
      <div class="modal-dialog">
        <div class="modal-content">
          <div class="modal-header">
            <h5 class="modal-title" id="staticBackdropLabel">Paquete Tokyo</h5>
            <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
          </div>
          <div class="modal-body text-center fst-italic fw-bold">
            Este paquete incluye alojamiento por 15 días en un hotel 5 estrellas con desayuno y cena incluidos. Como así también, una excursión por día gratuita a diferentes lugares turísticos tanto dentro, como fuera de la ciudad.
          </div>
          <div class="modal-footer">
            <button type="button" class="btn btnColor fst-italic fw-bold" data-bs-dismiss="modal">Cancelar</button>
            <button type="button" class="btn btnColor fst-italic fw-bold">Agregar al carrito</button>
          </div>
        </div>
      </div>
    </div>

    */