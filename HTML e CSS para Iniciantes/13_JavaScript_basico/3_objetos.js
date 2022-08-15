// 3 - Objetos:

const livro = {
  nome: "O senhor dos Anéis",
  ano: 1954,
  autor: "J. R. R. Tolkien",
};

console.log(livro);
console.log(livro.ano);
console.log(2022 - livro.ano);

const filme = {
  nome: "O senhor dos Anéis",
  ano: 2001,
  autor: "J. R. R. Tolkien",
  diretor: "Peter Jackson",
};

console.log(filme);

console.log(livro.nome + " - " + filme.diretor);

console.log("O nome do livro tem " + livro.nome.length + " caracteres");

console.log(
  "Autor do livro em letras Maiusculas: " + livro.autor.toLocaleUpperCase()
);

console.log(
  "Autor do livro em letras Minusculas: " + livro.autor.toLocaleLowerCase()
);

// Casas decimais são feitas com ponto e não com virgula.

const decimal = 2.99;

// Arredondando o valor da constante decimal:
// A função toFixed ela irá arredontar o número, mas também irá transformá-lo em uma String:
console.log(decimal.toFixed());

// constante decimal arredondada e transformada para número novamente:
console.log(Number(decimal.toFixed()));

const decimal1 = 122.98;

// Vendo o número de caracteres da constante total1 depois de arredondada (3 caracteres)
// E depois vendo o comprimento desse retorno (1 caractere, ou seja, o número 3 tem 1 caractere)
const total1 = decimal1.toFixed().length.toFixed().length;

console.log(total1);
