//A palavra reservada this é uma referência de contexto; no exemplo, this refere-se ao objeto pessoa.

const pessoa = {
  firstName: "João",
  lastName: "Teves",
  id      : 1,
  fullName: function(){
    return this.firstName + " " + this.lastName;
  },
  getId: function(){
    return this.id;
  }
};

pessoa.fullName();
// "João Teves"

pessoa.getId();
//1


//Dentro de um objeto (método)
const pessoa = {
  firstName: 'João',
  lastName: 'Teves',
  getFullname: function () {
    console.log('${this.firstName} ${this.lastName}');
  },
};

pessoa.getFullname();


//Em um evento no html
<!DocumentType html>
<html lang="en">
  <head>
    <title>Document</title>
  </head>
  <body>
    <button
    id="my-btn"
    onclick="console.log(this)"
    >click me!</button>
</body>
</html>

//Manioulando seu valor
//call
const pessoa = {
  nome: 'João',
};

const animal = {
  nome: 'Froid',
};

function getSomething() {
  console.log(this.nome);
}

getSomething.call(pessoa);

//É possivel passat parâmentros para essa função separando-os por vírgulas.
const myObj = {
  num1: 2,
  num2: 4,
};

function soma (a, b) {
  console.log(this.num1 + this.num2 + a + b);
}

soma.call(myObj, 1, 5);
//12

//Apply
const pessoa = {
  nome: 'João',
};

const animal = {
  nome: 'Froid',
};

function getSomething() {
  console.log(this.nome);
}

getSomething.apply(pessoa);

//É possível passar parâmetros para essa funlão dentro de um array
const retornaNomes = function () {
  return this.nome;
};

let joao = retornaNomes.bind({ nome: 'João'});

joao();
//João
