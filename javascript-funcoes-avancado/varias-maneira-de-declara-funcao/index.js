// declaracao de funcao (function hoisting)

falaOi();
function falaOi(){
   console.log('Oie');

}

//First-class objects (objeto de primeira classe )
//function expression
const souUmDado = function(){
    console.log('Sou um dado.');
};
souUmDado();

//Arrow function

const funcaoArrow = () => {
    console.log('Sou uma arrow function');
};
funcaoArrow();

//Dentro de um objeto

const obj = {
    falar(){
        console.log('Estou falando...');
    }
};
obj.falar();