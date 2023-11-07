// IIFE -> Immediately invoked function expression

(function(idade, peso, altura){

    const sobrenome = 'Sebastian';
    function criaNome(nome){
        return nome + '' + sobrenome;
        
    }
    function falaNome(){
        console.log(criaNome('Tiago'));
    }

    falaNome();
    console.log(idade, peso, altura);

})(32, 109, 1.92);