//Somar todos os numeros de um array

function somaNumeros(arr){
  arr.reduce(function(prev, current){
    return prev + current;
  })
}

const arr = [1, 2];

//função que recebe uma lista de preços e um número reprensetando o saldo disponível

const lista = [
  {
    name: 'sabao em po', 
    preco: 15,
  }, 
  {
    name: 'garrafa',
    preco: 30, 
  }
  {
    nome: 'vinho',
    preco: 50,
  },
];

const saldoDisponivel = 100;

function calculaSaldo(saldoDisponivel, lista) {
  return lista.reduce(function(prev, current) {
    return prev - current;
  }, saldoDisponivel);
}

console.log(calculaSaldo(saldoDisponivel, lista));
