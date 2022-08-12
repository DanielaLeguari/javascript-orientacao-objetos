import { Conta } from "./Conta.js";

export class ContaPoupanca extends Conta {
  constructor(saldo, cliente, agencia) {
    super("", saldo, cliente, agencia); // referencia a classe Conta
  }

sacar(valor){
  const taxa = 1.02;
  return this.getCalculoSaque(valor, taxa); 
}
}
