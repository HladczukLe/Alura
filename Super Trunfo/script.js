var bulbasauro = {
    imagem: `<img src="https://assets.pokemon.com/assets/cms2/img/pokedex/full/001.png"/>`,
    nome: "Bulbasauro",
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
    imagem: `<img src="https://assets.pokemon.com/assets/cms2/img/pokedex/full/007.png"/>`,
    nome: "Squirtle",
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
    imagem: `<img src="https://assets.pokemon.com/assets/cms2/img/pokedex/full/004.png"/>`,
    nome: "Charmander",
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
    imagem: `<img src="https://assets.pokemon.com/assets/cms2/img/pokedex/full/010.png"/>`,
    nome: "Caterpie",
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
    imagem: `<img src="https://assets.pokemon.com/assets/cms2/img/pokedex/full/013.png"/>`,
    nome: "Weedle",
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
    imagem: `<img src="https://assets.pokemon.com/assets/cms2/img/pokedex/full/016.png"/>`,
    nome: "Pidgey",
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
    imagem: `<img src="https://assets.pokemon.com/assets/cms2/img/pokedex/full/019.png"/>`,
    nome: "Rattata",
    atributos: {
        altura: 0.3,
        ataque:4,
        ataque_especial:2,
        defesa:3,
        velocidade:4,
        vida:2,
    }
};

var cartas = [bulbasauro,squirtle,charmander,caterpie,weedle,pidgey,rattata]

var cartaMaquina = 0;
var cartaJogador = 0;

function sortearCarta() {
    var numeroCartaMaquina = parseInt(Math.random()*3);
    cartaMaquina = cartas[numeroCartaMaquina];

    var numeroCartaJogador = parseInt(Math.random()*3);

    while (numeroCartaMaquina==numeroCartaJogador) {
        var numeroCartaJogador = parseInt(Math.random()*3)
    }

    cartaJogador = cartas[numeroCartaJogador];
    console.log(cartaJogador);

    document.querySelector("button#btnSortear").disabled = true;
    document.querySelector("button#btnJogar").disabled = false;

    var imagemCarta = document.querySelector("div#carta");
    imagemCarta.innerHTML = `${cartaJogador.imagem}<h3>${cartaJogador.nome}</h3><p>Altura: ${cartaJogador.atributos.altura}m</p><p>Ataque: ${cartaJogador.atributos.ataque}</p><p>Ataque Especial: ${cartaJogador.atributos.ataque_especial}</p><p>Defesa: ${cartaJogador.atributos.defesa}</p><p>Velocidade: ${cartaJogador.atributos.velocidade}</p><p>Vida: ${cartaJogador.atributos.vida}</p>`;

    exibirOpcoes()
}

function exibirOpcoes() {
    var opcoes = document.querySelector("div#opcoes");
    var opcoesTexto = ""
    
    for (var atributo in cartaJogador.atributos) {
        opcoesTexto += `${atributo} <input type="radio" name="atributo" value=${atributo} checked = true></br>`
    }
    opcoes.innerHTML = opcoesTexto;
}

function obtemAtributoSelecionado() {
    var radioAtributos = document.getElementsByName("atributo")
    for (var i = 0; i < radioAtributos.length; i++) {
        if (radioAtributos[i].checked == true) {
            return radioAtributos[i].value
        }
    }
}
function jogar() {
    var atributoSelecionado = obtemAtributoSelecionado()
    var elementoResultado = document.querySelector("div#resultado")
    var valorCartaJogador = cartaJogador.atributos[atributoSelecionado]
    var valorCartaMaquina = cartaMaquina.atributos[atributoSelecionado]

    if (valorCartaJogador>valorCartaMaquina) {
        elementoResultado.innerHTML = "Parabéns, você ganhou!"
    }
    else if (valorCartaJogador< valorCartaMaquina) {
        elementoResultado.innerHTML = "Que pena, você perdeu!"
    }
    else{
        elementoResultado.innerHTML = "Houve um empate"
    }
}