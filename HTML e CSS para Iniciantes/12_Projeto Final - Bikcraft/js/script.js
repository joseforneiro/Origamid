// ** ativar links do Menu:

const links = document.querySelectorAll(".header-menu a");

function ativarLink(link) {
  // informação da url ativa:
  const url = window.location.href;
  // informação da url do link:
  const href = link.href;

  if (url.includes(href)) {
    // Adiciona uma classe chamada ativo ao link ativo:
    link.classList.add("ativo");
  }
}

links.forEach(ativarLink);

// ** Ativar itens do orçamento:

const parametros = new URLSearchParams(window.location.search);

function ativarProduto(parametro) {
  const elemento = document.getElementById(parametro);
  // verificando se o elemento existe:
  if (elemento) {
    elemento.checked = true;
  }
}

parametros.forEach(ativarProduto);

// ** Perguntas Frequentes:

const perguntas = document.querySelectorAll(".perguntas button");

function ativarPergunta(event) {
  const pergunta = event.currentTarget;
  const controls = pergunta.getAttribute("aria-controls");
  const resposta = document.getElementById(controls);

  resposta.classList.toggle("ativa");
  const ativa = resposta.classList.contains("ativa");
  console.log(ativa);
  pergunta.setAttribute("aria-expanded", ativa);
}

function eventosPerguntas(pergunta) {
  pergunta.addEventListener("click", ativarPergunta);
  //   console.log(pergunta);
}

perguntas.forEach(eventosPerguntas);

// ** Galeria de Bicicletas:

const galeria = document.querySelectorAll(".bicicleta-imagens img");
const galeriaContainer = document.querySelector(".bicicleta-imagens");

function trocarImagem(event) {
  const img = event.currentTarget;
  const media = window.matchMedia("(min-width: 1000px)").matches;
  if (media) {
    galeriaContainer.prepend(img);
  }
}

function eventosGaleria(img) {
  img.addEventListener("click", trocarImagem);
}

galeria.forEach(eventosGaleria);

// ** Ativar Plugin  (Ativação)

if (window.SimpleAnime) {
  new SimpleAnime();
}
