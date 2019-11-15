// 01. Faça uma função que retorne se uma dada sting contém a letra h

function retornarString(palavra) {
    const regex = /h/
    return regex.test(palavra)
}

const resultadoA = retornarString('hello')
console.log(resultadoA)


// 02: altere sua função para que ela aceite maiuscula e minuscula (case insensitive)

function maiusculaMinuscula(palavra) {
    const regex = /h/i
    return regex.test(palavra)

}

const resultadoB = maiusculaMinuscula('Hideki')
console.log(resultadoB)


// 03: altere sua função para que ela retorne se a string termina com 'a' ou comece com 'b'
// aceitando maiuscula e minuscula também

function retornarAOuB(palavra) {

    const regex = /^b|a$/i
    return regex.test(palavra)
}
    
const resultadoC = retornarAOuB('bananA')
console.log(resultadoC)


// DESAFIO: altere sua função pra verificar se a string contém números

function procuraNumero(numero) {

    const regex = /\d/
    return regex.test(numero)
}
    
const resultadoD = procuraNumero('ol3ar')
console.log(resultadoD)
