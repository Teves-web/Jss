//map-filter-reduce 
sintaxe e map vs forEach-> //Map-> Um conjunto passa a fazer parte de outro connjunto (ela cria um novo array);
                                // Não modifica o array original; Realiza as operações em ordem
  //sintaxe
  array.map(callback, thisArg) //thisArg(opcional): Valor de 'this' dentro da função de callback
  callback(item, index, array) //Callback: Função a ser executada em cada elemento

//Map vs forEach
const array = [1, 2, 3, 4, 5]; //Map
array.map((item) => item * 2); //Retorno [2, 4, 6, 8, 10];

const array = [1, 2, 3, 4, 5]; //forEach
array.forEach((item) => item * 2); //retorno :undefined

//Diferença entre os dois é o valor que será retornado; 
//Considerar se o array auxiliar será necessário

//Filter -> Cria um novo array; Não modifica o array original
array.filter(callback, thisArg) //callback: função a ser executada em cada elemento;
//thisArg(opcional): valor de 'this' dentro da função de callback

const frutas = ['maçã fuji', 'maçã verde', 'laranja', 'abacaxi'];
frutas.filter((fruta) => fruta.includes('maçã'))
//retorno: ['maçã fuji', 'maçã verde'];

//Reduce: Executa uma função em todos os elementos do array, retornando um valor único
array.reduce(callbackFn, initialValue)
//callback: função a ser executada a partir do acumulador
//initialValue: Valor sobre qual o retorno final irá atuar
