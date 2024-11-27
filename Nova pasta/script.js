const numero = document.querySelector("#numeroUsuario")
const btnTabuada = document.querySelector("#btnTabuada")
const resultado = document.querySelector("#res")

function resultadoCalculo() {
    
    var numeroConvertido = Number(numero.value)
    
    var inicial = 1
    while(inicial<=10){

        resultado.innerHTML += `<p>${numeroConvertido} x ${incial} = ${inicial * numeroConvertido} </p>` 
    }
     }

     btnsTabuada.addEventListener("click", resultadoCalculo)
