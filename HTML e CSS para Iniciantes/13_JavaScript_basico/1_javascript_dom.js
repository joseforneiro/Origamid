const curso = "JavaScript";

let total = 10;
total = 20;

console.log(curso);
console.log(total);

// Selecionando um elemento do DOM: document.querySelector

// Selecinando a tag nav:
const nav = document.querySelector("nav");
console.log(nav);

// Selecionando o link de produtos, ou seja, selecionando a tag a dentro da classe produtos:
const produtos = document.querySelector(".produtos a");
console.log(produtos);

// Puxando somente o texto que está dentro da classe produtos:
console.log(produtos.innerHTML);

// Puxando o href de produtos:
console.log(produtos.href);

// removendo o elemento de produtos:
// produtos.remove();

// Modificando o estilo da tag nav:
nav.style.backgroundColor = "black";
nav.style.padding = "1rem";

// Método para adicionar uma classe chamado ativo:
nav.classList.add("ativo");

// Mostra as propriedades e métodos que a tag nav possue
console.dir(nav);
