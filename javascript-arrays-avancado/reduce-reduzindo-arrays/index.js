// Some todos os numeros (reduce)
// Retorne um arrays com os pares (filter)
// Retorne um arrays com o dobro dos valores (Map)

// Some todos os numeros (reduce)
//                 0   1   2  3  4 .....
//const numeros = [5, 50, 80, 1, 2, 3, 8, 7, 11, 15, 22, 27];
//const total = numeros.reduce(function(acumulador, valor, indice, array){
  //  acumulador += valor;
   // return acumulador;
//}, 0);
//console.log(total);

// Retorne um arrays com os pares (filter)
/*const numeros = [5, 50, 80, 1, 2, 3, 8, 7, 11, 15, 22, 27];
const total = numeros.reduce(function(acumulador, valor, indice, array){
 if(valor % 2 === 0) acumulador.push(valor);
 return acumulador;
}, []);
console.log(total);
*/

// Retorne um arrays com o dobro dos valores (Map)
const numeros = [5, 50, 80, 1, 2, 3, 8, 7, 11, 15, 22, 27];
const total = numeros.reduce(function(acumulador, valor){
  acumulador.push(valor * 2);
 return acumulador;
}, []);
//console.log(total)

//Retorne a pessoa mais velha
const pessoas = [
  {nome:'Luiz', idade:62},
  {nome:'Mariana', idade:45},
  {nome:'Tiago', idade:67},
  {nome:'Leo', idade:18},
  {nome:'Pedro', idade:25},
  {nome:'Wallace', idade:34},
];

const maisVelha = pessoas.reduce(function(acumulador, valor){
  if(acumulador.idade > valor.idade) return acumulador;
  return valor;
});
console.log(maisVelha);