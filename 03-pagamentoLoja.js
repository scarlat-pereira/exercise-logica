// EXEMPLO:
// Preço: R$ 60,00
// Á vista: R$ 54,00
// Ou 3x de: R$ 20,00

const valorProduto = 60;
const descontoAVista = 10;
const parcelas = 3;

const pagamentoAVista = valorProduto - (valorProduto * (descontoAVista / 100));
const pagamentoParcelado = valorProduto / parcelas;
console.log(`Preço: ${valorProduto},00`);
console.log(`À vista: ${pagamentoAVista},00`);
console.log(`Ou 3x de: ${pagamentoParcelado},00`)