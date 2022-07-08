export class Cliente {

    constructor(name, cpf, senha){
        this._name = name
        this._cpf = cpf
        this._senha = senha;
    }
    
    autenticar(senha)
    {
        return senha == this._senha;
    }

    get name(){
        return this._name
    }

    get cpf(){
        return this._CPF
    }
}