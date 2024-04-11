// construtora -> molde (classe)
function Pessoa(nome, sobrenome){
   this.nome = nome;
   this.sobrenome = sobrenome;
   this.nomeCompleto = () => this.nome + '' + this.sobrenome;
}

// Pessoa.prototype === pessoa1.__proto___

Pessoa.prototype.nomeCompleto = function(){
    return this.nome + '' + this.sobrenome;
};

// instancia
const pessoa1 = new Pessoa('Tiago', 'S.'); //<- Pessoa = Funcao construtora
const pessoa2 = new Pessoa('Tadeu', 'I.');//<- Date= Funcao construtora

console.dir(pessoa1);
console.dir(pessoa2);