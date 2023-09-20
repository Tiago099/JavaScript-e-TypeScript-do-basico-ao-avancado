 // (condicao) ? 'valor para verdadeiro' : 'valor para falso'

 const pontuacaoUsuario = 500;
 const nivelUsuario = pontuacaoUsuario >=1000 ? 'usuario vip' : 'usuario normal';



 // if(pontuacaoUsuario >= 1000){
 // console.log('Usuario Vip');
 // } else {
 //console.log('Usuario normal')   
 // }


 const corUsuario = 'Pink';
 const corPadrao = corUsuario || 'Preta';

 console.log(nivelUsuario,corPadrao);
 