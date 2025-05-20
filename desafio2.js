
// desafio2.js
// Verificador da sequência de Fibonacci

function pertenceFibonacci(numero) {
    if (numero === 0 || numero === 1) return true;
    let a = 0, b = 1;
    while (b < numero) {
        let temp = b;
        b = a + b;
        a = temp;
    }
    return b === numero;
}

const readline = require('readline').createInterface({
    input: process.stdin,
    output: process.stdout
});

readline.question("Informe um número para verificar se pertence à sequência de Fibonacci: ", num => {
    const numero = parseInt(num);
    if (pertenceFibonacci(numero)) {
        console.log(`${numero} pertence à sequência de Fibonacci.`);
    } else {
        console.log(`${numero} NÃO pertence à sequência de Fibonacci.`);
    }
    readline.close();
});
