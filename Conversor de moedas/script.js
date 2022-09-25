//Projeto ainda não finalizado

function Converter() {
    var moeda1 = document.querySelector("select#moeda1").value;
    var moeda2 = document.querySelector("select#moeda2").value;
    var valorMontante = Number(
      document.querySelector("input#valorMontante").value
    );
    var valorMoeda = Number(document.querySelector("input#valorMoeda").value);
    var valorFinal = document.querySelector("h2#valorFinal");
  
    if (moeda2 == "iene") {
      valorConvertido = valorMontante * valorMoeda;
    } else {
      valorConvertido = valorMontante / valorMoeda;
    }
    valorFinal.innerHTML = `${valorMontante.toFixed(
      2
    )} = ${valorConvertido.toFixed(2)}`;
  
    /*  if (moeda1 == "real") {
        if (moeda2 == "real" || moeda2 == "selecione") {
          valorConvertido.innerHTML = `Algo deu errado, por favor tente novamente!`;
        } else if (moeda2 == "dolar") {
          dolar = valor / 5.17;
          valorConvertido.innerHTML = `R$${valor} = U$${dolar.toFixed(2)}`;
        } else if (moeda2 == "euro") {
          euro = valor / 5.17;
          valorConvertido.innerHTML = `R$${valor} = €${euro.toFixed(2)}`;
        } else if (moeda2 == "libra") {
          libra = valor / 6;
          valorConvertido.innerHTML = `R$${valor} = £${libra.toFixed(2)}`;
        }
      }
  
      if (moeda1 == "dolar") {
        if (moeda2 == "dolar" || moeda2 == "selecione") {
          valorConvertido.innerHTML = `Algo deu errado, por favor tente novamente!`;
        } else if (moeda2 == "real") {
          real = valor * 5.17;
          valorConvertido.innerHTML = `U$${valor} = R$${real.toFixed(2)}`;
        } else if (moeda2 == "euro") {
          euro = valor / 1;
          valorConvertido.innerHTML = `U$${valor} = €${euro.toFixed(2)}`;
        } else if (moeda2 == "libra") {
          libra = valor / 1.15;
          valorConvertido.innerHTML = `U$${valor} = £${libra.toFixed(2)}`;
        }
      }
  
      if (moeda1 == "euro") {
        if (moeda2 == "euro" || moeda2 == "selecione") {
          valorConvertido.innerHTML = `Algo deu errado, por favor tente novamente!`;
        } else if (moeda2 == "dolar") {
          dolar = valor / 1;
          valorConvertido.innerHTML = `€${valor} = U$${dolar.toFixed(2)}`;
        } else if (moeda2 == "real") {
          real = valor * 5.17;
          valorConvertido.innerHTML = `€${valor} = R$${real.toFixed(2)}`;
        } else if (moeda2 == "libra") {
          libra = valor / 1.15;
          valorConvertido.innerHTML = `€${valor} = £${libra.toFixed(2)}`;
        }
      }
  
      if (moeda1 == "libra") {
        if (moeda2 == "libra" || moeda2 == "selecione") {
          valorConvertido.innerHTML = `Algo deu errado, por favor tente novamente!`;
        } else if (moeda2 == "dolar") {
          dolar = valor * 1.15;
          valorConvertido.innerHTML = `£${valor} = U$${dolar.toFixed(2)}`;
        } else if (moeda2 == "euro") {
          euro = valor * 1.15;
          valorConvertido.innerHTML = `£${valor} = €${euro.toFixed(2)}`;
        } else if (moeda2 == "real") {
          real = valor * 6;
          valorConvertido.innerHTML = `£${valor} = R$${real.toFixed(2)}`;
        }
      }*/
  }
