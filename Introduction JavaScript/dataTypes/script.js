// ==============================
// Exemplo: Tipos de dados em JavaScript
// ==============================

// Criamos uma variável `userName` com o valor "Vanderson", que é um TEXTO (string).
let userName = "Vanderson"; // Tipo: string

// Aqui temos a variável `age` com valor numérico 90, sem aspas, o que significa que é um NÚMERO (number).
let age = 90; // Tipo: number

// A variável `revenue` é um ARRAY, ou seja, uma lista de valores. No caso, três strings.
// Em JavaScript, arrays são do tipo "object" quando usamos typeof, porque internamente são objetos especiais.
let revenue = ["ovo", "farinha", "acucar"]; // Tipo: object (apesar de ser um array)

// A variável `online` armazena o valor `true`, que é um BOOLEANO — representa verdadeiro ou falso.
let online = true; // Tipo: boolean

// `fullName` é um OBJETO com três propriedades internas: firstName, lastName e age.
// Objetos são estruturas que agrupam dados com chaves e valores.
let fullName = {
  firstName: "Francisco", // string
  lastName: "Silva",      // string
  age: 45                 // number
}; // Tipo: object

// ==============================
// Agora vamos imprimir o tipo de cada variável usando `typeof`
// ==============================

// `typeof` é um operador que retorna o tipo de dado da variável que você passar.
// Ele sempre retorna uma string com o nome do tipo: "string", "number", "boolean", "object", etc.
console.log(
  typeof userName,  // string: porque "Vanderson" é um texto
  typeof age,       // number: porque 90 é um número
  typeof revenue,   // object: arrays são considerados objetos pelo typeof
  typeof online,    // boolean: porque é true ou false
  typeof fullName   // object: porque é um objeto com chaves e valores
);

// Saída esperada no console:
// string number object boolean object
