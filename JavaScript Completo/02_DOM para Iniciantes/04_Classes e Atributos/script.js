// classList

// Retorna uma lista com as classes do elemento. Permite adicionar, remover e verificar se contém.

const menu = document.querySelector(".menu");
console.log(menu);

menu.className; // retorna uma string
menu.classList; // retorna uma lista de classes
menu.classList.add("ativo"); // adiciona a classe
menu.classList.add("ativo", "mobile"); // adiciona duas classes

console.log(menu);
console.log(menu.classList[1]);

menu.classList.remove("ativo"); // remove a classe
menu.classList.toggle("ativo"); // se não tem a classe ele adiciona, se tem a classe ele remove
menu.classList.contains("ativo"); // retorna um valor booleano: true ou false
menu.classList.replace("ativo", "inativo"); // substitui a classe ativo pela classe inativo

// Exemplo de uso:

if (menu.classList.contains("azul")) {
  menu.classList.add("possui-azul");
} else {
  menu.classList.add("nao-possui-azul");
}
console.log(menu.classList);

// Como adicionava uma classe antigamente:

console.log("Como adicionava uma classe antigamente:");
console.log(menu.className); // retorna o nome das classes em string

menu.className = menu.className + " vermelho"; // adicionando a classe vermelho  ao menu
// ou
menu.className += " preto"; // outro modo de adicionar a classe preto ao menu

console.log(menu.className);

// --------------------------------------------------

// attributes

// Retorna uma array-like com os atributos do elemento.

const animais = document.querySelector(".animais");

animais.attributes; // retorna todos os atributos
animais.attributes[0]; // retorna o primeiro atributo

console.log(animais.attributes);
console.log(animais.attributes[0]);
console.log(animais.attributes[1]);
console.log(animais.attributes.class); // ele pega a classe que está no atributo. Também posso fazer isso com id por exemplo.

/*
IMPORTANTE:
Se eu quiser pegar o atributo data-texto:
* Eu não posso pegar dessa forma, pois por padrão ele não aceita atributos com ifem (Irá dar erro): console.log(animais.attributes.data-texto) 
* O correto é fazer: console.log(animais.attributes['data-texto'])
*/

// --------------------------------------------------

// getAttribute e setAttribute

// Métodos que retornam ou definem de acordo com o atributo selecionado

const img = document.querySelector("img");
console.log(img);

img.getAttribute("src"); // retorna o valor do src
img.setAttribute("alt", "Texto Alternativo"); // muda o alt
img.hasAttribute("id"); // true / false
img.removeAttribute("alt"); // remove o alt

img.hasAttributes(); // true / false se tem algum atributo

// É muito comum métodos de get e set;

// Exemplos:
console.log(img.getAttribute("src")); // retornou o caminho da imagem
console.log(img.getAttribute("alt")); // retorna o texto alternativo da imagem. No caso irá retornar null pois não existe o alt na imagem.

img.setAttribute("alt", "É uma raposa"); // O setAttribute cria o atributo se não existir e se existir ele atualiza
console.log(img.getAttribute("alt"));

const possuiAlt = img.hasAttribute("alt"); // Verificando a existência do atributo. Retorna um booleano.
console.log(possuiAlt);

// --------------------------------------------------

// Read Only vs Writable

// Existem propriedades que não permitem a mudança de seus valores, essas são considerados Read Only, ou seja, apenas leitura.

const animais1 = document.querySelector(".animais");

animais1.className; // string com o nome das classes
animais1.className = "azul"; // substitui completamente a string
animais1.className += " vermelho"; // adiciona vermelho à string

animais1.attributes = 'class="ativo"'; // não funciona, read-only

// Lembre-se que podemos modificar o valor de uma propriedade: objeto.propriedade = ''

// --------------------------------------------------

// Exercício
console.log("Exercício");

// Adicione a classe ativo a todos os itens do menu

const itensMenu = document.querySelectorAll(".menu a");
itensMenu.forEach((item) => {
  item.classList.add("ativo");
});

console.log(itensMenu);

// Remove a classe ativo de todos os itens do menu e mantenha apenas no primeiro

itensMenu.forEach((item) => {
  item.classList.remove("ativo");
});
itensMenu[0].classList.add("ativo");

console.log(itensMenu);

// Verifique se as imagens possuem o atributo alt

const imagens = document.querySelectorAll("img");
imagens.forEach((img) => {
  const possuiAtributo = img.hasAttribute("alt");
  console.log(img, possuiAtributo);
});

// Modifique o href do link externo no menu

const link = document.querySelector('a[href^="http"]');
console.log(link);
link.setAttribute("href", "https://www.google.com.br");
console.log(link);
