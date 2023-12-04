function* geradora1() {
    //codigo qualquer ...
    yield "Valor 1";
    yield "Valor 2";
    yield "Valor 3";
}
const g1 = geradora1();
console.log(g1.next().value);
 
// gerador infinito
function* geradora2(){
    let i = 0;


     while(true){
        yield i;
        i++;
     } 
    }
    const g2 = geradora2();
    console.log(g2.next().value);
    console.log(g2.next().value);
    console.log(g2.next().value);
    console.log(g2.next().value);

    // gerador que delegar tarefa
   function* geradora3(){
        yield 0;
        yield 1;
        yield 2;
    }

    function* geradora4(){
        yield* geradora3();
        yield 3;
        yield 4;
        yield 5;
    }

    const g4 = geradora4();
    for(let valor of g4) {
        console.log(valor);
    }
    