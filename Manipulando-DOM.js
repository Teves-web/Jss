//D.O.M (Document Object Model) ->O DOM html é um padrão de como acessar e modificar os elementos HTML de uma página.


//BOM (Browser Object Model) -> Tudo o que está dentro do objeto window.

//Métodos-> Tags, id e classes

//Selecionando os elementos de uma pagina
document.getElementById('titulo');
//retorna o título

document.getElementsByTagName('li');
//retorna todos os li

document.getElementsByClassName('textos');
//retorna todos os textos

document.querySelectorAll('.primeira-classe .segunda-classe');
//retorna as classes



//Métodos para adicionar e deletar elementos ->

document.createElement(element)
//Cria um novo elemento html

document.removeChild(element)
//remove um elemento

document.appendChild(element)
//adiciona um elemento

document.replaceChild(new, old)
//substitui um elemento


//Trabalhando com estilos (manipular alguns estilos html)

//Classes -> Element.classList
const meuElemento = document.getElementById("meu-elemento")

meuElemento.classList.add("novo-estilo");
//Adiciona a classe "meu estilo"

meuElemento.classList.remove(classe);
//Remove a classe "classe"

meuElemento.classList.toggle("dark-mode")
//Adiciona a classe "darl-mode" caso ela não faça parte da lista e remove ela caso faça.


//CSS
//Acessando diretamente o CSS de um elemento

document.getElementsByTagName("p").style.color = "blue";


//Eventos ->qualquer tipo de ação que o ususário faça com a página

//eventos de mouse (mouseover, mouseout);
//eventos de clique(click, dbclick);
//eventos de atualização(change, load);

//Acionando esses eventos (Event Listener)->diretamente no javascript, cria um evento que vai ser acionado no momento em ue o usuário realizar determinada ação.
const botao = document.getElementById("meuBotao");
botao.addEventListener("click", outraFuncao);


//Atributo HTML-> Especifica a função a ser chamada diretamente no elemento HTML.
