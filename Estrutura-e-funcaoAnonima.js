//Variáveis criadas dentro de uma função apenas podem ser utilizadas dentro da função
function nome(parametros) {
  //instruções
}


//Quando invocamos o "return", a funçãp para de ser executada.
function nome(paramentros){
  //instruções
  return; //valor de retorno
}



//Função anonima
const soma = function (a,b) {
  return a + b;
}
                      //Uma variável pode armazenar uma função.
soma(1, 2) // 3
soma(5, 4) // 9
