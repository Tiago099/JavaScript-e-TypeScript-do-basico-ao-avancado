//    0123....

const nomes =['Tiago', 'Sebastian', 'Jonas'];


//ESTRUTURA CLASSICA
// For classico - Geralmente com iteraveis (arrays ou strings)
for (let i = 0; i < nomes.length; i++){
    console.log(nomes[i]);
}

console.log('#######');

//ESTRUTURA IN
// for in - Retorna o indice ou chaves (string, array ou objetos)
for (let i in nomes){
    console.log(nomes[i]);
}
console.log('#######');

//ESTRUTA OF
// For of -  Retorna o valor em si (iteraveis, arrays ou strings )
for (let valor of nomes){
    console.log(valor);
}

console.log('#######');


nomes.forEach(function (valor, indice){
    console.log(valor, indice);
});
    
