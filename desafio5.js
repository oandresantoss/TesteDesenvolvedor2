
// desafio5.js
// Inversor de string sem usar reverse()

const readline = require('readline').createInterface({
    input: process.stdin,
    output: process.stdout
});

readline.question("Digite uma palavra ou frase para inverter: ", input => {
    let invertida = "";
    for (let i = input.length - 1; i >= 0; i--) {
        invertida += input[i];
    }

    console.log("String invertida:", invertida);
    readline.close();
});
