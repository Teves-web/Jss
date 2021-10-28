class ContaBancaria {
  constructor(agencia, numero, tipo, saldo) {
    this.agencia = agencia
    this.numero = numero
    this.tipo = tipo
    this.saldo = saldo
  }

  get saldo() {
    return this_saldo
  }
  set saldo(valor) {
    this_saldo = valor
  }

  sacar(valor) {
    if (valor > this_saldo) {
      return 'Operação negada'
    }
    this._saldo = this._saldo - valor

    return this_saldo
  }

  depositar(valor) {
    this_saldo = this_saldo + valor

    return this._saldo
  }
}

class ContaCorrente extends ContaBancaria {
  constructor(agencia, numero, saldo) {
    super(agencia, numero, saldo)
    this.tipo = 'corrente'
    this.cartaoCredito = cartaoCredito
  }

  set cartaoCredito(valor) {
    this._cartaoCredito = valor
  }
}

class ContaPoupanca extends ContaBancaria {
  constructor(agencia, numero, saldo) {
    super(agencia, numero, saldo)
    this.tipo = 'poupança'
  }
}

class ContaUniversitaria extends ContaBancaria {
  constructor(agencia, numero, saldo) {
    super(agencia, numero, saldo)
    this.tipo = 'universitária'
  }

  sacar(valor) {
    if (valor > 500) {
      return 'Operação negada!'
    }

    this._saldo = this._saldo - valor
  }
}
