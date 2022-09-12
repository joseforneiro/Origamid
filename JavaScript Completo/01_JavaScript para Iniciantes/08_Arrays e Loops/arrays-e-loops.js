// Array

// É um grupo de valores geralmente relacionados. Servem para guardarmos diferentes valores em uma única variável.

var videoGames = ["Switch", "PS4", "XBox"];

videoGames[0]; // Switch
videoGames[2]; // Xbox

// Acesse um elemento da array utilizando [n]

// --------------------------------------------------

// Métodos e Propriedades de uma Array

var videoGames = ["Switch", "PS4", "XBox"];

videoGames.pop(); // Remove o último item e retorna ele
videoGames.push("3DS"); // Adiciona ao final da array
videoGames.length; // 3

// Existem diversos outros métodos, como map, reduce, forEach e mais que veremos mais à frente

// --------------------------------------------------

// For Loop

// Fazem algo repetidamente até que uma condição seja atingida.

for (var numero = 0; numero < 10; numero++) {
  console.log(numero);
}
// Retorna de 0 a 9 no console

// O for loop possui 3 partes, início, condição e incremento

// --------------------------------------------------

// While Loop

var i = 0;
while (i < 10) {
  console.log(i);
  i++;
}
// Retorna de 0 a 9 no console

// O for loop é o mais comum

// --------------------------------------------------

// Arrays e Loops

var videoGames = ["Switch", "PS4", "XBox", "3DS"];
for (var i = 0; i < videoGames.length; i++) {
  console.log(videoGames[i]);
}

// O for loop é o mais comum

// --------------------------------------------------

// Break

// O loop irá parar caso encontro e palavra break

var videoGames1 = ["Switch", "PS4", "XBox", "3DS"];
for (var i = 0; i < videoGames1.length; i++) {
  console.log(videoGames1[i]);
  if (videoGames1[i] === "PS4") {
    break;
  }
}

// --------------------------------------------------

// forEach

// forEach é um método que executa uma função para cada item da Array. É uma forma mais simples de utilizarmos um loop com arrays (ou array-like)

var videoGames2 = ["Switch", "PS4", "XBox", "3DS"];
videoGames2.forEach(function (item) {
  console.log(item.toLowerCase());
});
// O argumento item será atribuído dinamicamente

// Podemos passar os seguintes parâmetros item, index e array

var videoGames3 = ["Switch", "PS4", "XBox", "3DS"];
videoGames3.forEach(function (item, index, array) {
  console.log(item, index, array);
});

// --------------------------------------------------

// Não se confunda com a sintaxe

var numero = 0;
var maximo = 50;
for (; numero < maximo; ) {
  console.log(numero);
  numero++;
}

// Não aconselho escrever da forma acima, mas funciona normalmente.

// --------------------------------------------------

// Crie uma array com os anos que o Brasil ganhou a copa
// 1959, 1962, 1970, 1994, 2002
var ganhouCopa = [1959, 1962, 1970, 1994, 2002];

// Interaja com a array utilizando um loop, para mostrar
// no console a seguinte mensagem, `O brasil ganhou a copa de ${ano}`
for (var i = 0; i < ganhouCopa.length; i++) {
  console.log(`O Brasil ganhou a copa de ${ganhouCopa[i]}`);
}

// Interaja com um loop nas frutas abaixo e pare ao chegar em Pera
var frutas = ["Banana", "Maçã", "Pera", "Uva", "Melância"];

for (var fruta = 0; fruta < frutas.length; fruta++) {
  console.log(frutas[fruta]);
  if (frutas[fruta] === "Pera") {
    break;
  }
}

// Coloque a última fruta da array acima em uma variável,
// sem remover a mesma da array.

var ultimaFruta = frutas[frutas.length - 1];
console.log(ultimaFruta);
