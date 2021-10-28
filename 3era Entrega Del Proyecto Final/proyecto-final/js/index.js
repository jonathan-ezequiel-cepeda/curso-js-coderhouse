$(".btnPetalo").prepend('<button><img class="petalo-btn" src="./imagenes/sakura-btn.png" alt="sakura10"></button>')

$(".petalo-btn").on("click", () => {
  $(".petalo").slideToggle()
})