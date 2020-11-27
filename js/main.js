// Uso de "sessionStorage"
// permite salvar dados na aba do navegador até o mesmo ser fechado

// Remover dado de banner do "sessionStorage"
/*if (typeof(Storage) !== "undefined") {
  sessionStorage.removeItem("movie")
}*/

// mudar de página com o Id do banner
let movieId = sessionStorage.getItem("movie") || 8;
if (movieId < 10) {
  movieId = '0'+movieId
}
function aboutMovie() {
  sessionStorage.setItem("movie", parseInt(movieId));
}

// mudar de página de mais informações
function moreAboutMovie() {
  sessionStorage.setItem("movie", parseInt(movieId));
}

// Modificar os dados do banner
function handleChangeBanner(id){
  movieId = id;
  document.querySelector(".titulo").innerHTML = `${dataFake[parseInt(id)].name}`
  document.querySelector(".descricao").innerHTML = `${dataFake[parseInt(id)].overview}`
  document.querySelector(".filme-principal").style.background = `linear-gradient(rgba(0,0,0,0.6), rgba(0,0,0,0.6)), url(../img/banner/banner${id}.jpg)`
  document.querySelector(".filme-principal").style.backgroundPosition = `0 +10%`
}

window.onload = handleChangeBanner(movieId);
// auto preencher os filmes do carrossel 
/*var movieId = ['00', '01', '02', '03', '04', '05', '06', '07', '08', '09', '10']
var carrousel = document.querySelector("#auto-complete-carousel")

var carouselList = `<div class="owl-carousel owl-theme"></div>`

for (let i = 0; i < movieId.length; i++) {
  carouselList += `<div class="item"> <img class="box-filme" src="./img/mini/mini${movieId[i]}.jpg" alt=""> </div>`
  /*i == 0 ? ( 
    carrousel.innerHTML = `<div class="item"> <img class="box-filme" src="./img/mini/mini${movieId[i]}.jpg" alt=""> </div>`
  ) : (
    carrousel.innerHTML += `<div class="item"> <img class="box-filme" src="./img/mini/mini${movieId[i]}.jpg" alt=""> </div>`
  )
  console.log(i)
  
}
carouselList += [`</div>`]
carrousel.innerHTML = carouselList
console.log(carouselList)


window.onload = initPage;
var loadScriptCarousel = document.querySelector(".script-carousel")
async function initPage(){
  loadScriptCarousel.innerHTML = `
  <script src="./js/owl/jquery.min.js"></script>
  <script src="./js/owl/owl.carousel.min.js"></script>
  <script src="./js/owl/main.js"></script>
  `
} */
