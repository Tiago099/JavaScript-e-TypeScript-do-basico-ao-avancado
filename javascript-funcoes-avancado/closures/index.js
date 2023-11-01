//global
function retornaFuncao(nome){
    return function(){
        return nome;
    };
}

const funcao = retornaFuncao('Tiago');
const funcao2 = retornaFuncao('Sebastian');
console.dir(funcao);
console.dir(funcao2);

console.log(funcao(), funcao2());