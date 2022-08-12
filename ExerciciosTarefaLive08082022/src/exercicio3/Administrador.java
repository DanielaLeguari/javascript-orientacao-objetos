package exercicio3;

public class Administrador extends Funcionario {

    private final double VALOR_BONIFICACAO = 0.06;

    public Administrador(String nome, double valorHora, double totalHoras) {
        super(nome, valorHora, totalHoras);
    }

    @Override
    public double totalReceber() {
        double salario = getValorHora() * getTotalHoras();
        return (salario * VALOR_BONIFICACAO) + salario;
    }
}
