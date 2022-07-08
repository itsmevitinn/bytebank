import {Funcionario} from "./Funcionario.js";

//duck typing, se ele anda como um pato, faz quack, eh parecido com o pato, eh oq importa
//nao me importa se ele eh um pato de verdade ou nao (nao interessa o tipo, e sim oq aquele objeto consegue fazer(existir determinados metodos/propriedades) )

export class SistemaLogin
{
    static validar(autenticavel, senha)
    {
        if (SistemaLogin.ehAutenticavel(autenticavel))
        {
            return autenticavel.autenticar(senha);
        }
        return (0);
    }
    static ehAutenticavel(autenticavel)
    {
        if ("autenticar" in autenticavel && autenticavel.autenticar instanceof Function)
            return "autenticar" in autenticavel
        else
            return console.log(`ERRO! metodo autenticar nao existe ou nao eh uma funcao`)
        // return "autenticar" in autenticavel && autenticavel.autenticar instanceof Function
    }
}