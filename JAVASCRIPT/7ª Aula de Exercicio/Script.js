let fruta = document.getElementById("Fruta");
let resultado = document.getElementById("resultado")

function Apertar ()
{


switch(fruta.value)
{
    case "banana":
        resultado.innerHTML = "Você escolheu banana"
        break;
        case "maçã":
            resultado.innerHTML = "Você escolheu maçã"
            break;
            default:
                resultado.innerHTML = "Não existe no nosso sistema está fruta"
}
}