export class Funcionario {
  #nome;
  #salario;
  #cpf;
  #bonificacao;
  #senha;

  constructor(nome, salario, cpf, bonificacao = 1) {
    this.#nome = nome;
    this.#salario = salario;
    this.#cpf = cpf;

    this.#bonificacao = bonificacao;
    this.#senha;
  }

  get bonificacao() {
    return this.#bonificacao;
  }

  autenticar(senha) {
    return senha == this.#senha;
  }

  cadastrarSenha(senha) {
    this.#senha = senha;
  }
}
