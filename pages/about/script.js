// pegar a informação na "seção"
const id = sessionStorage.getItem("movie");


let trailer = document.querySelector(".trailer")

trailer.innerHTML = `<iframe id="ytplayer" type="text/html" width="280" height="158" 
  src="http://www.youtube.com/embed/${dataFake[id].trailler}"
  frameborder="0" controls=0 >
`

console.log('Inicio')
console.log(`filme = ${id}`)
console.log(`data fake = ${dataFake[0].trailler}`)
