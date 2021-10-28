$(".btnPetalo").prepend('<button><img class="petalo-btn" src="./imagenes/sakura-btn.png" alt="sakura10"></button>')

$(".petalo-btn").on("click", () => {
  $(".petalo").slideToggle()
})

$(".petalo-btn").slideUp(1000)
.slideDown(1000)
.slideUp(2000)
.slideDown(2000)
.slideUp(3000)
.slideDown(3000);