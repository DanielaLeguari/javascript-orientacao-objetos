package exercicio3;

public class Contador extends Funcionario {
    private final double VALOR_BONIFICACAO = 0.03;


    public Contador(String nome, double valorHora, double totalHoras) {
        super(nome, valorHora, totalHoras);
    }

    @Override
    public double totalReceber() {
        double salario = getValorHora() * getTotalHoras();
        return (salario * VALOR_BONIFICACAO) + salario;
    }
}
