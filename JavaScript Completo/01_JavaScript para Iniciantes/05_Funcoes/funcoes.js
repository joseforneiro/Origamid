// Funções

// Bloco de código que pode ser executado e reutilizado. Valores podem ser passados por uma função e a mesma retorna outro valor.

function areaQuadrado(lado) {
  return lado * lado;
}

areaQuadrado(4); // 16
areaQuadrado(5); // 25
areaQuadrado(2); // 4

console.log(areaQuadrado(4));
console.log(areaQuadrado(5));
console.log(areaQuadrado(2));

// Chamada de function declaration

// --------------------------------------------------

// Funções

function pi() {
  return 3.14;
}

var total = 5 * pi(); // 15.7

console.log(total);
// Parênteses () executam uma função

// --------------------------------------------------

// Parâmetros e Argumentos

// Ao criar uma função, você pode definir parâmetros.

// Ao executar uma função, você pode passar argumentos.

// peso e altura são os parâmetros
function imc(peso, altura) {
  const imc = peso / altura ** 2;
  return imc;
}

imc(80, 1.8); // 80 e 1.80 são os argumentos
imc(60, 1.7); // 60 e 1.70 são os argumentos

console.log(imc(80, 1.8));
console.log(imc(60, 1.7));
// Separar por vírgula cada parâmetro. Você pode definir mais de um parâmetro ou nenhum também

// --------------------------------------------------

// Parênteses executa a função

function corFavorita(cor) {
  if (cor === "azul") {
    return "Você gosta do céu";
  } else if (cor === "verde") {
    return "Você gosta de mato";
  } else {
    return "Você não gosta de nada";
  }
}
corFavorita(); // retorna 'Você não gosta de nada'

// Se apenas definirmos a função com o function e não executarmos a mesma, nada que estiver dentro dela irá acontecer

console.log(corFavorita());

// --------------------------------------------------

// Argumentos podem ser funções

// Chamadas de Callback, geralmente são funções que ocorrem após algum evento.

addEventListener("click", function () {
  console.log("Clicou");
});
// A função possui dois argumentos
// Primeiro é a string 'click'
// Segundo é uma função anônima

// Funções anônimas são aquelas em que o nome da função não é definido, escritas como function() {} ou () => {}

// --------------------------------------------------

// Pode ou não retornar um valor

/*
Quando não definimos o return, ela irá retornar undefined. O código interno da função é executado normalmente, independente de existir valor de return ou não.
*/

function imc1(peso, altura) {
  const imc1 = peso / altura ** 2;
  console.log(imc1); // dando o console.log dentro da própria função
}

imc1(90, 1.8); // retorna o imc
console.log(imc1(100, 1.8)); // retorna o imc e undefined (undefined -> pois não tem um return na função)

// --------------------------------------------------

// Valores retornados

// Uma função pode retornar qualquer tipo de dado e até outras funções.

function terceiraIdade(idade) {
  console.log(typeof idade);
  if (typeof idade !== "number") {
    return "Informe a sua idade!";
  } else if (idade >= 60) {
    return true;
  } else {
    return false;
  }
}

// Cuidado, retornar diferentes tipos de dados na mesma função não é uma boa ideia. (NÃO É UMA BOA PRÁTICA)

console.log(terceiraIdade(61));

// --------------------------------------------------

// Escopo

// Variáveis e funções definidas dentro de um bloco {}, não são visíveis fora dele.

function precisoVisitar(paisesVisitados) {
  var totalPaises = 193; // variáveis definidas dentro de funções não são visíveis (acessíveis) fora dela
  return `Ainda faltam ${totalPaises - paisesVisitados} paises para visitar`;
}
// console.log(totalPaises); // erro, totalPaises não definido

// --------------------------------------------------

// Escopo Léxico

// Funções conseguem acessar variáveis que foram criadas no contexto pai

var profissao = "Designer";

function dados() {
  var nome = "André";
  var idade = 28; // a idade aqui está em cinza, pois ela não está sendo usada, pois ela foi definida novamente abaixo
  function outrosDados() {
    var endereco = "Rio de Janeiro";
    var idade = 29;
    return `${nome}, ${idade}, ${endereco}, ${profissao}`;
  }
  return outrosDados();
}

dados(); // Retorna 'André, 29, Rio de Janeiro, Designer'
console.log(dados());
// outrosDados(); // retorna um erro pois outrosDados() é uma função filha da função dados() e não pode ser chamado diretamente. Vai dar que ela não foi definida,

// --------------------------------------------------

// Hoisting

// Antes de executar uma função, o JS 'move' todas as funções declaradas para a memória

imc2(80, 1.8); // imc aparece no console

function imc2(peso, altura) {
  const imc2 = peso / altura ** 2;
  console.log(imc2);
}

// --------------------------------------------------

// Exercício:

// Crie uma função para verificar se um valor é Truthy

function isTruthy(valor) {
  return !!valor;
}

isTruthy();
console.log(`O valor informado é ${isTruthy(10)}`);

// Crie uma função matemática que retorne o perímetro de um quadrado
// lembrando: perímetro é a soma dos quatro lados do quadrado

function perimetroQuadrado(lado) {
  return 4 * lado;
}

perimetroQuadrado();
console.log(`O perímetro do quadrado é ${perimetroQuadrado(4)}`);

// Crie uma função que retorne o seu nome completo
// ela deve possuir os parâmetros: nome e sobrenome

function nomeCompleto(nome, sobrenome) {
  return `${nome} ${sobrenome}`;
}

nomeCompleto("Junior", "Forneiro");
console.log(nomeCompleto("Junior", "Forneiro"));

// Crie uma função que verifica se um número é par

function verificaPar(numero) {
  if (numero % 2 === 0) {
    return "O número é par";
  } else {
    return "O número não é par";
  }
}

verificaPar(10);
console.log(verificaPar(10));

// Crie uma função que retorne o tipo de
// dado do argumento passado nela (typeof)

function tipoDado(dado) {
  return typeof dado;
}

tipoDado(23);
console.log(tipoDado(23));

// addEventListener é uma função nativa do JavaScript
// o primeiro parâmetro é o evento que ocorre e o segundo o Callback
// utilize essa função para mostrar no console o seu nome completo
// quando o evento 'scroll' ocorrer.

addEventListener("scroll", function () {
  console.log("Junior");
});

// Corrija o erro abaixo

// Original:

// function precisoVisitar(paisesVisitados) {
//   var totalPaises1 = 193;
//   return `Ainda faltam ${totalPaises1 - paisesVisitados} países para visitar`;
// }
// function jaVisitei(paisesVisitados) {
//   return `Já visitei ${paisesVisitados} do total de ${totalPaises1} países`;
// }
// precisoVisitar(20);
// jaVisitei(20);

// Corrigida:

var totalPaises1 = 193; // Essa variável estava declarada dentro da função precisoVisitar e portanto não era acessivel pela função jaVisitei.
function precisoVisitar(paisesVisitados) {
  return `Ainda faltam ${totalPaises1 - paisesVisitados} países para visitar`;
}
function jaVisitei(paisesVisitados) {
  return `Já visitei ${paisesVisitados} do total de ${totalPaises1} países`;
}
precisoVisitar(20);
jaVisitei(20);

console.log(precisoVisitar(20));
console.log(jaVisitei(20));
