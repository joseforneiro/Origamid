function livro(nome, ano, autor) {
  const nomeMaior = nome.toUpperCase();
  const totalAnos = 2050 - ano;
  const frase = nome + " por " + autor;
  const objeto = {
    nome: nomeMaior,
    totalAnos,
    frase,
  };
  return objeto;
}

const livroRetorno = livro("o Senhor dos Anéis", 1954, "J. R. R. Tolkien");
console.log(livroRetorno.frase);

// Outro modo de fazer:

function livro1(nome, ano, autor) {
  const objeto = {
    nome: nome.toUpperCase(),
    totalAnos: 2050 - ano,
    frase: nome + " por " + autor,
  };
  return objeto;
}

const livroRetorno1 = livro1("o Senhor dos Anéis", 1954, "J. R. R. Tolkien");
console.log(livroRetorno1.frase);

// Outro modo de fazer:

function livro2(nome, ano, autor) {
  return {
    nome: nome.toUpperCase(),
    totalAnos: 2050 - ano,
    frase: nome + " por " + autor,
  };
}

const livroRetorno2 = livro2("o Senhor dos Anéis", 1954, "J. R. R. Tolkien");
console.log(livroRetorno2.frase);
