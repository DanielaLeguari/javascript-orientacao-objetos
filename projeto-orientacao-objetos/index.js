import User from "./User.js";
import Docente from "./Docente.js";
import Admin from "./Admin.js";
 
//const novoUser = new User ("Daniela", "dani@gmail.com", "2000-04-05");
//console.log(novoUser.exibirInfos());

//novoUser.nome = "Marcia";  //#nome e nome neste caso são coisas diferentes
//console.log(novoUser.nome); // isso não poderia acontecer

//novoUser.#nome = "Marcia";// agora deu erro de campo privado
//console.log(novoUser.nome);

const novoAdmin = new Admin("João", "joao@gmail.com", "2000-01-03");
//console.log(novoAdmin.nome);  // a chamada não é com parentesis() e sim como uma  propriedade.
//console.log(novoAdmin.nome);
//novoAdmin.nome = ""; // set 
//console.log(novoAdmin.nome);

const novoDocente = new Docente('Gustavo', 'g@gmail.com');
console.log(novoDocente.exibirInfos());
