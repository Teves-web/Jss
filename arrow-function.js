//Arrow Function
const helloword = function(){
  return "Hello word"
}

===

const helloword = () => {
  return "Hello word"
}

===

const helloword = () => "Hello Word";

//Sintaxe
const soma = (a, b) => a + b;
soma(4, 6);
// 10      //Caso exista uma linha, pode dispersar as chaves e o return.

//Não faz hoisting
soma(2, 4);
function soma(a, b){
  return a + b;
}

//outras restrições
//"this" sempre será o objeto global. Métodos para modificar seu valor nçao irão funcionar;

//Não existe o objeto "arguments";

// O construtor (ex: new MeuObjeto()) também não pode ser utilizado.
