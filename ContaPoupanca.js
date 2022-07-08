import { Conta } from "./Conta.js";

export class ContaPoupanca extends Conta {

    static numeroDeContas = 0;

    constructor(openingBalance, costumer, agency) {
        super(openingBalance, costumer, agency)
        ContaPoupanca.numeroDeContas++
    }
    withdraw(withdrawValue){
        const valueTax = 1.05
        super._withdraw(withdrawValue, valueTax)
        console.log(`Conta Poupanca de ${this.costumer.name} sacou R$ ${(withdrawValue * valueTax).toFixed(2)} (5% de taxa incluido). Novo saldo -> R$ ${this.balance.toFixed(2)}`)
    }

    transfer(value, account)
    {
        super.transfer(value, account)
        console.log(`Conta Poupanca de ${this.costumer.name} transferiu R$ ${value.toFixed(2)} para -> ${account.costumer.name}.`)
    }
    deposit(depositValue)
    {
        super.deposit(depositValue)
        console.log(`Conta Poupanca de ${this.costumer.name} depositou R$ ${depositValue.toFixed(2)}. Novo saldo -> R$ ${this.balance.toFixed(2)}`)
    }
}