package exercicio3;
/*Crie uma classe abstrata Funcionário que tenha os campos: nome, valorHora, totalHoras.
Esta classe também deve ter o método abstrato para retornar o valor total a receber.
Depois crie algumas classes que estendem a classe Funcionario
Todas classes filhas devem ter um campo constante com o valor de bonificação e a partir
deste campo, fazer o cálculo do total a receber.
programador 5% (0.05), contador 3% (0.03), administrador 6% (0.06).*/

public class Main {
    public static void main(String[] args) {

        Programador programador = new Programador("Maria", 50, 10);
        //programador.setTotalHoras(5);
        //programador.setValorHora(50);
        System.out.println(programador.totalReceber());

        Contador contador = new Contador("Daniela", 45, 30);
        //contador.setTotalHoras(5);
        //contador.setValorHora(35);
        System.out.println(contador.totalReceber());

        Administrador administrador = new Administrador("João", 50, 15);
        //administrador.setTotalHoras(10);
        //administrador.setValorHora(25);
        System.out.println(administrador.totalReceber());

    }
}
