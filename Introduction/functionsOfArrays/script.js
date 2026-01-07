// Criamos um array chamado `fruits` contendo nomes de frutas
let fruits = ["Maçã", "Uva", "Laranja", "Banana"];

// push() adiciona um novo elemento no FINAL do array
fruits.push("Acerola");

// Exibe a quantidade de elementos do array
console.log(fruits.length);

// Exibe o array completo
console.log(fruits);

// pop() remove o ÚLTIMO elemento do array
fruits.pop();

// Exibe o array após a remoção do último item
console.log(fruits);

// shift() remove o PRIMEIRO elemento do array
fruits.shift();

// Exibe o array após a remoção do primeiro item
console.log(fruits);

// join() transforma o array em uma string,
// separando os elementos pelo texto informado
console.log(fruits.join(", "));

// Substitui o valor do primeiro elemento do array (índice 0)
fruits[0] = "Kiwi";

// Exibe o array após a alteração
console.log(fruits);

// Substitui o valor do ÚLTIMO elemento do array
// fruits.length - 1 sempre aponta para o último índice válido
fruits[fruits.length - 1] = "Kiwii";

// Exibe o array após alterar o último elemento
console.log(fruits);

// pop() remove novamente o último elemento
fruits.pop();

// push() adiciona um novo elemento no final
fruits.push("Kiwiii");

// Exibe o array após as alterações
console.log(fruits);

// unshift() adiciona um novo elemento no INÍCIO do array
fruits.unshift("Primeiro");

// Exibe o array final
console.log(fruits);
