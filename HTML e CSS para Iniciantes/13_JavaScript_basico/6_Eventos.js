// Método é uma função que foi criada dentro de um objeto. Ele tem a mesma característica de função.
const curso = {
  nome: "JavaScript",
  completar() {
    console.log(this.nome + ": Curso Completo.");
  },
  horas: "40 horas",
};

curso.completar();

// Evento é uma ação que o usuário faz no site ou alguma coisa que acontece no site.

const ativar = document.querySelector(".ativar");

function ativarAoClick() {
  console.log("Clicou em : ", ativar);
}

ativar.addEventListener("click", ativarAoClick);

console.log(ativar);

// ******************************************************************

// event.x => coordenada do click em relação ao eixo x
// event.y => coordenada do click em relação ao eixo y
// event.timeStamp => Em qual momento se clicou no botão
// event.currentTarget => Mostra o elemento que está sendo passado o evento. Usado para não precisar acessar uma variável que está fora da função.

const ativar1 = document.querySelector(".ativar1");

// Comentario especial utilizado para documentar o que se tem na função, o que está acontecendo nela, o que esse evento é, o que ela retorna e tudo mais.
// É algo que está bem relacionado com typeScript.
// /** @param {Tipo de objeto do event - chamamos de interface} nome definido na função */
// Com isso aparece dentro da função as propriedades de event.
/** @param {MouseEvent} event */

function ativarAoClick1(event) {
  console.log(event.x);
  console.log(event.y);
  console.log(event.timeStamp);
  console.log(event.currentTarget);
}

ativar1.addEventListener("click", ativarAoClick1);

console.log(ativar1);

// ******************************************************************

const botao = document.querySelector(".botao");

// o toggle adiciona a classe ativar caso não exista e remove caso exista.
function mostrar() {
  const texto = document.querySelector(".texto");
  texto.classList.toggle("ativar");
}

botao.addEventListener("click", mostrar);

// ******************************************************************

console.log(window);

// Retorna a altura da janela
console.log(window.innerHeight);

// Retorna a largura da janela
console.log(window.innerWidth);

const larguraTela = window.innerWidth;
console.log(larguraTela);

function coordenadaMouse(event) {
  const coordenadas = {
    x: event.x,
    y: event.y,
  };
  console.log(coordenadas);
}

window.addEventListener("mousemove", coordenadaMouse);
