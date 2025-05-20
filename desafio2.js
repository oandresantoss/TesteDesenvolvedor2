// desafio2.js
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

function perguntar() {
    readline.question("Informe um número para verificar se pertence à sequência de Fibonacci (ou digite 'sair'): ", input => {
        if (input.toLowerCase() === 'sair') {
            console.log("Encerrando o programa.");
            readline.close();
            return;
        }

        const numero = Number(input);
        if (isNaN(numero)) {
            console.log("Por favor, digite um número válido.");
        } else if (pertenceFibonacci(numero)) {
            console.log(`${numero} pertence à sequência de Fibonacci.`);
        } else {
            console.log(`${numero} NÃO pertence à sequência de Fibonacci.`);
        }

        perguntar(); // chama novamente para continuar o loop
    });
}

perguntar(); // inicializa
