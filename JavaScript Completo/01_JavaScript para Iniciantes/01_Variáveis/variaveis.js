var nome = "André";
var idade = 28;
var possuiFaculdade = true;

console.log(nome, idade, possuiFaculdade);

// --------------------------------------------------
var preco = 25;
var totalComprado = 5;
var totalPreco = totalComprado * preco;

console.log(totalPreco);

// --------------------------------------------------
var sobrenome = "Rafael",
  cidade = "Rio";

console.log(sobrenome, cidade);

// --------------------------------------------------
var semDefinir;

// vai dar undefined
console.log(semDefinir);

// --------------------------------------------------
/*
** O nome das variáveis pode começar com _ ou $ (Ex.: $selecionar, _nome)
** Se tiver mais de uma palavra, a primeira começa com letra minúscula e a segunda
 começa com letra maiúscula (Ex.: possuiFaculdadeNoExterior)
** É possível mudar os valores atribuídos a variáveis declaradas com var e let. Porém não é possível modificar valores das declaradas com const.

Obs.: ** A variável var não é mais utilizada, pois ela vaza escopo, ou seja toda a aplicação pode enxergá-la.
      ** Isso pode causar uma falha de segurança.
*/

// --------------------------------------------------

var time = "Vasco";
time = "Flamengo";

console.log(time);

// O var deixa atribuir a mesma variável mais de uma vêz:
var time1 = "Vasco";
var time1 = "Botafogo";

console.log(time1);

// O let não deixa atribuir a mesma variável mais de uma vêz:
let time2 = "Vasco";
time2 = "São Paulo";

console.log(time2);

// O const não deixa deixa alterar o valor da variável, pois ela é uma constante:
const time3 = "Vasco";
//    time3 = 'São Paulo';

console.log(time3);

// --------------------------------------------------

// Exercício:

// Declarar uma variável com o seu nome:
var meuNome = "Junior";

// Declarar uma variável com a sua idade:
var minhaIdade = 49;

// Declarar uma variável com a sua comida favorita e não atribuir valor:
var minhaComidaFavorita;

// Atribuir valor a sua comida favorita:
minhaComidaFavorita = "Risoto";

// Declarar 5 variáveis diferentes sem valor:
var variavel1, variavel2, variavel3, variavel4, variavel5;

console.log(meuNome, minhaIdade, minhaComidaFavorita);
