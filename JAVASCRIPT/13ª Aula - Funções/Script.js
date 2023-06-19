function mult(a,b)
{
    return a*b
}

let mult = (t,u) =>
{
    return t*u
}

//Sistema da função é definida como a function palavras-chave, seguida por nome, seguidopor parênteses().
//Quando o JavaScript atingeum return instruções, a função para ser executada.
//Se a função foi invocada a parti de uma instrução, o JavaScript "retornará" para o executar o código após instrução invocada.

let celsius = document.getElementById("celsius").value
let resultado = document.getElementById("resultado")

function tocelsius()
{
  return resultado.innerHTML = (celsius.value*1.8) + 32
}

tocelsius(5)

//Crie uma função no qual utilize parâmetros para descobrir se um valor é par ou impar.

function soma(x,y)
{
    return x + y;
}

function imparoupar(q)
{
    if(q % 2 == 0)
    {
        return console.log(par)
    }
    else
    {
        return console.log(Impar)
    }

}


//Escreva uma função que retorne o maior de dois números.

function maior(z,c)
{
    if(z > c)
    {
        return console.log(z)
    }
    else
    {
        return console.log(c)
    }
}

const Maior = (h,i) => {h>i? console.log(h) : console.log(i)}
