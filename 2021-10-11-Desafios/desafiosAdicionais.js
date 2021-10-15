const paramFunc = (func) => {
    func()
}

const paramOpt = (param1, param2=2) => {
    return param1 * param2;
}

const objComObj = {
    nome: 'Objeto pai',
    objFilho: {
        nome: 'objeto filho'
    }
}

const objLista = {
    nome: 'objeto com lista',
    lista: [1,2,3,4,5,6,7,8]
}

console.log('*\n**\n***\n****')

console.log('lista foreach antes', objLista.lista)
objLista.lista.forEach((num, index, arr) => {
    arr[index] = num * 2;
});
console.log('lista foreach depois', objLista.lista)

console.log('lista map antes', objLista.lista)
const listinha = objLista.lista.map(num => {
    return num * 2;
});
console.log('lista map depois', objLista.lista)
console.log('lista alterada', listinha)

const objListaObjs = {
    z   
}
