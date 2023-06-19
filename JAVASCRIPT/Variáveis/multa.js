let valorvelocidade = document.getElementById("Valordavelocidade");
let resultadodavelocidade = document.getElementById("Resultadodavelocidade");

function gerarmulta()
{
    if (valordavelocidade.value > 80) {
        let sub = valorvelocidade.valeu - 80;
        let mult = sub * 5;
        resultadodavelocidade.innerHTML = mult
    }
    else{
        resultadodavelocidade.innerHTML = "Você não foi multado"
    }
}