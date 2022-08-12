export class Cliente {
  nome;
  #cpf;
  #rg;
  #senha;

  get cpf() {
    return this.#cpf;
  }

  get rg() {
    return this.#rg;
  }

  constructor(nome, cpf, rg, senha) {
    this.nome = nome;
    this.#cpf = cpf;
    this.#rg = rg;
    this.#senha = senha;
  }

  autenticar(senha) {
    return senha == this.#senha;
  }

  imprimeDadosCliente() {
    return `Nome: ${this.nome}`;
  }
}
