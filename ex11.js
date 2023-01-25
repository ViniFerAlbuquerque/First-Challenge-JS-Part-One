// Faça um programa onde toda vez que ele rodar, coloca na tela um número aleatório entre 1 e 100.

//console.log(Math.floor(Math.random() * (100 - 1) + 1))

//console.log(Math.floor(Math.random() * (50 - 30 ) + 30))


function randomNumberInterval(a, b) {
    return Math.floor (Math.random() * (b - a + 1)) + a
}

console.log(randomNumberInterval(1, 100))


