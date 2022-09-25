function calcular() {
    var nota1Bim = Number(document.getElementById('nota1Bim').value);
    var nota2Bim = Number(document.getElementById('nota2Bim').value);
    var nota3Bim = Number(document.getElementById('nota3Bim').value);
    var resultado = document.querySelector('.resultado');
    media = (nota1Bim+nota2Bim+nota3Bim)/3
    
    resultado.innerHTML = `Sua média é ${media.toFixed(1)}`;

    if (media>=0 && media < 6) {
        resultado.innerHTML = `Sua média é ${media.toFixed(1)}. Você infelizmente foi <p class = "reprovacao">reprovado!</p>`;
    }
    else if (media >= 6 && media <= 10) {
        resultado.innerHTML = `Parabéns! Sua média é ${media.toFixed(1)}. Você foi <p class = "aprovacao">aprovado!</p>`;
    }
    else {
        resultado.innerHTML = `Verifique os dados e tente novamente!`;

    }
}
