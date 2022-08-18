if (true) {
    console.log('código executado');
} else {
    console.log('Não executado');
}

// ******************************************************************

// String vazia sempre vai ser falsa
const condicao = Boolean("");
console.log(condicao);

// String com pelo menos um caractere sempre vai ser verdadeira
const condicao1 = Boolean("a");
console.log(condicao1);

// Para testar se é verdadeiro ou falso:

const condicao2 = 0;
console.log(Boolean(condicao2));

// Qualquer número é verdadeiro seja positivo ou negativo, com excessão do 0 (zero) que é falso.
// O null ou undefined também é falso
// undefined

// quando eu seleciono um elemento da tela que exista ele retornará true e se não existir retornará false.

// Ex: body: 
const condicao4 = document.querySelector('body');
console.log(condicao4);

console.log(Boolean(condicao4));

// Ex: p (paragrafo): Quando não acha o elemento na tela (ou seja, no html) retorna null que é falso 
const condicao5 = document.querySelector('p');
console.log(condicao5);

console.log(Boolean(condicao5));

// ******************************************************************

// Operadores lógicos, quando eu quero verificar se mais de uma condição é verdadeira:
// e  -> &&
// ou -> ||

if (true && false) {
    console.log("Não executa");
}

if (true || false) {
    console.log("Executa");
}

const elemento = document.querySelector("p");

if (elemento || document.querySelector("body")){
    console.log ("teste");
}

// ******************************************************************

// Operadores de comparação:

// 'JavaScript' === 'javascript'; // false 
// '20' === 20; // false 
// 30 !== 20; // true 

document.querySelector('.texto') !== null; // false 

// Comparar números:

if (10 > 5) {
    console.log("verdadeiro");
}

// 10 > 5; // true
// 20 < 10; // false
// 10 >= 10; // true
// 20 <= 30; // true

// ******************************************************************

const elemento1 = document.querySelector("h3");
const texto1 = elemento1.innerText;

console.log(texto1);

if (texto1.toUpperCase() === 'HTML') {
    console.log("Executar código");
}