package exercicio1;
import java.util.ArrayList;
import java.util.List;

public class Main {
    public static void main(String[] args) {

        ArrayList<Funcionario> listaFuncionario = new ArrayList<>();

        listaFuncionario.add(new Funcionario("Daniela", "estudante", "estudante"));
        listaFuncionario.add(new Funcionario("Daniela", "estudante", "estudante"));
        listaFuncionario.add(new Funcionario("Daniela", "estudante", "estudante"));
        listaFuncionario.add(new Funcionario("Daniela", "estudante", "estudante"));
        listaFuncionario.add(new Funcionario("Daniela", "estudante", "estudante"));
        listaFuncionario.add(new Funcionario("Daniela", "estudante", "estudante"));
        listaFuncionario.add(new Funcionario("Daniela", "estudante", "estudante"));
        listaFuncionario.add(new Funcionario("Daniela", "estudante", "estudante"));
        listaFuncionario.add(new Funcionario("Daniela", "estudante", "estudante"));
        listaFuncionario.add(new Funcionario("Daniela", "estudante", "estudante"));

        for (Funcionario funcionario : listaFuncionario) {
            System.out.println(funcionario);
        }

    }
}



