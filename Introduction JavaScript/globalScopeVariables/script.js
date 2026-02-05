// ==============================
// 🔢 CONTADOR SIMPLES COM FUNÇÃO
// ==============================
//
// 💡 OBJETIVO:
// Demonstrar como uma variável global pode ser modificada
// por uma função que a acessa diretamente.
// ==============================

// Criamos uma variável chamada `count` e inicializamos com 0.
// Essa variável está no ESCOPO GLOBAL (fora de qualquer função),
// então pode ser acessada e modificada de qualquer lugar do código.
let count = 0;

// Criamos uma função chamada `increased` (aumentar).
// Ela não recebe parâmetros, mas vai modificar a variável `count`.
function increased() {
  // Se colocássemos `let count = 3` aqui dentro,
  // estaríamos criando uma NOVA variável local, diferente da global.
  // Por isso, deixamos comentado para manter o comportamento esperado.

  // O operador `++` incrementa o valor atual de `count` em 1.
  count++;
}

// Chamamos a função `increased()` duas vezes.
// Cada chamada adiciona +1 ao valor da variável global `count`.
increased(); // count passa de 0 → 1
increased(); // count passa de 1 → 2

// Exibimos o valor atual de `count` no console.
console.log(count); // 🧾 Saída: 2
