    const data = new Date();
    const diaSemana = data.getDay();
    let diaSemanaTexto;
    

switch(diaSemana){
    case 0:
      diaSemanaTexto ='Domingo';
      break;
    case 1:
      diaSemanaTexto ='Segunda';
      break;
    case 2:
      diaSemanaTexto ='Terca';
      break;
    case 3:
      diaSemanaTexto ='Quarta';
      break;
    case 4:
      diaSemanaTexto ='Quinta';
      break;
    case 5:
      diaSemanaTexto ='Sexta';
      break;
    case 6:
      diaSemanaTexto ='Sabado';
      break;

}
//Sem switch e case
/*if(diaSemana === 0){
    diaSemanaTexto = 'Domingo';
}else if(diaSemana ===1){
    diaSemana = 'Segunda';
}else if(diaSemana ===2){
    diaSemana = 'Terca';
}else if(diaSemana ===3){
    diaSemana = 'Quarta';
}else if(diaSemana ===4){
    diaSemana = 'Quinta';
}else if(diaSemana ===5){
    diaSemana = 'Sexta';
}else if(diaSemana ===6){
    diaSemana = 'Sabado';
}else{
    diaSemanaTexto ='';
}
*/












    console.log(diaSemana);