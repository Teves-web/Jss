//Parâmetros
//valor padrão

//Pós-ES2015

function exponencial(array, num = 1){
  const result = [];

for(let i = 0; i < array.length; i++){
  result.push(array[i] ** num);
  }

  return result;
}

exponencial([1, 2, 3, 4])
// [1, 2, 3, 4]

exponencial([1, 2, 3, 4], 4)
// [1, 8, 27, 64]



//Objeto "argumesnts"-> Um array com todos os parâmetros passados quando a função foi invocada.

function findMax(){
  let max = -Infinity;

  for(let i = 0; i < arguments.length; i++){
    if (arguments[i] > max){
      max = arguments[i];
    }
  }
  return max;
}

// findMax(1, 2, 3, 6, 90, 1)
// 90

//Função que só retorna argumentos

function showArgs(){
  return arguments;
}
