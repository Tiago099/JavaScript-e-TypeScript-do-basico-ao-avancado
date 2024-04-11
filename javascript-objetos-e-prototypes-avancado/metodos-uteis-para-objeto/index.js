/*
object.values ( valores)
object.entries(pegando arrays)
object.assign(des, any) (copia objeto)
object.getOwnPropertyDescriptor(o, 'prop')
...(spread) (espalha os objetos)

// já vimos
Object.keys (retorna as chaves)
Object.freeze (congela o objeto)
Object.defineProperties (define varias propriedades)
Object.defineProperty (define uma propriedade)
*/

const produto = { nome: 'Produto', preco: 1.8, material: 'porcelana'};

for(let valor of Object.entries(produto)) {
    console.log(valor[0], valor[1]);
}