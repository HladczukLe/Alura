// https://cdn-icons-png.flaticon.com/512/64/64572.png default icon
// https://cdn-icons-png.flaticon.com/128/4113/4113028.png" woman icon
// https://cdn-icons-png.flaticon.com/128/147/147142.png man icon
// https://cdn-icons-png.flaticon.com/128/1785/1785918.png woman icon
// https://png.pngtree.com/png-vector/20220817/ourmid/pngtree-cartoon-man-avatar-vector-ilustration-png-image_6111064.png man icon

var listaJogadores = [];

function calculaPontos(jogador) {
    var pontos = jogador.vitorias*3 + jogador.empates;
    return pontos;
}
console.log(jogador)


function exibeJogadoresTela(listaJogadores) {
    var elemento = ""
    for (let i = 0; i < listaJogadores.length; i++) {
        
        elemento+= `<tr><td>${listaJogadores[i].icone}</td>`
        elemento+= `<td>${listaJogadores[i].nome}</td>`
        elemento+= `<td>${listaJogadores[i].vitorias}</td>`
        elemento+= `<td>${listaJogadores[i].empates}</td>`
        elemento+= `<td>${listaJogadores[i].derrotas}</td>`
        elemento+= `<td>${listaJogadores[i].pontos}</td>`
        elemento+= `<td><button onClick="adicionarVitoria(${i})">Vitória</button></td>`
        elemento+= `<td><button onClick="adicionarEmpate(${i})">Empate</button></td>`
        elemento+= `<td><button onClick="adicionarDerrota(${i})">Derrota</button></td>`
        elemento+= "</tr>"
    }

    var tabelaJogadores = document.querySelector("tbody#tabelaJogadores");
    tabelaJogadores.innerHTML = elemento;
}

exibeJogadoresTela(listaJogadores)

function adicionarVitoria(i) {
    var jogador = listaJogadores[i];
    jogador.vitorias++;
    jogador.pontos = calculaPontos(jogador);
    exibeJogadoresTela(listaJogadores);
}

function adicionarEmpate(i) {
    var jogador = listaJogadores[i];
    jogador.empates++;
    jogador.pontos = calculaPontos(jogador);
    exibeJogadoresTela(listaJogadores)
}

function adicionarDerrota(i) {
    var jogador = listaJogadores[i];
    jogador.derrotas++;
    exibeJogadoresTela(listaJogadores)
}

function adicionarJogador() {
    var jogador = document.querySelector("input#jogador").value;
    var icon = document.querySelector("input#icon").value;
    var erro = document.querySelector("p#msgErro");
    
    if (icon.endsWith(".jpg")||icon.endsWith(".png")||icon.endsWith(".jpeg")) {
        var novoJogador = {icone: `<img src="${icon}" class="page-logo" alt="">`, nome: jogador, vitorias: 0, empates: 0, derrotas: 0, pontos: 0};
        listaJogadores.push(novoJogador)
        exibeJogadoresTela(listaJogadores)
    }
    else {
        erro.innerHTML = "Endereço de filme inválido! Insira uma url que termine em .jpg, .png ou .jpeg";
        console.error("Endereço de filme inválido");
    }
    document.querySelector("input#jogador").value = "";
    document.querySelector("input#icon").value = "";
}
