var bulbasauro = {
    nome: "Bulbasauro",
    imagem:"https://assets.pokemon.com/assets/cms2/img/pokedex/full/001.png",
    atributos: {
        altura: 0.7,
        ataque:3,
        ataque_especial:4,
        defesa:3,
        velocidade:3,
        vida:3,
    }
};
var squirtle = {
    nome: "Squirtle",
    imagem: "https://assets.pokemon.com/assets/cms2/img/pokedex/full/007.png",
    atributos: {
        altura: 0.5,
        ataque:3,
        ataque_especial:3,
        defesa:4,
        velocidade:3,
        vida:3,
    }
};
var charmander = {
    nome: "Charmander",
    imagem: "https://assets.pokemon.com/assets/cms2/img/pokedex/full/004.png",
    atributos: {
        altura: 0.6,
        ataque:4,
        ataque_especial:4,
        defesa:3,
        velocidade:4,
        vida:3,
    }
};
var caterpie = {
    nome: "Caterpie",
    imagem: "https://assets.pokemon.com/assets/cms2/img/pokedex/full/010.png",
    atributos: {
        altura: 0.3,
        ataque:2,
        ataque_especial:2,
        defesa:3,
        velocidade:3,
        vida:3,
    }
};
var weedle = {
    nome: "Weedle",
    imagem: "https://assets.pokemon.com/assets/cms2/img/pokedex/full/013.png",
    atributos: {
        altura: 0.3,
        ataque:3,
        ataque_especial:2,
        defesa:2,
        velocidade:3,
        vida:3,
    }
};
var pidgey = {
    nome: "Pidgey",
    imagem: "https://assets.pokemon.com/assets/cms2/img/pokedex/full/016.png",
    atributos: {
        altura: 0.3,
        ataque:3,
        ataque_especial:3,
        defesa:3,
        velocidade:4,
        vida:3,
    }
};
var rattata = {
    nome: "Rattata",
    imagem: "https://assets.pokemon.com/assets/cms2/img/pokedex/full/019.png",
    atributos: {
        altura: 0.3,
        ataque:4,
        ataque_especial:2,
        defesa:3,
        velocidade:4,
        vida:2,
    }
};
var beedrill = {
    nome: "Beedrill",
    imagem: "https://assets.pokemon.com/assets/cms2/img/pokedex/full/015.png",
    atributos: {
        altura: 1,
        ataque: 6,
        ataque_especial: 3,
        defesa:3,
        velocidade: 5,
        vida: 4,
    }
};
var charmeleon = {
    nome: "Charmeleon",
    imagem: "https://assets.pokemon.com/assets/cms2/img/pokedex/full/005.png",
    atributos: {
        altura: 1.1,
        ataque:4,
        ataque_especial:5,
        defesa:4,
        velocidade:5,
        vida:4,
    }
};
var arbok = {
    nome: "Arbok",
    imagem: "https://assets.pokemon.com/assets/cms2/img/pokedex/full/024.png",
    atributos: {
        altura: 3.5,
        ataque:6,
        ataque_especial:4,
        defesa:5,
        velocidade:5,
        vida:4,
    }
};
var pikachu = {
    nome: "Pikachu",
    imagem: "https://assets.pokemon.com/assets/cms2/img/pokedex/full/025.png",
    atributos: {
        altura: 0.4,
        ataque:4,
        ataque_especial:3,
        defesa:3,
        velocidade:6,
        vida:3,
    }
};
var nidorina = {
    nome: "Nidorina",
    imagem: "https://assets.pokemon.com/assets/cms2/img/pokedex/full/030.png",
    atributos: {
        altura: 0.8,
        ataque:4,
        ataque_especial:4,
        defesa:4,
        velocidade:4,
        vida:5,
    }
};
var nidorino = {
    nome: "Nidorino",
    imagem: "https://assets.pokemon.com/assets/cms2/img/pokedex/full/033.png",
    atributos: {
        altura: 0.9,
        ataque:5,
        ataque_especial:4,
        defesa:4,
        velocidade:4,
        vida:4,
    }
};
var vulpix = {
    nome: "Vulpix",
    imagem: "https://assets.pokemon.com/assets/cms2/img/pokedex/full/037.png",
    atributos: {
        altura: 0.6,
        ataque:3,
        ataque_especial:3,
        defesa:3,
        velocidade:4,
        vida:3,
    }
};
var jigglypuff = {
    nome: "Jigglypuff",
    imagem: "https://assets.pokemon.com/assets/cms2/img/pokedex/full/039.png",
    atributos: {
        altura: 0.5,
        ataque:3,
        ataque_especial:3,
        defesa:2,
        velocidade:2,
        vida:7,
    }
};


var cartaMaquina;
var cartaJogador;
var cartas = [bulbasauro,squirtle,charmander,caterpie,weedle,pidgey,rattata,beedrill,charmeleon,arbok,pikachu,nidorina,nidorino,vulpix,jigglypuff];


function sortearCarta() {
    var numeroCartaMaquina = parseInt(Math.random()*cartas.length);
    cartaMaquina = cartas[numeroCartaMaquina];

    var numeroCartaJogador = parseInt(Math.random()*cartas.length);
    while (numeroCartaMaquina==numeroCartaJogador) {
        numeroCartaJogador = parseInt(Math.random()*cartas.length)
    }

    cartaJogador = cartas[numeroCartaJogador];

    document.querySelector("button#btnSortear").disabled = true;
    document.querySelector("button#btnJogar").disabled = false;

    exibirCartaJogador();
}

function obtemAtributoSelecionado() {
    var radioAtributo = document.getElementsByName("atributo");
    for (var i = 0; i < radioAtributo.length; i++) {
      if (radioAtributo[i].checked) {
        return radioAtributo[i].value;
      }
    }
  }

function jogar() {
    console.log("chamou");
    var atributoSelecionado = obtemAtributoSelecionado();
    var divResultado = document.querySelector("div#resultado")
    var valorCartaJogador = cartaJogador.atributos[atributoSelecionado]
    var valorCartaMaquina = cartaMaquina.atributos[atributoSelecionado]

    if (valorCartaJogador>valorCartaMaquina) {
        htmlResultado=`<p class="resultado">Parabéns, você ganhou!</p>`
        divResultado.style.background = '#37a71b'
    }
    else if (valorCartaJogador<valorCartaMaquina) {
        htmlResultado = `<p class="resultado">Que pena, você perdeu!</p>`
        divResultado.style.background = '#b40000'
    }
    else if(valorCartaJogador==valorCartaMaquina){
        htmlResultado = `<p class="resultado">Empatou</p>` 
    }

    divResultado.innerHTML=htmlResultado;
    document.querySelector("button#btnJogar").disabled=true;
    console.log(valorCartaJogador +"\n MAquina: "+valorCartaMaquina)
    console.log("aaa   "+ atributoSelecionado)
    exibirCartaMaquina();
}

function exibirCartaJogador() {
    var imagemCartaJogador = document.querySelector("div#carta-jogador");
    imagemCartaJogador.style.backgroundImage = `url(${cartaJogador.imagem})`
    var moldura = `<img src="https://www.alura.com.br/assets/img/imersoes/dev-2021/card-super-trunfo-transparent.png" style=" width: inherit; height: inherit; position: absolute;">`
    var tagHTML = `<div id="opcoes" class="carta-status">`

    var opcoesTexto = "";
    for (var atributo in cartaJogador.atributos) {
        opcoesTexto += `<input type="radio" name="atributo" value="${atributo}"> ${atributo}: ${cartaJogador.atributos[atributo]}</br>`
    }
    var nome = `<p class="carta-subtitle">${cartaJogador.nome}</p>`
    imagemCartaJogador.innerHTML = moldura + nome + tagHTML + opcoesTexto + "</div>"
} 
function exibirCartaMaquina() {
    var imagemCartaMaquina = document.querySelector("div#carta-maquina");
    imagemCartaMaquina.style.backgroundImage = `url(${cartaMaquina.imagem})`;
    var moldura = `<img src="https://www.alura.com.br/assets/img/imersoes/dev-2021/card-super-trunfo-transparent.png" style=" width: inherit; height: inherit; position: absolute;">`
    var tagHTML = `<div id="opcoes" class="carta-status">`

    var opcoesTexto = "";
    for (var atributo in cartaMaquina.atributos) {
        opcoesTexto += `${atributo}: ${cartaMaquina.atributos[atributo]}</br>`
    }
    var nome = `<p class="carta-subtitle">${cartaMaquina.nome}</p>`
    imagemCartaMaquina.innerHTML = moldura + nome + tagHTML + opcoesTexto + "</div>"
}