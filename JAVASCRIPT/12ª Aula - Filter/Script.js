//O método filter() Cria um novo Array com o resultado do filtro aplicado pelo método, ou seja, o elementos que "passaram" na condição configurada no filtro.

const idades = [32,33,16,40];
let filtroidade = idades.filter(idade);
let receber = document.getElemetById("demo")

receber.innerHTML = filtroidade

function idade(idades)
{
    return idades >= 18;
}