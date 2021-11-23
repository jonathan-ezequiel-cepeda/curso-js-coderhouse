//Variables

const urlDolar = "https://www.dolarsi.com/api/api.php?type=valoresprincipales"

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

//Boton flor, activa y desactiva la animacion de los petalos

$(".btnPetalo").prepend('<button><img class="petalo-btn" src="./imagenes/sakura-btn.png" alt="sakura10"></button>')

$(".petalo-btn").on("click", () => {
  $(".petalo").slideToggle()
})