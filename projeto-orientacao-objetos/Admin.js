import User from "./User.js";

// User é uma super classe
export default class Admin extends User{
    constructor(nome, email, nascimento, role = "admin", ativo = true) {
        // função especial super para classe
        super(nome, email, nascimento, role, ativo);
    }

       // metodo particular da subclasse Admin
    exibirInfos(){  //polimorfismo
        return `${this.nome}, ${this.role}, ${this.ativo}`;
    }

    criarCurso(nomeDoCurso, vagas) {
        return `Curso de ${nomeDoCurso} criado com ${vagas} vagas`;
    }
}

