class Productos {
  constructor(nombreP, precioP, diasP){
    this.nombreP = nombreP,
    this.precioP = precioP,
    this.diasP = diasP
  }
}

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

const agregarLugares = (nombreP, precioP, diasP) => {
  const producto = new Productos(nombreP, precioP, diasP)
  return producto
}

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
  }
})

$(".btnPetalo").prepend('<button><img class="petalo-btn" src="../imagenes/sakura-btn.png" alt="sakura10"></button>')

$(".petalo-btn").on("click", () => {
  $(".petalo").slideToggle()
})

/*
class Usuario {
  constructor(nombre, contraseña){
    this.nombre = nombre;
    this.contraseña = contraseña;
  }
}

const usuario1 = new Usuario ("jonathan", "coderhouse")

const confirmacion = () => {

  let bucle = true

  while (bucle) {

    const nombre = prompt("ingresa tu nombre(jonathan)");
    const contraseña = prompt("ingresa tu contraseña(coderhouse)");

    if (nombre === usuario1.nombre && contraseña === usuario1.contraseña){
      bucle = false
      
      let ciclo = true;

      while (ciclo) {

        let nombreP = prompt("Nombre del lugar");
        let precioP = Number(prompt("Precio del paquete"));
        let diasP = Number(prompt("Cantidad de dias"));

        listaProductos.push(agregarLugares(nombreP, precioP, diasP))

        localStorage.setItem("lista", JSON.stringify(listaProductos))

        ciclo = confirm("Deseas agregar otro mas?")
      }
      break;
  } else {
    alert("Datos incorrectos")
  }
 }
}
confirmacion()

*/