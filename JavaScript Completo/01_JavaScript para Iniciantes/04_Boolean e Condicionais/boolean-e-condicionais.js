// Boolean

// Existem dois valores booleanos false ou true.

var possuiGraduacao = true;
var possuiDoutorado = false;

// --------------------------------------------------

// Condicionais If e Else

// Verificar se uma expressão é verdadeira com if, caso contrário o else será ativado.

var possuiGraduacao = true;

if (possuiGraduacao) {
  console.log("Possui graduação");
} else {
  console.log("Não possui graduação");
}
// retorna Possui Graduação e não executa o else

// O valor dentro dos parênteses sempre será avaliado em false ou true.

// --------------------------------------------------

// Condicionais Else If

// Se o if não for verdadeiro, ele testa o else if

var possuiGraduacao = true;
var possuiDoutorado = false;

if (possuiDoutorado) {
  console.log("Possui graduação e doutorado");
} else if (possuiGraduacao) {
  console.log("Possui graduação, mas não possui doutorado");
} else {
  console.log("Não possui graduação");
}
// retorna Possui Graduação, mas não possui doutorado

// --------------------------------------------------

// Switch

/*
Com o switch você pode verificar se uma variável é igual à diferentes valores utilizando o case. Caso ela seja igual, você pode fazer alguma coisa e utilizar a palavra chave break; para cancelar a continuação. O valor de default ocorrerá caso nenhuma das anteriores seja verdadeira.
*/

var corFavorita = "Azul";

switch (corFavorita) {
  case "Azul":
    console.log("Olhe para o céu.");
    break;
  case "Vermelho":
    console.log("Olhe para rosas.");
    break;
  case "Amarelo":
    console.log("Olhe para o sol.");
    break;
  default:
    console.log("Feche os olhos");
}

// --------------------------------------------------

// Truthy e Falsy

// Existem valores que retornam true e outros que retornam false quando verificados em uma expressão booleana.

// Falsy (Retornam false)

/*
if(false)
if(0) // ou -0
if(NaN)
if(null)
if(undefined)
if('') // ou "" ou ``
*/

// Todo o resto é truthy

// --------------------------------------------------

// Truthy (Retornam true)

/*
if(true)
if(1)
if(' ')
if('andre')
if(-5)
if({})
*/

// --------------------------------------------------

// Operador Lógico de Negação !

// O operador !, nega uma operação booleana. Ou seja, !true é igual a false

// Truthy

/*
if(!true) // false
if(!1) // false
if(!'') // true
if(!undefined) // true
if(!!' ') // true
if(!!'') // false
*/

// Dica, você pode utilizar o !! para verificar se uma expressão é Truthy ou Falsy

// --------------------------------------------------

// Operadores de comparação

// Vão sempre retornar um valor booleano

10 > 5; // true
5 > 10; // false
20 < 10; // false
10 <= 10; // true
10 >= 11; // false

// --------------------------------------------------

// Operadores de comparação

// O == faz uma comparação não tão estrita e o === faz uma comparação estrita, ou seja, o tipo de dado deve ser o mesmo quando usamos ===

10 == "10"; // true
10 == 10; // true
10 === "10"; // false
10 === 10; // true
10 != 15; // true
10 != "10"; // false
10 !== "10"; // true

// --------------------------------------------------

// Operadores Lógicos &&

// && Compara se uma expressão e a outra é verdadeira

true && true; // true
true && false; // false
false && true; // false
"Gato" && "Cão"; // 'Cão'
5 - 5 && 5 + 5; // 0
"Gato" && false; // false
5 >= 5 && 3 < 6; // true

/*
Se ambos os valores forem true ele irá retornar o último valor verificado Se algum valor for false ele irá retornar o mesmo e não irá continuar a verificar os próximos 
*/

// --------------------------------------------------

// Operadores Lógicos ||

// || Compara se uma expressão ou outra é verdadeira

true || true; // true
true || false; // true
false || true; // true
"Gato" || "Cão"; // 'Gato'
5 - 5 || 5 + 5; // 10
"Gato" || false; // Gato
5 >= 5 || 3 < 6; // true

// Retorna o primeiro valor true que encontrar

// --------------------------------------------------

// Exercicio:

// Verifique se a sua idade é maior do que a de algum parente
// Dependendo do resultado coloque no console 'É maior', 'É igual' ou 'É menor'

var minhaIdade = 28;
var idadePrimo = 32;

if (minhaIdade > idadePrimo) {
  console.log("É maior");
} else if (minhaIdade === idadePrimo) {
  console.log("É igual");
} else {
  console.log("É menor");
}

// Qual valor é retornado na seguinte expressão?
var expressao = 5 - 2 && 5 - " " && 5 - 2; // retorna 3 (&& -> retorna o ultimo verdadeiro ou o primeiro falso)
console.log(expressao);

// Verifique se as seguintes variáveis são Truthy ou Falsy
var nome = "Andre"; // true
var idade = 28; // true
var possuiDoutorado = false; // false
var empregoFuturo; // false
var dinheiroNaConta = 0; // false

console.log(nome, !!nome);
console.log(idade, !!idade);
console.log(possuiDoutorado, !!possuiDoutorado);
console.log(empregoFuturo, !!empregoFuturo);
console.log(dinheiroNaConta, !!dinheiroNaConta);

// Compare o total de habitantes do Brasil com China (valor em milhões)
var brasil = 207;
var china = 1340;

if (brasil === china) {
  console.log("O Brasil tem o mesmo numero de habitantes que a China");
} else if (brasil > china) {
  console.log("O Brasil tem mais habitantes que a China");
} else {
  console.log("A China tem mais habitantes que o Brasil");
}

// O que irá aparecer no console?
if ("Gato" === "gato" && 5 > 2) {
  console.log("Verdadeiro");
} else {
  console.log("Falso");
}

// Irá aparecer Falso

// O que irá aparecer no console?
if ("Gato" === "gato" || 5 > 2) {
  // || -> Retorna o primeiro valor true que encontrar
  console.log("Gato" && "Cão"); // &&-> Retorna o ultimo verdadeiro ou o primeiro falso
} else {
  console.log("Falso");
}

// Irá aparecer Cão
