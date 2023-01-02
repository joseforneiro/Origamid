// Height e Width

// Estas são propriedades e métodos dos objetos Element e HTMLElement, a maioria delas são Read Only

const section = document.querySelector(".animais");

section.clientHeight; // retorna o height + padding
section.offsetHeight; // retorna o height + padding + border
section.scrollHeight; // retorna o height total, mesmo dentro de scroll

// Mesma coisa para o Width, clientWidth...

// Exemplo:

const listaAnimais = document.querySelector(".animais-lista");
console.log(listaAnimais.clientHeight);
console.log(listaAnimais.scrollHeight);

// --------------------------------------------------

// offsetTop e offsetLeft

const section1 = document.querySelector(".animais");

// Distância entre o topo do elemento e o topo da página
section1.offsetTop;

// Distância entre o canto esquerdo do elemento
// e o canto esquerdo da página
section1.offsetLeft;

// --------------------------------------------------

// getBoundingClientRect()

// Método que retorna um objeto com valores de width, height, distâncias do elemento e mais.

const section2 = document.querySelector(".animais");

const rect = section2.getBoundingClientRect();
rect.height; // retorna o height do elemento
rect.width; // retorna o width do elemento
rect.top; // retorna a distância entre o topo do elemento e o scroll

// Exemplo:

console.log(rect);
console.log(rect.height);
console.log(rect.width);
console.log(rect.top);

// --------------------------------------------------

// Window

window.innerWidth; // width da janela (página web)
window.outerWidth; // soma dev tools também (width da página web + width das ferramentas de desenvolvimento (console))
window.innerHeight; // height da janela (página web)
window.outerHeight; // soma a barra de endereço (height: da página web + height da barra de endereço do navegador)

window.pageYOffset; // distância total do scroll vertical
window.pageXOffset; // distância total do scroll horizontal

// Verificar se a tela do usuário é menor que 600px:
if (window.innerWidth < 600) {
  console.log("Tela menor que 600px");
}

// Exemplo:

const primeiroh2 = document.querySelector("h2");
const h2rect = primeiroh2.getBoundingClientRect();

if (h2rect.top < 0) {
  console.log("passou do elemento");
}

// --------------------------------------------------

// matchMedia();

// Utilize um media-querie como no CSS para verificar a largura do browser

const small = window.matchMedia("(max-width: 600px)");
console.log(small);

// Se não atender a condição de max_width, o matches é falso. Se atender é true.

if (small.matches) {
  console.log("Tela menor que 600px");
} else {
  console.log("Tela maior que 600px");
}

// ou

const small1 = window.matchMedia("(max-width: 600px)").matches;
console.log(small1);

// Se não atender a condição de max_width, o matches é falso. Se atender é true.

if (small1) {
  console.log("Tela menor que 600px");
} else {
  console.log("Tela maior que 600px");
}

/* Dica:

* Selecione o elemento no inspetor (dom)
* Abra o console e digite $0 para selecionar o mesmo
* Os elementos selecionados anteriormente são $1, $2 ...
*/

// --------------------------------------------------

// Exercício
console.log("Exercício");

// Verifique a distância da primeira imagem
// em relação ao topo da página

const primeiraImagem = document.querySelector("img");
console.log(primeiraImagem.offsetTop);

// Retorne a soma da largura de todas as imagens

function somaImagens() {
  const todasimagens = document.querySelectorAll("img");
  let soma = 0;
  todasimagens.forEach((imagem) => {
    soma = soma + imagem.offsetWidth;
  });
  console.log(soma);
}
// Propriedade do window em que se pode atribuir uma função onde ela só é ativada quando o onload ocorre.
window.onload = function () {
  somaImagens();
};

// Verifique se os links da página possuem
// o mínimo recomendado para telas utilizadas
// com o dedo. (48px/48px de acordo com o google)

const links = document.querySelectorAll("a");
links.forEach((link) => {
  const linkWidth = link.offsetWidth;
  const linkHeight = link.offsetHeight;
  if (linkWidth >= 48 && linkHeight >= 48) {
    console.log(link, "Possui boa acessibilidade");
  } else {
    console.log(link, "Não possui boa acessibilidade");
  }
});

// Se o browser for menor que 720px,
// adicione a classe menu-mobile ao menu

const browserSmall = window.matchMedia("(max-width: 720px").matches;

if (browserSmall) {
  const menu = document.querySelector(".menu");
  menu.classList.add("menu-mobile");
}
