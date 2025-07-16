// ==============================
// Aula: Operadores de comparação em JavaScript
// ==============================

// Criamos uma variável chamada `idade` com valor 17
let idade = 17;

// ======= Operadores de comparação básicos =======

// >  : maior que
// <  : menor que
// >= : maior ou igual a
// <= : menor ou igual a
// == : igual (comparação de valor, ignora tipo)
// ===: estritamente igual (valor e tipo)
// != : diferente (comparação de valor, ignora tipo)
// !==: estritamente diferente (valor ou tipo diferentes)

// ==============================
// Exemplo prático usando if/else
// ==============================

if (idade > 18) {
  // Executa se idade for maior que 18
  console.log("Maior que 18");
} else if (idade === 18) {
  // Executa se idade for exatamente 18 (tipo e valor)
  console.log("Exatamente 18 anos");
} else if (idade < 18) {
  // Executa se idade for menor que 18
  console.log("Menor que 18");
}

// ==============================
// Comparações adicionais (exibidas no console)
// ==============================

console.log("idade == '17':", idade == '17');   // true → compara apenas o valor, ignora o tipo (número == string)
console.log("idade === '17':", idade === '17'); // false → compara tipo e valor (number !== string)

console.log("idade != 20:", idade != 20);       // true → valores diferentes
console.log("idade !== '17':", idade !== '17'); // true → tipos diferentes (number !== string)

console.log("idade >= 18:", idade >= 18);       // false → 17 não é maior ou igual a 18
console.log("idade <= 17:", idade <= 17);       // true → 17 é igual a 17

// ==============================
// Resultado esperado no console:
// Menor que 18
// idade == '17': true
// idade === '17': false
// idade != 20: true
// idade !== '17': true
// idade >= 18: false
// idade <= 17: true
