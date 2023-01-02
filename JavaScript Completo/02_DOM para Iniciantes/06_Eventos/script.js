// addEventListener

// Adiciona uma função ao elemento, esta chamada de callback, que será ativada assim que certo evento ocorrer neste elemento.

const img = document.querySelector("img");

// elemento.addEventListener(event, callback, options)
img.addEventListener("click", function () {
  console.log("Clicou1");
});

// O terceiro parâmetro é opcional.

// --------------------------------------------------

// Callback

// É boa prática separar a função de callback do addEventListener, ou seja, declarar uma função ao invés de passar diretamente uma função anônima

const img1 = document.querySelector("img");
function callback() {
  console.log("Clicou2");
}

img1.addEventListener("click", callback); // 🚀 (Assim é o correto)
img1.addEventListener("click", callback()); // undefined (Não se coloca paranteses... É errado)

// Os dois exemplos abaixo funcionam, mas não é bom utilizar uma função Oculta.
img1.addEventListener("click", function () {
  console.log("Clicou3");
});
img1.addEventListener("click", () => {
  console.log("Clicou4");
});

// --------------------------------------------------

// Event

// O primeiro parâmetro do callback é referente ao evento que ocorreu.

const img2 = document.querySelector("img");

function callback1(event) {
  console.log(event);
}

img2.addEventListener("click", callback1);

// Geralmente utilizam e como nome do parâmetro

// --------------------------------------------------

// Propriedades do Event

const animaisLista = document.querySelector(".animais-lista");

function executarCallback(event) {
  const currentTarget = event.currentTarget; // this (referente ao item que eu selecionei ao item que eu adicionei o evento)
  const target = event.target; // onde o clique ocorreu
  const type = event.type; // tipo de evento
  const path = event.path; // caminho
  console.log(
    "currentTarget: ",
    currentTarget,
    "target: ",
    target,
    "type: ",
    type,
    "path: ",
    path
  );
}

animaisLista.addEventListener("click", executarCallback);

// --------------------------------------------------

// event.preventDefault()

// Previne o comportamento padrão do evento no browser. No caso de um link externo, por exemplo, irá previnir que o link seja ativado.

const linkExterno = document.querySelector('a[href^="http"]');

function clickNoLink(event) {
  event.preventDefault();
  console.log(event.currentTarget.href);
}

linkExterno.addEventListener("click", clickNoLink);

// --------------------------------------------------

// This

// A palavra chave this é uma palavra especial de JavaScript, que pode fazer referência a diferentes objetos dependendo do contexto. No caso de eventos, ela fará referência ao elemento em que addEventListener foi adicionado.

const img3 = document.querySelector("img");

function callback2(event) {
  console.log(this); // retorna a imagem
  console.log(this.getAttribute("src"));
}

img3.addEventListener("click", callback2);

// Geralmente igual ao event.currentTarget

// --------------------------------------------------

// Diferentes Eventos

// Existem diversos eventos como click, scroll, resize, keydown, keyup, mouseenter e mais. Eventos podem ser adicionados a diferentes elementos, como o window e document também.

const h1 = document.querySelector("h1");

function callback3(event) {
  console.log(event.type, event);
}

h1.addEventListener("click", callback3); // Acontece quando clico
h1.addEventListener("mouseenter", callback3); // Acontece quando passo o mouse por cima
window.addEventListener("scroll", callback3); // Acontece quando faço o scroll ma página
window.addEventListener("resize", callback3); // Acontece quando eu altero o tamanho da janela do browser
window.addEventListener("keydown", callback3); // Acontece quando eu preciono uma tecla. Keyup é quando eu solto a tecla
// window.addEventListener('mousemove', callback3); // Acontece cada vez que eu movimento o mouse

// Lista com diversos eventos:
// https://developer.mozilla.org/en-US/docs/Web/Events

// --------------------------------------------------

// Keyboard

// Você pode adicionar atalhos para facilitar a navegação no seu site, através de eventos do keyboard.

function handleKeyboard(event) {
  if (event.key === "a") document.body.classList.toggle("azul");
  else if (event.key === "v") document.body.classList.toggle("vermelho");
}

window.addEventListener("keydown", handleKeyboard);

// --------------------------------------------------

// forEach e Eventos

// O método addEventListener é adicionado à um único elemento, então é necessário um loop entre elementos de uma lista, para adicionarmos à cada um deles.

const imgs = document.querySelectorAll("img");

function imgSrc(event) {
  const src = event.currentTarget.getAttribute("src");
  console.log(src);
}

imgs.forEach((img) => {
  img.addEventListener("click", imgSrc);
});

// --------------------------------------------------

// Exercício
console.log("Exercício");

// Quando o usuário clicar nos links internos do site,
// adicione a classe ativo ao item clicado e remova dos
// demais itens caso eles possuam a mesma. Previna
// o comportamento padrão desses links

const linksInternos = document.querySelectorAll('a[href^="#"]');

function adicionaClasse(event) {
  event.preventDefault(); // aqui estamos previnindo o evento padrão
  // removendo de todos os links a classe ativo:
  linksInternos.forEach((link) => {
    link.classList.remove("ativo");
  });
  // Colocando no link clicado a classe ativo:
  event.currentTarget.classList.add("ativo");
}

linksInternos.forEach((link) => {
  link.addEventListener("click", adicionaClasse);
});

// Selecione todos os elementos do site começando a partir do body,
// ao clique mostre exatamente quais elementos estão sendo clicados

const todosElementos = document.querySelectorAll("body *");

function handleElemento(event) {
  console.log(event.currentTarget);
}

todosElementos.forEach((elemento) => {
  elemento.addEventListener("click", handleElemento);
});

// Utilizando o código anterior, ao invés de mostrar no console,
// remova o elemento que está sendo clicado, o método remove() remove um elemento

function handleElemento(event) {
  // event.currentTarget.remove(); // Essa linha está comentada para não remover os itens da tela. Mas para o exercício funcionar deixar a linha descomentada.
}

todosElementos.forEach((elemento) => {
  elemento.addEventListener("click", handleElemento);
});

// Se o usuário clicar na tecla (t), aumente todo o texto do site.

function handleClickT(event) {
  console.log(event.key); // para mostrar a tecla clicada
  if (event.key === "t") {
    // documentElement: Está falando diretamente com a tag html
    document.documentElement.classList.toggle("textomaior");
  }
}

window.addEventListener("keydown", handleClickT);

/*
Observação para esse último exercício:

No css acrescentou-se as seguintes classes:

html {
  font-size: 16px;
}

html.textomaior {
  font-size: 150%;
}
*/
