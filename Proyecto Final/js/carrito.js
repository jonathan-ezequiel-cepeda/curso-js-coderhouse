//Variables

let listaObjetos = [];
let imprimirDatos = document.getElementById("paqueteDinamico2")
let btn = document.getElementById("finalizarCompra")
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

//Lista del carrito

if (localStorage.getItem("carrito") == null) {
    $("#finalizarCompra").hide();
    
    listaObjetos = JSON.parse(localStorage.getItem("carrito"))
    
    const div = document.createElement("div");
    div.innerHTML = `  
    <ul class="list-group">
    <li class="list-group-item d-grid gap-2 col-6 mx-auto vertical list-group-item-danger"><p>No hay nada en el carrito. Ir a: <a class="nav-link active text-danger" aria-current="page" href="servicios.html">Servicios</a></p></li>
    </ul>
  `
     paqueteDinamico2.appendChild(div);
} else {
    listaObjetos = JSON.parse(localStorage.getItem("carrito"))

    for (let i = 0; i < listaObjetos.length; i++){
      const div = document.createElement("div");
      div.innerHTML = `  
      <ul class="list-group">
      <li class="list-group-item d-grid gap-2 col-6 mx-auto vertical list-group-item-danger">Paquete ${listaObjetos[i].nombreP}, ${listaObjetos[i].precioP} Dolares</li>
      </ul>
      `
      paqueteDinamico2.appendChild(div);
    }
}

//Boton de aceptar compra

const aceptarCompra = () => {

  let total = 0

  listaObjetos.forEach(e => {

    total += e.precioP

  })
  
  Swal.fire({
    title: 'El total que vas a pagar es de: ' + total + ' Dolares' ,
    showCancelButton: true,
    confirmButtonText: 'Comprar',
    iconColor: '#E6B3D3',
    confirmButtonColor: '#FF3963'
  }).then((result) => {
    if (result.isConfirmed) {
      Swal.fire({
        title: 'Gracias por elegirnos! Nos contactaremos a la brevedad' ,
        icon: 'success',
        iconColor: '#E6B3D3',
        confirmButtonColor: '#FF3963'
      })
      setTimeout(location.reload.bind(location), 1500);
    } else if (result.isDenied) {
    }
  })

  localStorage.removeItem("carrito")

}

btn.addEventListener("click", () => {
  aceptarCompra()
})

