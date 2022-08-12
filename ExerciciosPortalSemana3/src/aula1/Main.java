package aula1;

public class Main {
    public static void main(String[] args) {
        Objetos.setValor2(300);

        Objetos objeto1 = new Objetos(10);
        objeto1.valor1(20);


        System.out.println("Valores são "+objeto1.getValor1() + " e " + Objetos.getValor2());
        Objetos.setValor2(150);  // valor estático se mantém até ser alterado

        Objetos objeto2 = new Objetos(11); //instancia
        objeto2.valor1(21); // cada instancia tem o seu valor

                                                                          // acessando método estático da classe Objetos
                                                                           // estático o valor se mantem
        System.out.println("Valores são "+objeto2.getValor1() + " e " + Objetos.getValor2());

    }
}
