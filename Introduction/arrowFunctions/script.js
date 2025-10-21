// ==============================
// ⚡ ARROW FUNCTIONS (Funções de Seta)
// ==============================
//
// 💡 OBJETIVO:
// Demonstrar o uso de arrow functions para:
// 1️⃣ Somar dois números
// 2️⃣ Montar um nome completo
// ==============================

// Criamos uma arrow function chamada `sum`
// Ela recebe dois parâmetros: x e y
// A função retorna a soma de ambos
const sum = (x, y) => {
  return x + y;
};

// 💡 Versão reduzida da mesma função:
// const sum = (x, y) => x + y;

// Agora criamos outra arrow function chamada `fullName`
// Ela recebe um parâmetro: lastName (sobrenome)
// Retorna a string "Vanderson" concatenada com o sobrenome
const fullName = (lastName) => "Vanderson " + lastName;

// Chamamos a função `sum` passando 10 e 5 como argumentos
// O resultado (15) é exibido no console
console.log(sum(10, 5)); // 🧾 Saída: 15

// Chamamos a função `fullName` passando "Ribeiro" como argumento
// A função retorna "Vanderson Ribeiro"
console.log(fullName("Ribeiro")); // 🧾 Saída: Vanderson Ribeiro
