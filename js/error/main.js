// pegar a informação na "seção"
const id = sessionStorage.getItem("movie");

// Ajusto do ID
let newID = id
if (id < 10) {
  newID = '0'+id
}

document.querySelector(".background").innerHTML = `<img  class="background" src="../../img/banner/banner${newID}.jpg" alt="">`
