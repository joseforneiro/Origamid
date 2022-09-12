// Objetos

// Conjunto de variáveis e funções, que são chamadas de propriedades e métodos.

var pessoa = {
  nome: "André",
  idade: 28,
  profissao: "Designer",
  possuiFaculdade: true,
};

pessoa.nome; // 'André'
pessoa.possuiFaculdade; // true

console.log(typeof pessoa);
console.log(pessoa.nome);
console.log(pessoa.possuiFaculdade);

// Propriedades e métodos consistem em nome (chave) e valor

// --------------------------------------------------

// Métodos

// É uma propriedade que possui uma função no local do seu valor.

var quadrado = {
  lados: 4,
  area: function (lado) {
    return lado * lado;
  },
  perimetro: function (lado) {
    return this.lados * lado;
  },
};

quadrado.lados; // 4
quadrado.area(5); // 25
quadrado.perimetro(5); // 20

// --------------------------------------------------

// Métodos

// Abreviação de area: function() {} para area() {}, no ES6+

var quadrado = {
  lados: 4,
  area(lado) {
    return lado * lado;
  },
  perimetro(lado) {
    return this.lados * lado;
  },
};

// --------------------------------------------------

// Organizar o Código

// Objetos servem para organizar o código em pequenas partes reutilizáveis.

// Math (matemática) é um objeto nativo de JavaScript. Já percebeu que console é um objeto e log() um método?

Math.PI; // 3.14
Math.random(); // número aleatório

var pi = Math.PI;
console.log(pi); // 3.14

var absoluto = Math.abs(-100);
console.log(absoluto); // 100

// --------------------------------------------------

// Criar um Objeto

// Um objeto é criado utilizando as chaves {}

var carro = {};
var pessoa = {};

console.log(typeof carro); // 'object'

// --------------------------------------------------

// Dot Notation Get

// Acesse propriedades de um objeto utilizando o ponto .

var menu = {
  width: 800,
  height: 50,
  backgroundColor: "#84E",
};

var bg = menu.backgroundColor; // '#84E'

// --------------------------------------------------

// Dot Notation Set

// Substitua o valor de uma propriedade utilizando . e o = após o nome da mesma.

var menu = {
  width: 800,
  height: 50,
  backgroundColor: "#84E",
};

menu.backgroundColor = "#000";
console.log(menu.backgroundColor); // '#000'
console.log(menu);

// --------------------------------------------------

// Adicionar Propriedades e Métodos

// Basta adicionar um novo nome e definir o valor.

var menu1 = {
  width: 800,
};

menu1.height = 50;
menu1.position = "fixed";

console.log(menu1);

// --------------------------------------------------

// Palavra-chave this

// this irá fazer uma referência ao próprio objeto.

var height = 120;
var menu2 = {
  width: 800,
  height: 50,
  metadeHeight() {
    return this.height / 2; // this.height é a mesma coisa que escrevesse menu2.height. Se não colocar o this ele irá pegar o height que está fora do objeto
  },
};

menu2.metadeHeight(); // 25
console.log(menu2.metadeHeight());
// sem o this, seria 60

// this irá retornar o próprio objeto

// --------------------------------------------------

// Protótipo e Herança

// O objeto herda propriedades e métodos do objeto que foi utilizado para criar o mesmo.

var menu3 = {
  width: 800,
};

menu3.hasOwnProperty("width"); // true
menu3.hasOwnProperty("height"); // false

console.log(menu3.hasOwnProperty("width"));
console.log(menu3.hasOwnProperty("height"));

// hasOwnProperty é um método de Object.
// menu3.hasOwnProperty('width') -> verifica se tem a propriedade width dentro do objeto menu3

// --------------------------------------------------

// Exercício

// Crie um objeto com os seus dados pessoais
var meusDadosPessoais = {
  nome: "Junior",
  idade: 49,
  altura: 1.7,
};

// Deve possui pelo menos duas propriedades nome e sobrenome
meusDadosPessoais.sobrenome = "Forneiro";
console.log(meusDadosPessoais);

// Crie um método no objeto anterior, que mostre o seu nome completo

meusDadosPessoais.nomeCompleto = function () {
  return `Meu nome é ${this.nome} ${this.sobrenome}`;
};

console.log(meusDadosPessoais.nomeCompleto());

// Modifique o valor da propriedade preco para 3000
var carro = {
  preco: 1000,
  portas: 4,
  marca: "Audi",
};

carro.preco = 3000;
console.log(carro);

// Crie um objeto de um cachorro que represente um labrador,
// preto com 10 anos, que late ao ver um homem

var cachorro = {
  raca: "labrador",
  cor: "preto",
  idade: 10,
  latir(pessoa) {
    if (pessoa === "homem") {
      return "Latir";
    } else {
      return "Não Late";
    }
  },
};

console.log(cachorro.latir("homem"));
console.log(cachorro.latir("mulher"));
console.log(cachorro.latir());
