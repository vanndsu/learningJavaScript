// ==============================
// 🎨 ARRAY SIMPLES DE CORES
// ==============================

// Criamos um array com nomes de cores
let cores = ["Azul", "Verde", "Amarelo", "Branco"];

// push() → adiciona um elemento no FINAL do array
cores.push("Vermelho");

// pop() → remove o ÚLTIMO elemento do array
cores.pop(); // remove "Vermelho"

// shift() → remove o PRIMEIRO elemento do array
cores.shift(); // remove "Azul"

// ==============================
// 🎨 ARRAY DE OBJETOS
// Cada objeto representa uma cor e sua quantidade de tons
// ==============================

let cores2 = [
  { nome: "Azul", qt: 2 },
  { nome: "Vermelho", qt: 6 },
  { nome: "Amarelo", qt: 109 },
];

// ==============================
// 🔁 for...in
// Usado para percorrer ÍNDICES (posições) do array
// ==============================

for (let i in cores2) {
  // i é uma STRING representando o índice ("0", "1", "2")

  // parseInt(i) converte o índice para número
  console.log(`Cor ${parseInt(i) + 1}`);

  // Acessamos o objeto na posição i
  console.log(`A cor ${cores2[i].nome} possui ${cores2[i].qt} tons`);
}

// Exibe o array simples após as modificações
console.log(cores);

// ==============================
// 🔁 for...of
// Usado para percorrer os VALORES do array
// ==============================

for (let cor of cores2) {
  // cor representa cada OBJETO do array

  console.log(`A cor ${cor.nome} possui ${cor.qt} tons`);

  // Modificamos o nome da cor para letras maiúsculas
  cor.nome = cor.nome.toUpperCase();
}

// Exibe o array após as alterações
console.log(cores2);
