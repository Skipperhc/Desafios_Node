const obj20 = [
    'item1', 'item2', 'item3', 'item4', 'item5', 
    'item6', 'item7', 'item8', 'item9', 'item10', 
    'item11', 'item12', 'item13', 'item14', 'item15', 
    'item16', 'item17', 'item18', 'item19', 'item20'];

console.log('for each')
obj20.forEach(value => {
    console.log(value)
})

console.log('\n\nfor in')
for(let value in obj20) {
    console.log(obj20[value])
}

console.log('\n\nfor of')
for(let value of obj20) {
    console.log(value)
}
