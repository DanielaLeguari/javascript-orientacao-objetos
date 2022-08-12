//classe abstrata
export class Conta {
  #saldo;
  #cliente;
  #agencia;

  constructor(tipo, saldoInicial, cliente, agencia) {
    if (this.constructor == Conta) {
      //quando a classe Conta for instanciada diretamente, emitir aviso.
      throw new Error(
        "Você não deveria instanciar um objeto do tipo Conta diretamente, pois essa é uma classe abstrata"
      );
    }
    this.#saldo = saldoInicial;
    this.#cliente = cliente;
    this.#agencia = agencia;
  }

  set cliente(novoValor) {
    if (novoValor instanceof Cliente) {
      this.#cliente = novoValor;
    }
  }

  get saldo() {
    return this.#saldo;
  }

  get cliente() {
    return this.#cliente;
  }

  get agencia() {
    return this.#agencia;
  }

  imprimeDados() {
    return `Saldo: ${this.#saldo},
    cliente: ${this.#cliente.imprimeDadosCliente()},
    agencia: ${this.#agencia}`;
  }
  //metodo abstrato
  sacar(valor) {
    throw new Error("O método Sacar da conta é abstrato.");
  }

  #sacar(valor, taxa) {
    const valorSacado = taxa * valor;
    if (this.#saldo >= valorSacado) {
      this.#saldo -= valorSacado;
      return valorSacado;
    }
    return 0;
  }

  getCalculoSaque(valor, taxa) {
    return this.#sacar(valor, taxa);
  }

  depositar(valor) {
    this.#saldo += valor;
  }

  tranferir(valor, conta) {
    const valorSacado = this.sacar(valor);
    conta.depositar(valorSacado);
  }
}
