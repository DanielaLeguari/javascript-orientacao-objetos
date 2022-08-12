/*Crie uma classe Animal, depois crie classes filhas a partir desta classe.
Exemplo: humanos, macacos, tigres…
A classe Animal deve ter um método e as classes filhas devem sebrepor esse
método.
(esse método pode ser qualquer coisa que eles têm em comum. Use sua
criatividade)
*/

package exercicio2;

import java.util.ArrayList;

public class Main {
    public static void main(String[] args) {
        ArrayList<Animal> lista = new ArrayList<>();

        Cachorro cachorro = new Cachorro();
        Humano humano = new Humano();
        //Animal animal = new Humano();  // Humano extende animal, porém Animal não pode ser instanciada

        lista.add(cachorro); // ambas classes extendem animal
        lista.add(humano);

        for (Animal animal : lista) {
            animal.caminhar();
        }
    }
}
