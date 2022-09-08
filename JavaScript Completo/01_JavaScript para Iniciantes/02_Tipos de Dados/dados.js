// Tipos de dados. Todos são primitivos exceto os objetos.

var nome = "André"; // String
var idade = 28; // Number
var possuiFaculdade = true; // Boolean
var time; // Undefined
var comida = null; // Null
var simbolo = Symbol(); // Symbol
var novoObjeto = {}; // Object
// Primitivos são dados imutáveis.

// --------------------------------------------------

var nome1 = "Junior";
console.log(typeof nome1);
// typeof retorna o tipo de dado da variavel nome1. no caso string

// --------------------------------------------------

// Você pode somar uma string e assim concatenar as palavras.
var nome2 = "André";
var sobrenome = "Rafael";
var nomeCompleto = nome2 + " " + sobrenome;
console.log(nomeCompleto);

// --------------------------------------------------
// Você pode somar números com strings, o resultado final é sempre uma string.

var gols = 1000;
var frase = "Romário fez " + gols + " gols";
console.log(frase);

// --------------------------------------------------

var ano = "2018";
var mes = 8;
console.log(ano + mes);

var ano1 = 2018;
var mes1 = 8;
console.log(ano1 + mes1);

// --------------------------------------------------

// Aspas Duplas, Simples e Template String

('JavaScript é "super" fácil');
("JavaScript é 'super' fácil");
('JavaScript é "super" fácil');
`JavaScript é "super" fácil"`;
// "JavaScript é "super" fácil"; // Inválido

// --------------------------------------------------

// Template String

var gols1 = 1000;
var frase1 = "Romário fez " + gols1 + " gols";
var frase2 = `Romário fez ${gols1} gols`; // Utilizando Template String
var frase3 = `Romário fez ${gols1 * 2} gols`;

// Você deve passar expressões / variáveis dentro de ${}
console.log(frase1);
console.log(frase2);
console.log(frase3);

// --------------------------------------------------

// Exercício:

// Declare uma variável contendo uma string
var cidade = "São José dos Campos";
console.log(cidade);

// Declare uma variável contendo um número dentro de uma string
var ano = "2022";
console.log(ano);

// Declare uma variável com a sua idade
var idade = 49;
console.log(idade);

// Declare duas variáveis, uma com seu nome
// e outra com seu sobrenome e some as mesmas
var meuNome = "Junior";
var meuSobrenome = "Forneiro";

var meuNomeCompleto = meuNome + " " + meuSobrenome;
// ou
var meuNomeCompleto1 = `${meuNome} ${meuSobrenome}`;

console.log(meuNomeCompleto);
console.log(meuNomeCompleto1);

// Coloque a seguinte frase em uma variável: It's time
var frase4 = "It's time";
// ou
var frase5 = `It's time`;
var frase6 = "It's time";

console.log(frase4);
console.log(frase5);
console.log(frase6);

// Verifique o tipo da variável que contém o seu nome
console.log(typeof meuNome);
