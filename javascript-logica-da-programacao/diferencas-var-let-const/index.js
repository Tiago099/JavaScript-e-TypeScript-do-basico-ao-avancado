const verdadeira = true;

// Let tem escopo de bloco {... bloco}
// Var sò tem escopo de funcao

let nome = 'Luiz'; //criando
var nome2 = 'Marcos'; //criando


if (verdadeira) {
    let nome = 'Joao'; //criando
    var nome2 = 'Maria'; //redeclarando

    if (verdadeira){
        let nome = 'Mariana'; //criando
        var nome2 = 'Tereza'; // redeclarando
    }
}
console.log(nome, nome2);

