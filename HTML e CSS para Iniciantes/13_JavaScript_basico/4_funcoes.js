function logCurso() {
  const nome = "JavaScript";
  const horas = "40 horas";
  console.log(nome, horas);
}

logCurso();
logCurso();
logCurso();

// ******************************************************************
// Parâmetro é o nome1 que foi declarado:
// Argumento é valor que estamos passando, no caso HTML e CSS
function logCurso1(nome1) {
  console.log(nome1);
}

logCurso1("HTML");
logCurso1("css");

// ******************************************************************
function logCurso2(nome2, horas2) {
  console.log(nome2, horas2, "horas");
}

logCurso2("HTML", "40");
logCurso2("css", "20");

// ******************************************************************
function logCurso3(nome3, horas3) {
  console.log(nome3, horas3, "horas");
  return nome3;
}

const retorno = logCurso3("JavaScript", "30");
logCurso3("css", "30");

console.log(retorno);

// ******************************************************************
function logCurso4(nome4, horas4) {
  console.log(nome4, horas4, "horas");
  return {
    nomeTeste: nome4,
    horasTeste: horas4,
  };
}

const retorno1 = logCurso4("JavaScript e Css", "45");
logCurso4("Junior", "35");

console.log(retorno1);
console.log(retorno1.horasTeste);

// ******************************************************************
function logCurso5(nome5, horas5) {
  console.log(nome5, horas5, "horas");
  return {
    nome5,
    horas5,
  };
}

const retorno2 = logCurso5("JavaScript e Css", "55");
logCurso5("Junior", "55");

console.log(retorno2);

// ******************************************************************

nome6 = "José";
function logCurso6() {
  console.log(nome6);
}

logCurso6();

// ******************************************************************

nome7 = "Junior";
function logCurso7() {
  const nome7 = "Francisco";
  console.log(nome7);
}

logCurso7();
console.log(nome7);

// ******************************************************************

nome8 = "Daniela";
function logCurso8() {
  const nome8 = "Danilo";
  console.log(nome8);
  return nome8;
}

const nomedaFuncao = logCurso8();
console.log(nomedaFuncao);
console.log(nome8);
