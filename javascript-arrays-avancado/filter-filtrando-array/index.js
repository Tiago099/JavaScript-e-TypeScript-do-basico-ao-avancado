//filter -> Sempre retorna um array, com a mesma quantidade de elementos
// ou menos.

// Retorne os numeros maiores que 10
// indice        0  1   2   3  4  5 .......
const numeros = [5, 50, 80, 1, 2, 3, 8, 7, 11, 15, 22, 27];
const numerosaFiltrados = numeros.filter(valor => 10);
//console.log(numerosaFiltrados);




//Retornes as pessoas que tem o nome com 5 letras ou mais
//Retorne as pessoas com mais de 50 anos
//Retorne as pessoas cujo nome termina com a
const pessoas = [
    {nome:'Luiz', idade:62},
    {nome:'Mariana', idade:45},
    {nome:'Tiago', idade:52},
    {nome:'Leo', idade:18},
    {nome:'Pedro', idade:25},
    {nome:'Wallace', idade:34},
];
//Nomes com mais de 5 letras
//const pessoasComNomeGrande = pessoas.filter(obj => obj.nome.length >= 5);
//console.log(pessoasComNomeGrande);

// Mais de 50 anos
//const pessoasComMaisDeCiquentaAnos = pessoas.filter(obj => obj.idade > 50);
//console.log(pessoasComMaisDeCiquentaAnos);

// Termina com a letra a
const nomeTerminaComA = pessoas.filter(obj => {
  return obj.nome.toLowerCase().endsWith('a');
});
console.log(nomeTerminaComA);





