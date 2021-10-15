const json = JSON.parse('{"empresa":"GFT","projeto":"Treinamento","tecnologias":[{"id":1,"nome":"NodeJS"},{"id":2,"nome":"ReactJS"}]}')

console.log('empresa: ', json.empresa)
console.log('projeto: ', json.projeto)
json.tecnologias.forEach(tecnologia => {
    console.log('Id da tecnologia ' + tecnologia.id +' e o nome '+ tecnologia.nome)
});