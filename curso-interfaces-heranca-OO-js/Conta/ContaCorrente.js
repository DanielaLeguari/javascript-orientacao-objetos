import { Conta } from "./Conta.js";

export class ContaCorrente extends Conta {
  static numeroDeContas = 0; //estático
  constructor(saldo = 0, cliente, agencia) {
    super("", saldo, cliente, agencia);
    ContaCorrente.numeroDeContas += 1;
  }
 
  sacar(valor) {
    let taxa = 1.1;
    return this.getCalculoSaque(valor, taxa);
  }

}
