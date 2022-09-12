// Tudo é Objeto

// Strings, Números, Boolean, Objetos e mais, possuem propriedades e métodos. Por isso são objetos.

var nome = "André";

nome.length; // 5 -> Prorpriedade que dá o otal de caracteres da string
nome.charAt(1); // 'n' -> Método que retorna o caractere que está na posição 1. A posição inicial é zero.
nome.replace("ré", "rei"); // 'Andrei' -> Metodo de troca. Aqui está trocando ré por rei.
nome; // 'André' -> As propriedades e métodos não estão alterando a variavel.
nome.toLowerCase(); // andré

// Uma string herda propriedades e métodos do construtor String()

// --------------------------------------------------

// Números

var altura = 1.8;

altura.toString(); // '1.8' -> Retorna o numero com String. Não altera a variável.
altura.toFixed(); // '2' -> Arredonda o valor

// Por um breve momento o número é envolvido em um Objeto (coerção), tendo acesso assim as suas propriedades e métodos

// --------------------------------------------------

// Funções

function areaQuadrado(lado) {
  return lado * lado;
}

areaQuadrado.toString();
//"function areaQuadrado(lado) {
//  return lado * lado;
//}"

areaQuadrado.length; // 1 -> Total de argumentos (parâmetros) que a função possui.

// --------------------------------------------------

// Elementos do DOM

var btn = document.querySelector(".btn");

btn.classList.add("azul"); // adiciona a classe azul ao link a que contem a classe btn
btn.innerText; // 'Clique' -> Retorna o texto que está no link
btn.addEventListener("click", function () {
  console.log("Clicou");
});

// Praticamente todos os efeitos com JS são feitos utilizando propriedades e métodos de objetos do DOM.

// --------------------------------------------------

// Objetos revolucionaram a programação

// Web API's são métodos e propriedades que permitem a interação JavaScript e Browser.

// --------------------------------------------------

// Exercício

// nomeie 3 propriedades ou métodos de strings:

// toFixed
// length
// slice

// nomeie 5 propriedades ou métodos de elementos do DOM

// addEventListener
// appendChild
// id
// innerHTML
// outerHTML

// busque na web um objeto (método) capaz de interagir com o clipboard,
// clipboard é a parte do seu computador que lida com o CTRL + C e CTRL + V
