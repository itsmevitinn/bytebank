import { SistemaLogin } from "./SistemaLogin.js";
import { Diretor } from "./Diretor.js";

export class Funcionario {
    constructor(nome, salario, cpf)
    {
        this._nome = nome;
        this._salario = salario;
        this._cpf = cpf;
        this._senha;
        this._bonificacao = 1;
    }

    cadastrarSenha(senha)
    {
        this._senha = senha;
    }

    get nome()
    {
        return this._nome;
    }

    autenticar(senha)
    {
        if (senha == this._senha)
            console.log(`${this.nome} esta logado`)
        else
            console.log(`${this.nome} esta com senha invalida`)
        //return senha == this._senha;
    }

    get senha()
    {
        return this._senha;
    }
}