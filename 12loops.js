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

//for
//Loop dentro de elementos iteráveis (arrays, string).

function multiplicaPorDois(array){
  let multiplicados = [];

  for(let i = 0; i < array.length; i++){
    multiplicados.push(array[i] * 2);
  }

  return multiplicados;
}

const meusNumeros = [2, 33, 456, 356, 40];

multiplicaPorDois(meusNumeros);
// [4, 66, 912, 712, 80]



//for in
//loop entre propriedades enumeráveis de um objeto.
function forInExemplo(obj){
  for(prop in obj){
    console.log(prop);
  }
}

const meuObjeto = {
  nome: "João",
  idade: "22",
  cidade: "Ilhéus",
}

forInExemplo(meuObjeto);
//nome
//idade
//cidade



//loop entre estruturas iteráveis (arreys, strings)
function logLetras(palavra){
  for(letra of palavra){
    console.log(letra);
  }
}

const palavra = "abacaxi";

logLetras(palavra)
//a
//b
//c
//a
//x
//i

function LogNumeros(nums){
  for(num of num){
    console.log
  }
}

const nums = [30, 20, 233, 2];

logLetras(nums)
//30
//20
//233
//2



//while 
//executa instruções até que a condição se torne falsa.

function exemploWhile(){
  let num = 0

  while(num <= 5){
    conslole.log(num);
    num++
  }
}

exemploWhile()
//0
//1
//2
//3
//4
//5

//do...while
//executa instruções até que a condição se torne falsa(porem a primeira execução sempre ocorre).
function exemploDoWhile(){
  let num = 0;

  do {
    console.log(num);
    num++;
  }while(num <= 5)
}

exemploDoWhile()
//0
//1
//2
//3
//4
//5

function exemploDoWhile(){
  let num = 6;

  do{
    console.log(num);
    num++;
  } while(num <= 5)
}

exemploWhile()
//6
