import {ContaCorrente} from "./ContaCorrente.js";
import {Cliente} from "./Cliente.js";

const cliente1 = new Cliente("Daniela",11122233308); //criando o primeiro cliente/ objeto
//console.log(cliente1);

const cliente2 = new Cliente("Helena", 48781151155); //criando o segundo cliente
//.log(cliente2);



//console.log(cliente1.cpf);
//cliente1.cpf = 1; não possivel atribui novos valores

const ContaCorrenteDaniela = new ContaCorrente(cliente1, 145);
new ContaCorrente(cliente1, 145);
new ContaCorrente(cliente1, 145);
//console.log(ContaCorrenteDaniela.cliente);
//console.log(ContaCorrenteDaniela.agencia);
ContaCorrenteDaniela.depositar(500);
//console.log(ContaCorrenteDaniela.saldo);

console.log(ContaCorrente.numeroDeContas);

