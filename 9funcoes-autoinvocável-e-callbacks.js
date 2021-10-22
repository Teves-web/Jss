
//Uma função anonima entre parênteses, seguida por outro par de parêntesis que representa sua chamada.
//Esta é um afunção auto invocável.

( 
  function() {
    let name = "@Tevesssss"
    return name;
  }
 )();

// @Tevesssss



//Também pode ser utilizada com parâmetros ou armazenada em uma variável.

(
  function(a, b) {
    return a + b;
  }
 )(1, 2);

//3

//Tambem pode armazenar o resultado da função autoinvocavel numa constante
const soma3 = (
  function() {
    return a + b;
  }
 )(1, 2);

console.log(soma) //3


//CALBACKS-> Uma função passada como argumento para outra função.
//Utilizando callbacks, tem-se maior controle da ordem de chamadas.

const calc = function(operacao, num1, num2){
  return operacao(num1, num2);
}

const soma = function(num1, num2){
  return num1 + num2;
}

const sub = function(num1, num2){
  return num1 - num2;
}

const resultSoma = calc(soma, 1, 2);
const resltSub = calc(sub, 1, 2);

console.log(resltSub); //-1
console.log(resultSoma); //3




