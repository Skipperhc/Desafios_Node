const minhaPromise = () => {
    console.log('inicio da promise')
    return new Promise((resolve, reject) => {
        resolve('dentro da promise!')
        // reject('Falhou!!')
    })
}

console.log('antes da promise')
minhaPromise().
    then((res) => {
        console.log(res)
    }).
    catch((err) => {
        console.log('erro: ', err)
    }).
    finally(() => {
        console.log('conclusão da promise!')
    });
console.log('depois da promise')
