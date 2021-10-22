//If-else

//Declaração 1(dentro do if):Ocorre caso a condição seja verdadeira

//Declaração 2(dentro do else):Ocorre caso a condição seja falsa

function numeroPositivo(num) {
  let resultado

  if (num < 0) {
    resultado = false
  } else {
    resultado = true
  }
  return resultado
}

numeroPositivo(2)
//true
numeroPositivo(-9)
//false

//Código mais limpo
function numeroPositivo(num) {
  let resultado

  const ehNEgativo = num < 0

  if (ehNEgativo) {
    resultado = false
  } else {
    resultado = true
  }
  return resultado
}

//Código mais limpo ainda e sem o else

function numeroPositivo(num) {
  const ehNEgativo = num < 0

  if (ehNEgativo) {
    return false
  }
  return true
}

//Javascript não tem elseif, as palavras sempre estão espaçadas!
function numeroPositivo(num) {
  const ehNEgativo = num < 0
  const maiorQueDez = num > 10

  if (ehNEgativo) {
    return 'Esse número é negativo!'
  } else if (!ehNEgativo && maiorQueDez) {
    return 'Esse número é positivo e maior que 10!'
  }
  return 'Esse número é positivo!'
}

//Switch-case
//Equivale a uma comparação de tipo e valor (===); Sempre precisa de um valor "default"; Ideal para quando se precisa comparar muitos valores.

function getAnimal(id){
  switch(id){
    case 1: return "cão";
    case 2: return "gato";
    case 3: return "pássaro";
    default: return "peixe";

  }
}

getAnimal(1) // cão
getAnimal(4) // peixe
getAnimal("1") //peixe
