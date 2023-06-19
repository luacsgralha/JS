let botao = document.getElementById('botao')
let corpo = document.body

function ModoDark()
{
    corpo.classList.toggle("dark-mode")
    botao.innerHTML = "Modo-Light"
}