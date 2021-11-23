//Clases

class Productos {
  constructor(nombreP, precioP, diasP){
    this.nombreP = nombreP,
    this.precioP = precioP,
    this.diasP = diasP
  }
}

//Variables

const urlDolar = "https://www.dolarsi.com/api/api.php?type=valoresprincipales"

const tokyo = new Productos( "Toyko", 2000, 5)
const osaka = new Productos("Osaka", 1700,  7)
const kyoto = new Productos("Kyoto", 1800, 4)
const fukuoka = new Productos("Fukuoka", 1500, 9)
const nagano = new Productos("Nagano", 1400, 15)

let listaProductos = [tokyo, osaka, kyoto, fukuoka, nagano]

if (localStorage.getItem("lista") == null) {
  listaProductos = [tokyo, osaka, kyoto, fukuoka, nagano]
} else {
  listaProductos = JSON.parse(localStorage.getItem("lista"))
}

//Funcion constructora

const agregarLugares = (nombreP, precioP, diasP) => {
  const producto = new Productos(nombreP, precioP, diasP)
  return producto
}

//funcion y evento para guardar un nuevo paquete

const guardarDatos = () => {
  let nombreP = document.getElementById("nombreB").value
  let precioP = Number(document.getElementById("precioB").value)
  let diasP = Number(document.getElementById("diasB").value)

  listaProductos.push(agregarLugares(nombreP, precioP, diasP))

  localStorage.setItem("lista", JSON.stringify(listaProductos))
}  

document.getElementById("agregarB").addEventListener("click", (e) => {
  let nombreP = document.getElementById("nombreB").value
  let precioP = document.getElementById("precioB").value
  let diasP = document.getElementById("diasB").value

  if (nombreP == "" || precioP == "" || diasP == "") { 
  } else {
    e.preventDefault()
    guardarDatos()

    Swal.fire({
      icon: 'success',
      title: `Agregaste el paquete ${nombreP}!`,
      iconColor: '#E6B3D3',
      confirmButtonColor: '#FF3963'
    }
    )

  }
})

//Funcion y evento para borrar los paquetes

document.getElementById("borrarB").addEventListener("click", () => {
  
  window.localStorage.clear()

  Swal.fire({
    icon: 'success',
    title: `Paquetes borrados exitosamente!`,
    iconColor: '#E6B3D3',
    confirmButtonColor: '#FF3963'
  }
  )
})

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




