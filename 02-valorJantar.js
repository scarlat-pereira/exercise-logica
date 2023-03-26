// EXEMPLO:
// Valor do jantar: R$ 80,00
// Taxa do Garçom: R$ 8,00
// Total a pagar: R$ 88,00

const valorJanta = 80;
const taxaGarcom = 10;

const valorConta = (valorJanta * (10/100)) + valorJanta; 

console.log(`Valor do jantar: R$ ${valorJanta},00`);
console.log(`Taxa do Garçom: ${(taxaGarcom / 100) * 80},00`);
console.log(`Total a pagar: R$ ${valorConta},00`);