package exercicio3;

public abstract class Funcionario {
    private String nome;
    private double valorHora;
    private double totalHoras;

    public Funcionario(String nome, double valorHora, double totalHoras) {
        this.nome = nome;
        this.valorHora = valorHora;
        this.totalHoras = totalHoras;
    }

    public String getNome() {
        return nome;
    }

    public void setNome(String nome) {
        this.nome = nome;
    }

    public double getValorHora() {
        return valorHora;
    }

    public void setValorHora(double valorHora) {
        this.valorHora = valorHora;
    }

    public double getTotalHoras() {
        return totalHoras;
    }

    public void setTotalHoras(double totalHoras) {
        this.totalHoras = totalHoras;
    }

    public abstract double totalReceber(); // metodo abstrato não tem corpo;


}
