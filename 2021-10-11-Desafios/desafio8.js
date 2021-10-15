
async function minhaPromise() {
    console.log('inicio da promise')
    return new Promise((resolve, reject) => {
        try {
            setTimeout(async function () {
                resolve('dentro da promise!')
            }, 1000)
        } catch (err) {
            reject(err);
        }
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
