let receber = document.getElementById("recebernumero");
let mostrar = document.getElementById("parouimpar");

function Par()
{
    if(receber.value % 2 == 0)
    {
        mostrar.innerHTML = "O número é par"
    }
    else
    {
        mostrar.innerHTML = "O número é impar"
    }
}