import { Conta } from "./Conta.js";

//o "extends" herda todos os comandos da classe conta, nao sendo necessario 
//repetir todas as mesmas acoes (sacar,depositar, transfeir... para cada tipo de conta(corrente, poupanca..))
export class ContaCorrente extends Conta {
 
    static numeroDeContas = 0;

    constructor(firstCostumer, firstAgency) {
        // pelo fato desta classe estar herdando as informacoes da classe pai (Conta.js), eh necessario que
        // seja inserido o super() para que consigamos editar o construtor da classe pai e inserir
        // informacao especifica da classe ContaCorrente, como por exemplo o ContaCorrente.numerodecontas++
        super(0, firstCostumer, firstAgency)
        ContaCorrente.numeroDeContas++
    }


    //sobreescrevendo o valor de taxa do "withdraw" da classe conta, em seguida chamando o metodo "_withdraw" pra realizar os calculos e depois obter seu retorno
    withdraw(withdrawValue){
        const valueTax = 1.1
        super._withdraw(withdrawValue, valueTax)
        console.log(`Conta Corrente de ${this.costumer.name} sacou R$ ${(withdrawValue * valueTax).toFixed(2)} (10% de taxa incluido). Novo saldo -> R$ ${this.balance.toFixed(2)}`)
    }

    transfer(value, account)
    {
        super.transfer(value, account)
        console.log(`Conta Corrente de ${this.costumer.name} transferiu R$ ${value.toFixed(2)} para -> ${account.costumer.name}.`)
    }
    deposit(depositValue)
    {
        super.deposit(depositValue)
        console.log(`Conta Corrente de ${this.costumer.name} depositou R$ ${depositValue.toFixed(2)}. Novo saldo -> R$ ${this.balance.toFixed(2)}`)
    }
}