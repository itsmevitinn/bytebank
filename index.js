import {Cliente} from "./Cliente.js"
import {ContaCorrente} from "./ContaCorrente.js"
import {ContaPoupanca} from "./ContaPoupanca.js"
//importando a classe Conta apenas para mostrar o contador de contas
import {Conta} from "./Conta.js"
import {Diretor} from "./Funcionario/Diretor.js"
import {Gerente} from "./Funcionario/Gerente.js"
import { SistemaLogin } from "./Funcionario/SistemaLogin.js"


const clienteVitor = new Cliente("Vitor", 18412341234)
const contaCorrenteVitor = new ContaCorrente(clienteVitor, 102)


const clientePatricia = new Cliente("Patricia", 10362349464)
const contaCorrentePatricia = new ContaCorrente(clientePatricia, 102)
const contaPoupancaPatricia = new ContaPoupanca(500, clientePatricia, 102)

const clienteMarcelo = new Cliente("Marcelo", 10459238483)
const contaCorrenteMarcelo = new ContaCorrente(clienteMarcelo, 102)
const contaPoupancaMarcelo = new ContaPoupanca(500, clienteMarcelo, 102)

// const contaTeste = new Conta(0, clienteMarcelo, 102)

contaCorrenteMarcelo.deposit(500)
contaCorrenteMarcelo.withdraw(250)
console.log("Saldo de patricia", contaPoupancaPatricia.balance)
contaCorrenteMarcelo.transfer(100, contaPoupancaPatricia)
console.log("Saldo de patricia apos transferencia", contaPoupancaPatricia.balance)
contaPoupancaPatricia.withdraw(250)

console.log(`Quantidade de contas: ${Conta.numeroDeContas}`)


const diretor = new Diretor("Vitor", 10000, 12345678)
diretor.cadastrarSenha(1234)
const validaLogin = SistemaLogin.validar(diretor, 4321)

const gerente = new Gerente("Jonatan", 20000, 1834733827)
gerente.cadastrarSenha("321")
const checaLogin = SistemaLogin.validar(gerente, "321")