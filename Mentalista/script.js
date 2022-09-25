var numeroSecreto = parseInt(Math.random() * 11);
var chances = 3;

function Chutar() {
  var chute = document.querySelector("input#valor").value;
  var resultado = document.querySelector("h2#resultado");
  
  if (chute < 0 || chute > 10 || chute.length == 0) {
    resultado.innerHTML = `Você deve colocar um número entre 0 e 10!`;
  } 
  else if (chute == numeroSecreto) {
    resultado.innerHTML = `Parabéns você acertou! &#x1F973`;
  } 
  else if (chute > numeroSecreto) {
    resultado.innerHTML = `Você errou! O número secreto é menor que o número chutado. Você ainda tem ${chances--} chances!`;
  } 
  else if (chute < numeroSecreto) {
    resultado.innerHTML = `Você errou! O número secreto é maior que o número chutado. Você ainda tem ${chances--} chances!`;
  }
  
  if (chances < 0) {
    resultado.innerHTML = `Suas chances acabaram! &#128542 O número secreto era ${numeroSecreto}`;
  }
  
}
