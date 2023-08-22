/*function criaPessoa (nome, sobrenome, idade) {
    return { nome, sobrenome, idade};
}

const pessoa1 = criaPessoa ('Luiz', 'Meire', 25);
const pessoa2 = criaPessoa ('jean', 'silva', 24);
const pessoa3 = criaPessoa ('felipe', 'santos', 35);
const pessoa4 = criaPessoa ('maria', 'Moreira', 45);


console.log(pessoa1.nome, pessoa2.sobrenome);
*/


const pessoa1 = {
    nome: 'Luiz',
    sobrenome: 'moreira',
    idade: 82,

    fala() {
        console.log(`A minha idade atual é ${this.idade}`);
    },
    incrementaIdade(){
        this.idade++;
    }
};

pessoa1.fala();
pessoa1.incrementaIdade();
pessoa1.fala();
pessoa1.incrementaIdade();
pessoa1.fala();
pessoa1.incrementaIdade();