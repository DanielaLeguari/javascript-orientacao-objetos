export default class User {
  // exportação de bloco de código
  #nome; //declaramos a propriedade privada fora do construtor
  #email;
  #nascimento;
  #role;
  #ativo;

  constructor(nome, email, nascimento, role, ativo = true) {
    // chama as propriedades dentro do construtor
    this.#nome = nome;
    this.#email = email;
    this.#nascimento = nascimento;
    this.#role = role || "estudante";
    this.#ativo = ativo;
  }
  //encapsulamento
  //getters => propriedade acessora especial
  get nome() {
    //apenas leitura, não recebem argumentos
    //pode ter condiçoes
    return this.#nome;
  }

  get email() {
    return this.#email;
  }

  get nascimento() {
    return this.#nascimento;
  }

  get role() {
    return this.#role;
  }

  get ativo() {
    return this.#ativo;
  }
  // set proteger alterações muito críticas, inserindo validações de uma classe
  set nome(novoNome) {
    // aceita apenas 1 parametro
    if (novoNome === "") {
      throw new Error("Formato inválido!");
    }
    this.#nome = novoNome;
  }

  exibirInfos() {
    return `${this.nome}, ${this.email}, ${this.nascimento}, ${this.role},${this.ativo}`;
  }
}

//console comando: npm init -y
// inserção "type" : "module" em package.json
