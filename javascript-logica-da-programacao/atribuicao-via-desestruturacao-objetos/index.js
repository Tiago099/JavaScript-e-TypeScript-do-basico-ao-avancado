const pessoa = {
    nome: 'Luiz ',
    sobrenome: 'Miranda',
    idade: 30,
    endereco: {
        rua:'Av Brasil', 
        numero: 250
    }
};


//ATRIBUICAO VIA DESESTRUTURACAO AO OBJETO
const {nome, sobrenome, ... resto } = pessoa;
console.log(nome, resto);