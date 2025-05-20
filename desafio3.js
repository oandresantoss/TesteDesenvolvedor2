
// desafio3.js
// Análise de faturamento diário

const faturamento = [100, 200, 150, 300, 400, 50, 600, 250, 90, 180, 75, 320, 500, 1000, 130]; // Exemplo

const menorValor = Math.min(...faturamento);
const maiorValor = Math.max(...faturamento);
const mediaMensal = faturamento.reduce((acc, val) => acc + val, 0) / faturamento.length;
const diasAcimaDaMedia = faturamento.filter(dia => dia > mediaMensal).length;

console.log("Menor valor de faturamento:", menorValor);
console.log("Maior valor de faturamento:", maiorValor);
console.log("Número de dias com faturamento acima da média:", diasAcimaDaMedia);
