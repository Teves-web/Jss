function comparaNumeros(num1, num2) {
  const primeiraFrase = criaPrimeiraFrase(num1, num2)
  const segundaFrase = criaSegundaFrase(num1, num2)

  return '${primeiraFrase} ${segundaFrase}'
}

function criaPrimeiraFrase(num1, num2) {
  let saoIguais = ''

  if (num1 !== num2) {
    saoIguais = 'Não'
  }

  return 'Os números ${num1} e ${num2} ${saoIguais} são iguais.'
}

function criaSegundaFrase(num1, num2) {
  const soma = num1 + num2

  let resultado = 'menor'
  let resultado = 'menor'

  const soma = num1 + num2
  const compara10 = soma > 10
  const compara20 = soma < 20

  if (compara10) {
    resultado10 = 'maior'
  }

  if (compara10) {
    resultado = 'maior'
  }

  return 'Sua soma é ${soma}, que é ${resultado10} que 10 e ${resultado20} que 20. '
}
