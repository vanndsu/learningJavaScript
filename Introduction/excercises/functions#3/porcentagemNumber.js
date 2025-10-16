// ==============================
// 🧮 Cálculo de porcentagem entre dois números
// ==============================

// Criamos uma função chamada `calcPorc` que recebe dois parâmetros:
// - x → representa o número total (ou base da porcentagem)
// - y → representa o valor que queremos saber qual porcentagem ele é de x
function calcPorc(x, y) {
  // Fórmula matemática da porcentagem:
  // (parte / total) * 100
  // Aqui estamos dividindo `y` por `x` e multiplicando o resultado por 100
  // para descobrir qual porcentagem `y` representa de `x`.
  return (y / x) * 100;
}

// Declaramos duas variáveis com valores numéricos
// x = 40 → valor total
// y = 10 → parte que queremos comparar
let x = 40;
let y = 10;

// Exibimos o resultado no console com uma mensagem formatada
// Usamos TEMPLATE STRING (crases ` e ${}`) para inserir variáveis dentro do texto
// A função calcPorc(x, y) é chamada dentro do console.log()
// e o resultado da porcentagem é mostrado automaticamente.
console.log(`${y} é ${calcPorc(x, y)}% de ${x}`);

// 🔎 SAÍDA NO CONSOLE:
// 10 é 25% de 40
// Isso significa que 10 representa 25% de 40.
