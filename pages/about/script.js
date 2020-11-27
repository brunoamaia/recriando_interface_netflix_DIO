// pegar a informação na "seção"
const id = sessionStorage.getItem("movie") || 8;

// inserir o Trailer
let trailer = document.querySelector(".trailer")
let width = window.innerWidth;
let height = 0

if (width < 400) {
  width = 280
  height = 158
} else if (width < 600) {
  width = 360
  height = 203
} else if (width < 1400){
  width = 600
  height = 338
} else {
  width = 1280
  height = 720
}

trailer.innerHTML = `<iframe id="ytplayer" type="text/html" width="${width}" height="${height}" 
  src="http://www.youtube.com/embed/${dataFake[id].trailler}?autoplay=1"
  autoplay="1" frameborder=0 controls=0 />
`

// Inserir imagem do Banner no background
let newID = id
if (id < 10) {
  newID = '0'+id
}
document.querySelector(".background").innerHTML = `<img  class="background" src="../../img/banner/banner${newID}.jpg" alt="">`
