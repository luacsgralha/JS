let car =
{
    modelo : "fiat",
    ano : 2023,
    cor : "Azul",
}

let Eu = 
{
    nome : "lucas",
    ano : 1997,
    escola : "flavio la selva",
}

let matheus = 
{
    PrimeiroNome: "Matheus",
    SegundoNome: "Coladin",
    Idade: 35,
    Altura: 3.85,
    Peso: 26.3,
    fullName: function()
    {
        return this.PrimeiroNome + "" + this.SegundoNome
    }
}

let a = ["a", 2, "b"]

const tarefas =
[
{
    id: 1,
    texto:"Levar o lixo para fora",
    Complatado: true,
},
{
    id: 2,
    texto: "Fazer miojo",
    conmpletando: true,
},
{
    id: 3,
    texto: "Dormir",
    Completando: false,
}
]