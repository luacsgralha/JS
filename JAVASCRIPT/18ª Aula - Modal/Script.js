let modal, btn, span
modal = document.getElementById("myModal")
btn = document.getElementById("myBnt")
span = document.getElementById("fechar")

btn.addEventListener("click", abrir)
function abrir()
{
    modal.style.display = "block"
}

span.addEventListener("click", fechar)
function fechar()
{
    modal.style.display = 'none'
}v