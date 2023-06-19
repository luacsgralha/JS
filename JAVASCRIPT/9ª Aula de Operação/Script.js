let valor1 = document.getElementById("valor1")
let valor2 = document.getElementById("valor2")
let sinal = document.getElementById("sinal")
let resultado = document.getElementById("resultado")

function calculo()
{

switch(sinal.value)
{
    case "+":
        let soma = parseInt(valor1.value) + parseInt(valor2.value)
        resultado.innerHTML = soma 
        break
    case "-":
        let subtração = parseInt(valor1.value) - parseInt(valor2.value)
        resultado.innerHTML = subtração 
        break
    case "*":
        let multiplicação = parseInt(valor1.value) * parseInt(valor2.value)
        resultado.innerHTML = multiplicação 
        break
    case "/":
        let divisão = parseInt(valor1.value) / parseInt(valor2.value)
        resultado.innerHTML = divisão
        break
}

}