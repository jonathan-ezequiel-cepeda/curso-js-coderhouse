//Variables

let listaObjetos = [];
let imprimirDatos = document.getElementById("paqueteDinamico")
const urlDolar = "https://www.dolarsi.com/api/api.php?type=valoresprincipales"

//Boton flor, activa y desactiva la animacion de los petalos

$(".btnPetalo").prepend('<button><img class="petalo-btn" src="../imagenes/sakura-btn.png" alt="sakura10"></button>')

$(".petalo-btn").on("click", () => {
  $(".petalo").slideToggle()
})

//API del dolar

$.get(urlDolar, (data, est) =>{

  if(est == "success"){

    data.forEach(element => {
      $("#dolar").append(       
      `
    <tr>
      <td>${element.casa.nombre}</td>s
      <td>${element.casa.venta}</td>
    </tr>
      `
      
      )
    })
  }
})

//Funcion para agregar paquetes

const agregar = (i) => {

  let carrito;
  if (localStorage.getItem("carrito") == null) {
      carrito = []
  } else {
      carrito = JSON.parse(localStorage.getItem("carrito"))
  }

  carrito.push(listaObjetos[i])
  localStorage.setItem("carrito", JSON.stringify(carrito))
  
  Swal.fire({
    icon: 'success',
    title: `Agregaste el paquete ${listaObjetos[i].nombreP} al carrito. Gracias!`,
    iconColor: '#E6B3D3',
    confirmButtonColor: '#FF3963'
  }
  )
}

//Texto que se muestra si no hay paquetes

if (localStorage.getItem("lista") == null) {
  let div = document.createElement("div");
  div.innerHTML =  `  
  
  <ul class="list-group">
  <li class="list-group-item d-grid gap-2 col-6 mx-auto vertical list-group-item-danger"><p>No hay paquetes para mostrar. Lo invitamos a <a class="nav-link active text-danger" aria-current="page" href="#contacto">Contactarnos</a></p></li>
  </ul>
  `
  paqueteDinamico.appendChild(div);
  
} else {
    listaObjetos = JSON.parse(localStorage.getItem("lista"))
}

//Lista que se muestra cuando hay paquetes

for (let i = 0; i < listaObjetos.length; i++){
  let div = document.createElement("div");
  div.innerHTML =  `  
  
  <div class="d-grid gap-2 col-6 mx-auto vertical ">
  <button type="button" class="btn btnColor fst-italic fw-bold" data-bs-toggle="modal" data-bs-target="#staticBackdrop${i}">Paquete ${listaObjetos[i].nombreP}</button>

  <div class="modal fade" id="staticBackdrop${i}" data-bs-backdrop="static" data-bs-keyboard="false" tabindex="-1" aria-labelledby="staticBackdropLabel" aria-hidden="true">
    <div class="modal-dialog modal-dialog-centered">
      <div class="modal-content">
        <div class="modal-header">
          <h5 class="modal-title" id="staticBackdropLabel">${listaObjetos[i].nombreP}</h5>
          <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
        </div>
        <div class="modal-body text-center fst-italic fw-bold">
          Este paquete incluye alojamiento por ${listaObjetos[i].diasP} días en un hotel 5 estrellas con desayuno y cena incluidos. Como así también, una excursión por día gratuita a diferentes lugares turísticos tanto dentro, como fuera de la ciudad.
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

