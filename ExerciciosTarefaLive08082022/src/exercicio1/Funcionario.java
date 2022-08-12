package exercicio1;
/*Crie uma classe do tipo Funcionario, com os campos: nome, função e cargo.
Crie uma lista e adicione 10 objetos do tipo Funcionario dentro dela.
Depois exiba no console todas informações de cada objeto */

public class Funcionario {
    private String nome;
    private String funcao;
    private String cargo;

    public String getFuncao() {
        return funcao;
    }

    public void setFuncao(String funcao) {
        this.funcao = funcao;
    }

    public String getCargo() {
        return cargo;
    }

    public void setCargo(String cargo) {
        this.cargo = cargo;
    }

    public String getNome() {
        return nome;
    }

    public void setNome(String nome) {
        this.nome = nome;
    }

    public Funcionario(String nome, String funcao, String cargo){
        this.nome = nome;
        this.funcao = funcao;
        this.cargo = cargo;
    }

    @Override
    public String toString() {
        return "Funcionario{" +
                "nome='" + nome + '\'' +
                ", funcao='" + funcao + '\'' +
                ", cargo='" + cargo + '\'' +
                '}';
    }
}
