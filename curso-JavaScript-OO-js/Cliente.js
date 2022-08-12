export class Cliente {
    nome;
    #cpf;
    #rg;

    get cpf(){
      return this.#cpf;
    }

    get rg(){
      return this.#rg;
    }

    constructor(nome, cpf, rg){
      this.nome = nome;
      this.#cpf = cpf;
      this.#rg = rg;

    }
  }