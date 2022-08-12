package desafio;

import java.util.ArrayList;

public class Main {
    public static void main(String[] args) {
        Pessoa pessoa4 = new Pessoa();
        pessoa4.setIdade(20);
        pessoa4.setNome("Jose");
        //System.out.println(pessoa4);

        Pessoa pessoa1 = new Pessoa();
        pessoa1.setIdade(21);
        pessoa1.setNome("Maria");
        //System.out.println(pessoa1);

        Pessoa pessoa2 = new Pessoa();
        pessoa2.setIdade(22);
        pessoa2.setNome("Barbara");
        //System.out.println(pessoa2);

        Pessoa pessoa3 = new Pessoa();
        pessoa3.setIdade(25);
        pessoa3.setNome("Lucas");
        //System.out.println(pessoa3);

        ArrayList<Pessoa> listaPessoas = new ArrayList<>();

        listaPessoas.add(pessoa1);
        listaPessoas.add(pessoa2);
        listaPessoas.add(pessoa3);
        listaPessoas.add(pessoa4);

        for(Pessoa pessoa : listaPessoas){
            System.out.println(pessoa);
        }
    }

}
