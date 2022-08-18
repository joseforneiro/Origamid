const lista = ['JavaScript', 'HTML', 'CSS', 20, true];

const js = lista[0];
const html = lista[1];
const css = lista[2];

const nome = lista[3];

console.log(lista);
console.log(nome);

// ******************************************************************

const body = document.querySelector('body');

for (let index = 0; index < lista.length; index++) {
    console.log(index + " - " + lista[index]);
    
    /*
    body.innerHTML = body.innerHTML + "<p>Primeiro Modo</p>"
    // ou
    body.innerHTML += "<p>Segundo Modo</p>"
    */

    body.innerHTML += '<li>' + lista[index] + '</li>'
}

// ******************************************************************

function adicionarBody(item) {
    body.innerHTML += "<li>"+ item +"</li>"
}

lista.forEach(adicionarBody);

// ou

function adicionarBody1(item, index) {
    body.innerHTML += "<li>" +  index + " - " + item + "</li>"
}

lista.forEach(adicionarBody1);

// ******************************************************************

// Referente a lista no html

const links = document.querySelectorAll('nav a');

function logHref(item) {
    const href = item.href;
    console.log(href);
}

links.forEach(logHref);

// Pegar o primeiro item da lista
console.log(links[0]);

// Pegar o ultimo item da lista
console.log(links[links.length -1]);

// ******************************************************************

console.log(lista);

// Métodos e Propriedades de um array:

// retorna o comprimento do array
const total = lista.length;
console.log(total);

// remove o último item de um array e retorna em ultimo
const ultimo = lista.pop();
console.log(ultimo);
console.log(lista);

// remove o primeiro item de um array e retorna em primeiro
const primeiro = lista.shift();
console.log(primeiro);
console.log(lista);

// adiciona um item ao final do array
lista.push('PHP');
console.log(lista);

// ******************************************************************

// links 1 não é um array real e sim um array like, sendo assim não aceita nenhum método acima.
const links1 = document.querySelectorAll('nav a');
console.log(links1); // retorna Nodelist(4)

// Para transformar em um array real e assim poder utilizar os métodos de um array:

const links2 = Array.from(document.querySelectorAll('nav a'));
console.log(links2);
console.log('comprimento de link2: ' + links2.length);

const ultimo1 = links2.pop();
console.log(ultimo1);
console.log(links2);
