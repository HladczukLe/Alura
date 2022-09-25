function converter(){
    var escala1 = document.querySelector('select#escala1').value
    var escala2 = document.querySelector('select#escala2').value
    var graus = Number(document.querySelector('input#graus').value)
    var resultado = document.querySelector('.resultado')
    
    if(escala1 == 'celsius'){
        if(escala2 == 'celsius' || escala2 == 'selecione'){
            resultado.innerHTML = `Algo deu errado, tente novamente!`
        }
        else if(escala2 == 'fahrenheit'){
            grausF = (graus * 1.8) + 32
            resultado.innerHTML = `Está ${grausF.toFixed(1)}°F hoje!`
            
        }
        else if(escala2 == 'kelvin'){
            grausK = graus+273
            resultado.innerHTML = `Está ${grausK.toFixed(1)}K hoje!`
        }
    }
    else if(escala1 == 'fahrenheit'){
        if(escala2 == 'fahrenheit' || escala2 == 'selecione'){
            resultado.innerHTML = `Algo deu errado, tente novamente!`
        }
        else if(escala2 == 'celsius'){
            grausC = (graus - 32)/1.8
            resultado.innerHTML = `Está ${grausC.toFixed(1)}°C hoje!`
        }
        else if(escala2 == 'kelvin'){
            grausK = (graus-32)* (5/9) + 273
            resultado.innerHTML = `Está ${grausK.toFixed(1)}K hoje!`
        }
    }
    else if(escala1 == 'kelvin'){
        if(escala2 == 'kelvin' || escala2 == 'selecione'){
         resultado.innerHTML = `Algo deu errado, tente novamente!`
        }
        else if(escala2 == 'celsius'){
         grausC = graus - 273
         resultado.innerHTML = `Está ${grausC.toFixed(1)}°C hoje!`
        }
        else if(escala2 == 'fahrenheit'){
          grausF = (graus-273)* 1.8 + 32
          resultado.innerHTML = `Está ${grausF.toFixed(1)}°F hoje!`
        }
    }
  }
