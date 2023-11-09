import ContaBancaria from "./modules/ride/domain/ContaBancaria";

const conta01 = new ContaBancaria("Miguel", 100);
console.log(conta01);
console.log("-------");
console.log(`A conta ${conta01.getNumero()} foi criada para ${conta01.getProprietario()} com saldo inicial de ${conta01.getSaldo()}.`);
console.log("-------");
// conta01.realizarDeposito(500);
// console.log(conta01.saldo);
// console.log(conta01.getSaldo());

// conta01.realizarSaque(100);
// console.log(conta01.saldo);

const now = new Date();

const idTransacao = 1;
const idDaContaOrigem = conta01.getNumero();

conta01.realizarDeposito(1000, now, "Um amigo me pagou de volta", idDaContaOrigem);
console.log(conta01);
console.log(`Saldo: ${conta01.getSaldo()}`);

const idDaContaDestino = conta01.getNumero();
conta01.realizarSaque(500, now, "Pagamento do aluguel", idDaContaDestino);
console.log(conta01);
console.log(`Saldo: ${conta01.getSaldo()}`);

console.log(conta01.getHistoricoConta());

// Teste que os saldos iniciais devem ser positivos:
// try {
//   const contaInvalida = new ContaBancaria("inválida", -55);
// } catch (error) {
//   console.log("Exceção capturada ao criar conta com saldo negativo");
//   //console.log(error.toString());
// }

// // Teste para saldo negativo
// try {
//   conta.realizarSaque(750, new Date(), "Tentativa de exceder o limite");
// } catch (error) {
//   console.log("Exceção capturada ao tentar exceder o limite");
//   //console.log(error.toString());
// }
