/*var s = "6";
var w = "5";
var x = 5;
var y = 8;
var z = x + y;
var s = w + y;
console.log ("Os números são:")
console.log ("5")
console.log (s)
console.log (w)
console.log (x)
console.log (y)
console.log (z)

console.log("Let não pode ser redeclarando")

let j;
 j = 18;
 j = 20;
console.log(j)

console.log("Const")
const pi = 3.14

let soma = 4 + 3;
console.log("A soma é " + soma);
let subtracao = 10 - 5;
console.log("A subtração é " + subtracao);
let multiplicacao = 7 * 9;
console.log("multiplicação");
let divisao =6/2;
console.log("A divisão é " + divisao);
let expoente = 5**2;
console.log(expoente)
let modulo = 13%2;
console.log(modulo)

let maior = 3 > 2;
console.log(maior);
let menor = 3 < 2;
console.log (menor);

let maiorigual = 3 >= 2;
console.log(maiorigual);
let menorigual = 3 <= 2;
console.log(menorigual);

let comparacao = 3 > 3;
console.log(comparacao);
let comparacao2 = 3 >= 3;
console.log(comparacao2);*/

let n1 = document.getElementById("n1");
let n2 = document.getElementById("n2");
let n3 = document.getElementById("n3");
let n4 = document.getElementById("n4");
let aprovado = document.getElementById("resultado");
let GerarMédia;

function media()
{
    GerarMédia = (parseInt(n1.value) + parseInt(n2.value) + parseInt (n3.value) + parseInt (n4.value))/4;
    if(GerarMédia >= 7)
    {
        aprovado.innerHTML = "a sua nota foi " + GerarMédia + " você foi aprovado"
    }

    else
    {
        aprovado.innerHTML = "a sua nota foi " + GerarMédia + " você foi reprovado"  
    }

}