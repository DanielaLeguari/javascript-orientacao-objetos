import { ContaCorrente } from "./Conta/ContaCorrente.js";
import { Cliente } from "./Cliente.js";
import { ContaPoupanca } from "./Conta/ContaPoupanca.js";
import { ContaSalario } from "./Conta/ContaSalario.js";
import { Gerente } from "./Funcionarios/Gerente.js";
import { Diretor } from "./Funcionarios/Diretor.js";
import { SistemaAutenticacao } from "./SistemaAutenticacao.js";

/*const cliente1 = new Cliente("Daniela", 11122233308);
const contaCorrenteDaniela = new ContaCorrente(0, cliente1, 111);
contaCorrenteDaniela.depositar(500);
contaCorrenteDaniela.sacar(100);
const contaPoupancaDaniela = new ContaPoupanca(100, cliente1, 111);
contaPoupancaDaniela.sacar(10);
const contaSalario = new ContaSalario(cliente1);
contaSalario.depositar(50);
contaSalario.sacar(10);
console.log(contaSalario.imprimeDados());*/

const diretor = new Diretor("Daniela", 10000, 12347989522);
diretor.cadastrarSenha("123456");
const gerente = new Gerente("Paula", 5000, 46789894444);
gerente.cadastrarSenha("1234");
const cliente = new Cliente("Lara", 454545, 1234, "123");

const gerenteEstaLogado = SistemaAutenticacao.login(gerente, "1234");
const diretorEstaLogado = SistemaAutenticacao.login(diretor, "123456");
const clienteEstaLogado = SistemaAutenticacao.login(cliente, "1234");

console.log(
  `gerente:${gerenteEstaLogado}, diretor: ${diretorEstaLogado}, cliente: ${clienteEstaLogado}`
);
