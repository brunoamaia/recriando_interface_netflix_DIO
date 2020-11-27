// pegar a informação na "seção"
const id = sessionStorage.getItem("movie");

// Ajusto do ID
let newID = id
if (id < 10) {
  newID = '0'+id
}

document.querySelector(".background").innerHTML = `<img  class="background" src="../../img/banner/banner${newID}.jpg" alt="">`

let lastInfo = ''
if( moreDataFake[id].type === "Filme") {
  lastInfo = `<p>Ano: ${moreDataFake[id].Season}</p>`
} else {
  lastInfo = `<p> Temporadas: ${moreDataFake[id].Season.total}</p>`
  lastInfo += `<span> Ano * Episódios</span>`
  for (let i = 0; i < moreDataFake[id].Season.total; i++) {
    lastInfo += `<p> ${moreDataFake[id].Season.year[i]} - ${moreDataFake[id].Season.episodes[i]} </p>`
  }
}

document.querySelector(".info").innerHTML = `
  <h1>${moreDataFake[id].name}</h1>
  <span>Estilo: ${moreDataFake[id].type} <br> Gênero: ${moreDataFake[id].genre}</span>
  <p>Sinopse: ${moreDataFake[id].overview}</p>
  <span>Onde ver: ${moreDataFake[id].access}</span>
  ${lastInfo}
`