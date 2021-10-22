
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




