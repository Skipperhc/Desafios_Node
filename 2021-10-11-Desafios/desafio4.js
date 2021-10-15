const meusHobbies = (nome, idade, hobbies) => {
    let obj = {
        nome,
        idade
    }
    hobbies.forEach((hobbie, index) => {
        let newHobbie = 'hobbie' + (index + 1);
        obj[newHobbie] = hobbie;
    });
    return obj;
}

console.log('objeto: ', meusHobbies('Vitor', 20, ['jogar video games', 'escutar musicas']))
