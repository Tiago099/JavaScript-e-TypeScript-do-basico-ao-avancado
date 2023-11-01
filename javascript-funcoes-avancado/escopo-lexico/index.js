const nome = 'Tiago'; 

function falaNome (){
    console.log(nome);

}

function usaFalaNome(){
    const nome = 'Sebastian';
    falaNome();
}

usaFalaNome();