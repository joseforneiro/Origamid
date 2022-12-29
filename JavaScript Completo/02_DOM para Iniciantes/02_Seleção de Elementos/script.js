// ID

// getElementById seleciona e retorna elementos do DOM

// Seleciona pelo ID
const animaisSection = document.getElementById("animais");
const contatoSection = document.getElementById("contato");

console.log(animaisSection); // retorna todos os elementos que tem o id animais. Esses elementos tem várias propriedades e métodos.
console.log(animaisSection.innerText); // retorna somente o texto dos elementos com id animais

// Retorna null caso não exista
const naoExiste = document.getElementById("teste"); // retorna null

// --------------------------------------------------

// Classe e Tag

// getElementsByClassName e getElementsByTagName
// Selecionam e retornam uma lista de elementos do DOM. A lista retornada está ao vivo, significa que se elementos forem adicionados, ela será automaticamente atualizada.

// Seleciona pela classe, retorna uma HTMLCollection
const gridSection = document.getElementsByClassName("grid-section"); // passando uma classe
const contato = document.getElementsByClassName("grid-section contato"); // passando duas classes. Só irá retornar os elementos que tiverem as duas classes

console.log(gridSection); // retorna um HTMLCollection que parece um array
console.log(gridSection.length); // retorna a quantidade de itens que tem

// Seleciona todas as UL's, retorna uma HTMLCollection
const ul = document.getElementsByTagName("ul");

// Retorna o primeiro elemento
console.log(gridSection[0]);

// --------------------------------------------------

// Seletor Geral Único

// querySelector retorna o primeiro elemento que combinar com o seu seletor CSS.
// Somente retorna o primeiro elemento, ou seja, somente retorna um elemento.

const animais = document.querySelector(".animais");
const contato1 = document.querySelector("#contato");
const ultimoItem = document.querySelector(".animais-lista li:last-child");
const linkCSS = document.querySelector('[href^="https://"]');
const primeiroUl = document.querySelector("ul");

// Busca dentro do Ul apenas
const navItem = primeiroUl.querySelector("li");

console.log(primeiroUl);
console.log(navItem);
console.log(linkCSS.href);

// --------------------------------------------------

// Seletor Geral Lista

// querySelectorAll retorna todos os elementos compatíveis com o seletor CSS em uma NodeList
// A NodeList parece um array mas não é. Ela é estática, ou seja, se depois que fizer o querySelectorAll você adicionar mais um item, não vai pegar

const gridSection1 = document.querySelectorAll(".grid-section");
const listas = document.querySelectorAll("ul");
const titulos = document.querySelectorAll(".titulo");
const fotosAnimais = document.querySelectorAll(".animais-lista img");

// Retorna o segundo elemento
console.log(gridSection1[1]);

// Diferente do getElementsByClassName, a lista aqui é estática

// --------------------------------------------------

// HTMLCollection vs NodeList

// A diferença está nos métodos e propriedades de ambas. Além disso a NodeList retornada com querySelectorAll é estática.

const titulo = document.querySelector(".titulo");
const gridSectionHTML = document.getElementsByClassName("grid-section"); // Caso adicione um elemento, ela atualiza (HTMLCollection).
const gridSectionNode = document.querySelectorAll(".grid-section"); // é estática (NodeList)

titulo.classList.add("grid-section");

console.log(gridSectionHTML); // 4 itens
console.log(gridSectionNode); // 3 itens

const gridSectionHTML1 = document.getElementsByClassName("grid-section");

// --------------------------------------------------

// Array-Like

// HTMLCollection e NodeList são array-like, parecem uma array mas não são. O método de Array forEach() por exemplo, existe apenas em NodeList.

const gridSection2 = document.querySelectorAll(".grid-section");

gridSection2.forEach(function (gridItem, index, array) {
  gridItem.classList.add("azul");
  console.log(index); // index do item na array
  console.log(array); // a array completa
});

// É possível transformar array-like em uma Array real, utilizando o método Array.from(gridSection2)

const arrayGrid = Array.from(gridSection2);

// --------------------------------------------------

// Exercício
console.log("Exercícios:");

// Retorne no console todas as imagens do site

const todasImagens = document.querySelectorAll("img");
console.log(todasImagens);

// Retorne no console apenas as imagens que começaram com a palavra imagem

const imagem = document.querySelectorAll('img[src^="./img/imagem"]');
console.log(imagem);

// Selecione todos os links internos (onde o href começa com #)

const links = document.querySelectorAll('[href^="#"]');
console.log(links);

// Selecione o primeiro h2 dentro de .animais-descricao

const h2Animais = document.querySelector(".animais-descricao h2");
console.log(h2Animais);

// outro modo de fazer:
console.log("Outro modo de fazer:");

const geral = document.querySelector(".animais-descricao");
const geralh2 = geral.querySelector("h2");

console.log(geral);
console.log(geralh2);

// Selecione o último p do site

const paragrafos = document.querySelectorAll("p");
console.log(paragrafos[paragrafos.length - 1]);

// ou

console.log(paragrafos[--paragrafos.length]);
