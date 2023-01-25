//Faça um programa que imprima na tela se um nome é igual ao outro nome digitado. 
//Porém, os dois nomes devem estar em dois objetos separados. 
//Ex: const object1 = {name:"João"}, object1 = {name:"Maria"}. 
//João e João, imprime true. 
//João e Maria, imprime false.
//Faça um programa que imprima na tela se um nome é igual ao outro nome digitado. 
//Porém, os dois nomes devem estar em um objeto.
// Ex: const object1 = {firstName:"João", seccondName:"Maria"}. João e João, imprime true. João e Maria, imprime false.

const known1 = {
    name: 'Maria',
    age: 35,
    sex: 'female',
    height: 1.65,
    city: 'São Paulo SP'
}

const known2 = {
    name: 'João',
    age: 43,
    sex: 'male',
    height: 1.85,
    city: 'Moreira Sales PR'
}

console.log(known1.name == known2.name)
