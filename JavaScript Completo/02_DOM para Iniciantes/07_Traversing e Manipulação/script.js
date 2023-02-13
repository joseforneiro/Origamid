// outerHTML, innerHTML e innerText

// Propriedades que retornam uma string contendo o html ou texto. É possível atribuir um novo valor para as mesmas element.innerText = 'Novo Texto'.

const menu = document.querySelector(".menu");

menu.outerHTML; // todo o html do elemento
menu.innerHTML; // html interno
menu.innerText; // texto, sem tags

menu.innerText = "<p>Texto</p>"; // a tag vai como texto
menu.innerHTML = "<p>Texto</p>"; // a tag é renderizada

// Exemplos:
const h1 = document.querySelector("h1");
console.log(h1.innerHTML);

const animaisDescricao = document.querySelector(".animais-descricao");
console.log("innerHTML: ", animaisDescricao.innerHTML);
console.log("innerText: ", animaisDescricao.innerText);

h1.innerHTML = "<p>Novo Título - Colocado dentro do h1 existente</p>"; // Substitui o que está dentro do h1 pelo paragrafo

h1.outerHTML = "<p>Novo Título - Substitui o h1 existente pelo parágrafo</p>"; // substitui todo o h1 pelo parágrafo

// --------------------------------------------------

// Trasversing

// Como navegar pelo DOM, utilizando suas propriedades e métodos.

const lista = document.querySelector(".animais-lista");

lista.parentElement; // pai
lista.parentElement.parentElement; // pai do pai
lista.previousElementSibling; // elemento acima
lista.nextElementSibling; // elemento abaixo

lista.children; // HTMLCollection com os filhos
lista.children[0]; // primeiro filho
lista.children[--lista.children.length]; // último filho

lista.querySelectorAll("li"); // todas as LI's
lista.querySelector("li:last-child"); // último filho

// Exemplos:
console.log("lista.parentElement: ", lista.parentElement);
console.log(
  "lista.parentElement.parentElement: ",
  lista.parentElement.parentElement
);
console.log(
  "lista.parentElement.parentElement.parentElement: ",
  lista.parentElement.parentElement.parentElement
);
console.log("lista.previousElementSibling: ", lista.previousElementSibling);
console.log("lista.nextElementSibling: ", lista.nextElementSibling);
console.log("lista.children: ", lista.children);

// --------------------------------------------------

// Element vs Node

// Element's represeta um elemento html, ou seja, uma tag. Node representa um nó, e pode ser um elemento (Element), texto, comentário, quebra de linha e mais.

const lista1 = document.querySelector(".animais-lista");

lista1.previousElementSibling; // elemento acima
lista1.previousSibling; // node acima

lista1.firstChild; // primeiro node child
lista1.childNodes; // todos os node child

// Geralmente estamos atrás de um elemento e não de qualquer node em si.

/* 
Observação:
Element são as tags HTML.
Node pode ser qualquer coisa (texto, espaço, um comentário)
*/

// --------------------------------------------------

// Manipulando Elementos

// É possível mover elementos no dom com métodos de Node.

const lista2 = document.querySelector(".animais-lista");
const contato = document.querySelector(".contato");
const titulo = contato.querySelector(".titulo");

contato.appendChild(lista2); // move lista para o final de contato (move a classe animais-lista para o final da classe contato)
contato.insertBefore(lista2, titulo); // insere a lista antes de titulo (move a classe animais-lista para antes da classe titulo que está dentro da classe contato)
contato.removeChild(titulo); // remove titulo de contato
contato.replaceChild(lista2, titulo); // substitui titulo por lista

// --------------------------------------------------

// Novos Elementos

// Podemos criar novos elementos com o método createElement()

const animais = document.querySelector(".animais"); // Aqui estamos selecioando a classe animais

const novoH1 = document.createElement("h1"); // Aqui estámos criando o elemento h1 dentro da classe animais
novoH1.innerText = "Novo Título"; // Aqui estamos inserindo o texto na tag h1 criada
novoH1.classList.add("titulo"); // Aqui estamos adicionando a classe titulo na tag h1 criada

animais.appendChild(novoH1); // Aqui estamos apendando a tag criada no final da lista da classe animais

// --------------------------------------------------

// Clonar Elementos

// Todo elemento selecionado é único. Para criarmos um novo elemento baseado no anterior, é necessário utilizar o método cloneNode()

const titulo1 = document.querySelector("h1");
const titulo2 = document.querySelector("h1");
const novoTitulo = titulo1;
// titulo1, titulo2 e novoTitulo são iguais

const cloneTitulo = titulo1.cloneNode(true);
const contato1 = document.querySelector(".contato");
contato.appendChild(cloneTitulo);

// true sinaliza para incluir os filhos

// --------------------------------------------------

// Exercício

// Duplique o menu e adicione ele em copy

const menu = document.querySelector(".menu");
const copy = document.querySelector(".copy");

const cloneMenu = menu.cloneNode(true);
copy.appendChild(cloneMenu);

// Selecione o primeiro DT da dl de Faq

const faq = document.querySelector(".faq");
const primeiroDt = faq.querySelector("dt");
console.log(primeiroDt);

// Selecione o DD referente ao primeiro DT

const proximoDD = primeiroDt.nextElementSibling;

// Substitua o conteúdo html de .faq pelo de .animais

const animais1 = document.querySelector(".animais");

faq.innerHTML = animais1.innerHTML;
