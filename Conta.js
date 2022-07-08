export class Conta {

    static numeroDeContas = 0;

    constructor(openingBalance, firstCostumer, firstAgency) {
        // _[variavel] -> convencao da comunidade para que nao se mexam nesses atributos, pois sao privados
        if (this.constructor == Conta)
        {
            throw new Error("Voce nao deve instanciar uma nova conta diretamente do tipo -> Conta")
        }
        this._balance = openingBalance
        this._costumer = firstCostumer
        this._agency = firstAgency
        Conta.numeroDeContas++
    }

    static get contas() {
        console.log(`Existem ${Conta.numeroDeContas} contas no sistema!`)
        return Conta.numeroDeContas
    }

    set costumer(newCostumer) {
        //se o valor(cliente) recebido existir na classe Cliente, entao...
        if (newCostumer instanceof Cliente)
            this._costumer = newCostumer;
        else
            throw new Error("Cliente inexistente");
    }
    get costumer() {
        return this._costumer
    }
    set agency(newAgency) {
        if (newAgency <= 0)
            console.log(`${this.costumer.name} nao foi possivel alterar sua agencia! (agencia invalida)`)
        else
            this._agency = newAgency
    }
    get agency() {
        return this._agency
    }
    get balance() {
        return this._balance
    }


    withdraw(withdrawValue) {
        throw new Error("O metodo Sacar da conta eh abstrato")
    }

    _withdraw(withdrawValue, valueTax){
        const withdrawAmount = withdrawValue * valueTax
        if (withdrawAmount > this.balance) {
            console.log("Saldo insuficiente para saque!")
            return 0;
        }
        this._balance -= withdrawAmount
        return withdrawAmount
    }
    deposit(depositValue) {
        if (depositValue <= 0) {
            console.log(`Valor invalido!`)
            return;
        }
        else {
            this._balance += depositValue
            return depositValue
        }
    }
    transfer(valor, conta) {
        if (valor > this.balance)
            console.log("Transferencia maior que o seu saldo!")
        else {
            this._balance -= valor
            conta._balance += valor
            // const valorSacado = this.withdraw(valor)
            // conta.deposit(valorSacado)

            // acima, opcao alternativa p/ n ficar repetindo os console log do withdraw e balance...
        }
    }
}