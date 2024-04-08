//Dobre os numeros
// indice        0  1   2   3  4  5 .......
const numeros = [5, 50, 80, 1, 2, 3, 8, 7, 11, 15, 22, 27];
const numerosEmDobro = numeros.map(valor => valor * 2 );
//console.log(numerosEmDobro);

//Para cada elemento:
//Retorne apenas uma string com o nome da pessoa
//Remova apenas a chave "nome" do objeto
//Adicione uma chave id em cada objeto

const pessoas = [
    {nome:'Luiz', idade:62},
    {nome:'Mariana', idade:45},
    {nome:'Tiago', idade:52},
    {nome:'Leo', idade:18},
    {nome:'Pedro', idade:25},
    {nome:'Wallace', idade:34},
];
const nomes = pessoas.map(obj => obj.nome);
//console.log(nomes);
const idades = pessoas.map(obj => ({ idade: obj.idade }));
//console.log(idades);

const  comIds = pessoas.map(function(obj,indice) {
    const newObj = {...obj};
    newObj.id = indice;
    return newObj;
});
console.log(comIds)