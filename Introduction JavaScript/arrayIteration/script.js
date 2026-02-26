// Criamos um array com nomes de frutas
let fruits = ["Banana", "Maçã", "Pêra", "Laranja"];

// Criamos um segundo array com menos frutas
let fruits2 = ["Uva", "Maçã"];

// ==============================
// filter()
// Cria um NOVO array apenas com os itens que passam na condição
// Aqui filtramos frutas com mais de 4 letras
// ==============================

let fruitsNew = fruits.filter((item) => item.length > 4);

// Exibe o novo array filtrado
console.log(fruitsNew);

// ==============================
// every()
// Retorna true se TODOS os itens atenderem à condição
// (Este resultado não está sendo armazenado aqui)
// ==============================

fruits.every((item) => item.length > 4);

// ==============================
// every() com verificação
// Verifica se TODAS as frutas possuem mais de 3 letras
// ==============================

let ok = fruits.every((item) => item.length > 3);

// Estrutura condicional baseada no retorno do every()
if (ok) {
  console.log(`Todos os itens são maior que 3`);
} else {
  console.log("Há itens menores que 3");
}

// ==============================
// some()
// Retorna true se PELO MENOS UM item atender à condição
// ==============================

let nok = fruits2.some((item) => item.length > 3);

// Estrutura condicional baseada no retorno do some()
if (nok) {
  console.log(`Alguns dos itens é maior que 3`);
} else {
  console.log("Nenhum item é maior que 3");
}

// ==============================
// includes()
// Verifica se um valor existe dentro do array
// ==============================

if (fruits.includes("Maçã")) {
  console.log("Tem uva sim");
} else {
  console.log("Tem uva não");
}
