import { Cliente } from "./Cliente.js";

export class ContaCorrente {
  static numeroDeContas = 0; //estático
  #agencia;
  #cliente;
   //_saldo = 0;
   #saldo = 0;


constructor(cliente, agencia){
  this.#cliente = cliente;
  this.#agencia = agencia;
  ContaCorrente.numeroDeContas += 1;
}

 
  set cliente(novoValor) {
    if (novoValor instanceof Cliente) {
      this.#cliente = novoValor;
    }
  }

  get cliente() {
    return this.#cliente;
  }

  get saldo() {
    return this.#saldo;
  }

  get agencia(){
    return this.#agencia;
  }

  sacar(valor) {
    if (this.#saldo >= valor) {
      this.#saldo -= valor;
      return valor;
    }
  }

  depositar(valor) {
    if (valor <= 0) {
      return; // early return, ajuda na legibilidade do código;
    }
    this.#saldo += valor;
  }

  transferir(valor, conta) {
    const valorSacado = this.sacar(valor);
    conta.depositar(valorSacado);
  }
}
