//map
//Estrutura-> 
const myMap = new Map ()
//caracteristicas: Uma coleção de arrays no formato [chave, valor]; -> Pode ser iterado por um loop for...of

//Métodos (adicionar, ler e deletar)
const myMap = new Map ()

myMap.set('apple,', 'fruit');
//Map(1) {"apple" => "fruit"}

myMap.get(apple);
//"fruit"

myMap.delete("apple");
//true

myMap.get("apple");
//undefined


//Map vs Objeto
//Maps-> podem ter chaves de qualquer tipo; possuem a propriedade length; São mais fáceis de iterar; Utilizado quando o valor das chaves é desconhecido; Os valores tem o mesmo tipo.

//Objeto-> sempre tem chaves no formato de string; No objeto nãp necessariamente se tem valores do mesmo tipo


//Set (coleções chaveadas)-> São estruturas que armazenam apenas valores únicos (não se repetem nunca).
const myArray = [1, 1, 2, 2, 3, 4, 5, 6, 7, 8, 2, 1];
const mySet = new Set(myArray);

//Métodos(Adicionar utiliza o .add)
const mySet = new Set();
mySet.add(1);
mySet.add(5);
//consultar(utiliza o .has)
mySet.has(1);
//true
mySet.has(3);
//false

//deletar(utiliza o .delete)
mySet.delete(5);

//Diferença entre Set e Array
//Set-> Possuem valores únicos; Em vez da propriedade length, consulta-se o número de resgistros pela propriedade size; Não possui os métodos map, filter, reduce etc.
