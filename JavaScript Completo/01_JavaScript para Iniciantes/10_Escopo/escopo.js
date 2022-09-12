// Escopo de Função

// Variáveis declaradas dentro de funções não são acessadas fora das mesmas.

function mostrarCarro() {
  var carro = "Fusca";
  console.log(carro);
}

mostrarCarro(); // Fusca no console
// console.log(carro); // Erro, carro is not defined

// Escopo evita o conflito entre nomes.

// --------------------------------------------------

// Variável Global (Erro)

// Declarar variáveis sem a palavra chave var, const ou let, cria uma variável que pode ser acessar em qualquer escopo (global). Isso é um erro.

function mostrarCarro1() {
  carro1 = "Fusca 1";
  console.log(carro1);
}

mostrarCarro1(); // Fusca 1
console.log(carro1); // Fusca 1

// 'use strict' impede isso.

// --------------------------------------------------

// Escopo de Função (Pai)

// Variáveis declaradas no escopo pai da função, conseguem ser acessadas pelas funções.

var carro2 = "Fusca 2";

function mostrarCarro2() {
  var frase = `Meu carro é um ${carro2}`;
  console.log(frase);
}

mostrarCarro2(); // Meu carro é um Fusca 2
console.log(carro2); // Fusca 2

// --------------------------------------------------

// Escopo de Bloco

// Variáveis criadas com var, vazam o bloco. Por isso com a introdução do ES6 a melhor forma de declarmos uma variável é utilizando const e let, pois estas respeitam o escopo de bloco.

if (true) {
  var carro3 = "Fusca 3";
  console.log(carro3); // Fusca 3
}
console.log(carro3); // Fusca 3

// --------------------------------------------------

// Var Vaza o Bloco

// Mesmo com a condição falsa, a variável ainda será declarada utilizando hoisting e o valor ficará como undefined.

if (false) {
  var carro4 = "Fusca 4";
  console.log(carro4);
}
console.log(carro4); // undefined

// --------------------------------------------------

// Const e Let no lugar de Var

// A partir de agora vamos utilizar apenas const e let para declarmos variáveis.

if (true) {
  const carro5 = "Fusca 5";
  console.log(carro5); // Fusca 5
}
//   console.log(carro5); // erro, carro is not defined

// --------------------------------------------------

// {} cria um bloco

// Chaves {} criam um escopo de bloco, não confundir com a criação de objetos = {}

{
  var carro6 = "Fusca 6";
  const ano = 2018;
}
console.log(carro6); // Fusca 6
//   console.log(ano); // erro ano is not defined

// --------------------------------------------------

// For Loop

// Ao utilizar var dentro de um forloop, que é um bloco, o valor do variável utilizada irá vazar e existir fora do loop.

for (var i = 0; i < 10; i++) {
  console.log(`Número ${i}`);
}
console.log(i); // 10

// --------------------------------------------------

// For Loop com Let

// Com o let evitamos que o número vaze.

for (let i1 = 0; i < 10; i++) {
  console.log(`Número ${i1}`);
}
//   console.log(i1); // i is not defined

// --------------------------------------------------

// Const

// Mantém o escopo no bloco, impede a redeclaração e impede a modificação do valor da variável, evitando bugs no código.

const mes = "Dezembro";
// mes = 'Janeiro'; // erro, tentou modificar o valor
// const semana; // erro, declarou sem valor

const data = {
  dia: 28,
  mes: "Dezembro",
  ano: 2018,
};

data.dia = 29; // Funciona
console.log(data.dia);
// data = 'Janeiro'; // erro

// Variáveis com valores constantes devem utilizar o const.

// --------------------------------------------------

// Let

// Mantém o escopo no bloco, impede a redeclaração, mas permite a modificação do valor da variável.

let ano;
ano = 2018;
ano++;
console.log(ano); // 2019

// let ano = 2020; // erro, redeclarou a variável

// Geralmente vamos utilizar o const.

// --------------------------------------------------

// --------------------------------------------------

// Exercício

// Por qual motivo o código abaixo retorna com erros?
{
  var cor = "preto";
  const marca = "Fiat";
  let portas = 4;
}
// console.log(var, marca, portas); // volta com erro, pois está pedindo para imprimir var e var não é variável e sim o tipo dela, as variáveis const e let não vazam para fora do escopo de bloco.

// Como corrigir o erro abaixo?
// É só tirar a const dois para fora da função.

const dois = 2;
function somarDois(x) {
  return x + dois;
}
function dividirDois(x) {
  return x / dois;
}
console.log(somarDois(4));
console.log(dividirDois(6));

// O que fazer para total retornar 500?
// trocar var numero = 50 por const numero = 50 e dentro do for trocar var numero = 0 por let numero = 0
const numero = 50;

for (let numero = 0; numero < 10; numero++) {
  console.log(numero);
}

const total = 10 * numero;
console.log(total);
