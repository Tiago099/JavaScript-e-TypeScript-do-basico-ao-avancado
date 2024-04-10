// factory functions 
function criaPessoa(nome, sobrenome) {
 return {
   nome,
   sobrenome,
   nomeCompleto(){
     return `${this.nome} ${this.sobrenome}`;
   }
 };
}
const p1 = criaPessoa('Tiago','Sebastian');
//console.log(p1.nomeCompleto());

//construcctor functions 
function Pessoa(nome, sobrenome){
    this.nome = nome;
    this.sobrenome = sobrenome;
}
const p2 = new Pessoa('Tiago', 'Sebastian');
const p3 = new Pessoa('Maria', 'Silva');
console.log(p2);