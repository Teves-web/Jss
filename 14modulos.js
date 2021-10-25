//-> São arquivos Javascript que tem a capacidade de importar e exportar informações de outros arquivosd do mesmo tipo.
//-> Algumas vantagens: Organização do código; compartilhamento de variáveis em escopos diferentes; Explicita as dependências do arquivo;

// Exportar:
// ->Named exports: Exporta as coisas individualmente:
  export function mostraIdade(pessoa){
     return `A idade de ${pessoa.nome} é ${pessoa.idade}`;
   }
  export function mostraCidade(pessoa) {
    return `A idade de ${pessoa.nome} é ${pessoa.cidade}`
  };
  export function mostraHobby(pessoa) {
    return`A idade de ${pessoa.nome} é ${pessoa.hobby}`
  };
  
//Ou declara todas as funções e exporta tudo no final:
 function...
 ...
 export{
   mostraIdade,
   mostraCidade,
   mostraHobby
 }


// ->Defaut exports: Só pode haver um por arquivo; Será o retorno padrão do ser arquivo;
function mostraIdade(pessoa){
     return `A idade de ${pessoa.nome} é ${pessoa.idade}`;
   }
function mostraCidade(pessoa) {
    return `A idade de ${pessoa.nome} é ${pessoa.cidade}`
  };
function mostraHobby(pessoa) {
    return`A idade de ${pessoa.nome} é ${pessoa.hobby}`
  }

export {
mostraIdade,
mostraCidade,
}
export default mostraHobby;



//Importar->
//Named exports:
import {funcao, variavel, classe} from './arquivo.js'

//Default exports
import valorDefault from './arquivo.js'

//Iportar trocando nome de imports
import {arquivo as Apelido } from './arquivos.js';
Apelido.metodo();

//importar todos os dados de uma arquivo
import * as INFOS from './arquivo.js';
INFOS.metodoA();
console.log(INFOS.variavel);

//Vinculando ao HTML: Para fazer testes localmente (de um arquivo no computador), será necessario estar rodando um servior.
//isso pode ser feito utilizando a extensão live server no vscode.
<script type="module" src="./main.js"></script>

//Curiosidades: Módulos estão sempre em "strict mode";
//           -> Podem ser utilizadas as extensões .js e .mjs;
//           -> Para testes locais, é necessario utilizar um seervidor;
//           -> Ao importar, sempre lembrar-se da extensão (.js e .mjs);
//           -> Ao importar, sempre utilizar "./" como ponto de partida.
