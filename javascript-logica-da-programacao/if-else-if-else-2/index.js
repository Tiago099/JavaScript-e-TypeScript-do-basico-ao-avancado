
// If se (numero >= 0 && numero <= 5) ocorre, faca isso {código}
// else Se não faca isso {o código}

const numero = 10;


if (numero <= 10) {//verdadeira
    console.log('O numero é menor ou igual a 10.');
}

if (numero >= 0 && numero <= 5){
    console.log('o numero esta entre 0 e 5.');
}else if(numero >= 6 && numero <= 8){
    console.log('o numero esta entre 6 e 8.');
}else if(numero >= 9 && numero <= 11){// verdadeiro
    console.log('o numero esta entre 9 e 11.');
}else {
    console.log('O não está entre 0 e 11.');
}