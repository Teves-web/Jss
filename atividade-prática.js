const alunos = [
  {
    nome: 'João',
    nota: 8,
    turma: '2A',
  },
  {
    nome: 'Sofia',
    nota: 7,
    turma: '1B',
  }
  {
    nome: 'James',
    nota: 7,
    turma: '2B',
  }
];


function alunosAprovados(array, media){
  let alunosAprovados = [];

  for(let i = 0; i < array.length; i++) {

    {nota, nome} = array[i];

    if(array[i].nota >= media){
      aprovados.push(array[i].nome);
    }
  }
return aprovados;
}

console.log(alunosaprovados(alunos, 3));




//Calcula idade
function calculaIdade(anos) {
  return `Daqui a ${anos}, ${this.nome} terá ${this.idade +anos
  }anos de idade.`;
}

const pessoa1 ={
  nome: "James",
  idade: 22,
};

const pessoa2 ={
  nome: "Jacolis",
  idade: 23,
};

const pessoa3 ={
  nome: "Clarêncio",
  idade: 22,
}

console.log(calculaIdade.call(pessoa2, 30));

//apply console.log(calculaIdade.apply(pessoa2, [30]));
