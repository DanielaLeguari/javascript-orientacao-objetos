/*
Ser autenticavel significa ter o método "autenticar";
*/
export class SistemaAutenticacao {
  static login(autenticavel, senha) {
    if (SistemaAutenticacao.ehAutenticavel(autenticavel)) {
      return autenticavel.autenticar(senha);
    }
    return false;
  }

  static ehAutenticavel(autenticavel) {
    //console.log(autenticavel.autenticar instanceof Function);
    return autenticavel.autenticar instanceof Function; // operador "in"
  }
}
