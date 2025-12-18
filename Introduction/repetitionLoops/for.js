// Criamos um array com vários nomes de frutas
let array = [
  "Maçã",
  "Pera",
  "UvA",
  "Laranja",
  "Abacaxi",
  "Jabuticaba",
  "Manga",
  "Caju",
  "Acerola",
  "Carambola",
];

// Estrutura de repetição `for`
// 1️⃣ Inicialização: let i = 0 → começa no índice 0 do array
// 2️⃣ Condição: i < 10 → o loop roda enquanto i for menor que 10
// 3️⃣ Incremento: i++ → soma 1 ao valor de i a cada repetição
for (let i = 0; i < 10; i++) {
  // Exibe no console:
  // (i + 1) → número da posição humana (começa em 1)
  // array[i] → fruta correspondente ao índice atual
  console.log(i + 1 + " - " + array[i]);
}
