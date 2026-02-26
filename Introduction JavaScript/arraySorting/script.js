// Criamos um array de strings com nomes de frutas
let fruits = ["Maça", "Uva", "Laranja", "Banana"];

// sort() organiza o array em ordem alfabética (ordem crescente)
// Por padrão, a ordenação é feita como TEXTO (ordem lexicográfica)
fruits.sort();

// Exibe o array ordenado em ordem alfabética
console.log(fruits);

// reverse() inverte a ordem atual do array
// Neste caso, inverte a ordem alfabética já aplicada pelo sort()
console.log(fruits.reverse());

// ==============================
// 🚗 ARRAY DE OBJETOS
// Cada objeto representa um carro com marca e ano
// ==============================

let cars = [
  { brand: "Fiat", year: 2022 },
  { brand: "BMW", year: 2021 },
  { brand: "Ferrari", year: 2023 },
];

/*
Ordenação manual usando if/else (comentada):
- Retorna 1  → troca a ordem
- Retorna -1 → mantém a ordem
- Retorna 0  → mantém como está

cars.sort((a, b) => {
  if (a.year > b.year) {
    return 1;
  } else if (a.year < b.year) {
    return -1;
  } else {
    return 0;
  }
});
*/

// Ordena os carros pelo ano em ordem CRESCENTE
// Se o resultado for negativo → a vem antes de b
// Se for positivo → b vem antes de a
cars.sort((a, b) => a.year - b.year);

// Exibe os carros ordenados do mais antigo para o mais novo
console.log(cars);

// Ordena os carros pelo ano em ordem DECRESCENTE
cars.sort((a, b) => b.year - a.year);

// Exibe os carros ordenados do mais novo para o mais antigo
console.log(cars);
