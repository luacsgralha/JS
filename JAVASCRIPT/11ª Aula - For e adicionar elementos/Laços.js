let x = document.getElementById("valorinicial");
let y = document.getElementById("valorfinal");

function Apeter()
{
    while(x.value <= parseInt(y.value));
{
    //Criar elemento p 
    let paragrafo = document.createElement("p")

    let texto = document.createTextNode(x.value);

    //adicionar um texto de elemento
    paragrafo.appendChild(texto);

    //adicionar o elemento body
    document.getElementById("contar").appendChild(paragrafo);

    console.log(x.value);
    x.value++ //x = x + 1
}
}