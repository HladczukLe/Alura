var cartazFilme = document.querySelector("ul#listaFilmes");
var listaFilme = [
  "http://www.intrinseca.com.br/blog/wp-content/uploads/2017/05/Wonder-Poster-664x1024.jpg",
  "https://cinema10.com.br/upload/series/series_1650_MV5BZGIxNDUzMDktYTg1ZC00OGRiLTliNWUtZmY4NTE0MDU0YWU4XkEyXkFqcGdeQXVyODUxOTU0OTg@._V1_.jpg"
];
var listaNomeFilme = ["Wonder", "Manifest"];

for (var i = 0; i < listaFilme.length; i++) {
  cartazFilme.innerHTML += `<li><img src="${listaFilme[i]}"></br><label>${listaNomeFilme[i]}</label></li>`;
}

function adicionarFilme() {
  var filmeFavorito = document.querySelector("input#linkFilme").value;
  var nomeFilme = document.querySelector("input#nomeFilme").value;
  var erro = document.querySelector("div#msgErro");

  if (filmeFavorito.endsWith(".jpg")) {
    listaNomeFilme.push(nomeFilme);
    listaFilme.push(filmeFavorito);
    var adiciona = `<li><img src="${listaFilme[i]}"></br><label>${listaNomeFilme[i]}</label></li>`;
    cartazFilme.innerHTML += adiciona;
    erro.innerHTML = "Filme adicionado!";
  } else {
    erro.innerHTML =
      "Endereço de filme inválido! Insira uma url que termine em .jpg";
    console.error("Endereço de filme inválido");
  }
  document.querySelector("input#linkFilme").value = "";
  document.querySelector("input#nomeFilme").value = "";
}
