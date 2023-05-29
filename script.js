/*
Solicitar ao usuário dois números e calcular:
- A soma;
- A subtração;
- A multiplicação;
- A divisão;
- O resto da divisão;
- Verificar se a soma é par;
- Verificar se os dois números inseridos são iguais.
*/

function sum(n1, n2){
    let total = n1 + n2
    return total
}

function subtraction(n1, n2){
    let total = n1 - n2
    return total
}

function multiplication(n1, n2){
    let total = n1 * n2
    return total
}

function division(n1, n2){
    let total = n1 / n2
    return total.toFixed(1)
}

function rest(n1, n2){
    let total = n1 % n2
    return total
}

function evenOrOdd(n1, n2){
    let soma =  sum(n1, n2)
    rest = rest(soma, 2)
    if(rest == 0){
        return 'par'
    }
    return 'ímpar'
}

function iguality(n1, n2){
    if( n1 == n2){
        return 'são iguais'
    }
    return 'não são iguais'
}

function print(type, result){
    alert(`o resultado da${type} é: ${result}`)
}

let n1 = Number(prompt('Digite o primeiro número'))
let n2 = Number(prompt('Digite o segundo número'))

print(' soma', sum(n1, n2))
print(' subtração', subtraction(n1, n2))
print(' multiplicação', multiplication(n1, n2))
print(' divisão', division(n1, n2))
print('(o) resto da divisão', rest(n1, n2))
print(' paridade da soma', evenOrOdd(n1, n2))
print(' igualdade entre os números', iguality(n1, n2))