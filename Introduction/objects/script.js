// ==============================
// 👤 OBJETO "character"
// Exemplos de tipos dentro de um objeto:
// - Strings
// - Numbers
// - Arrays
// - Objetos dentro de objetos (nested objects)
// ==============================

let character = {
  // Nome do personagem
  name: "Vanderson",

  // Idade do personagem
  age: 25,

  // Cor dos olhos (array contendo duas opções)
  eyes: ["blue", "green"],

  // Atributos em um objeto interno
  attributes: {
    strength: 10,
    agility: 8,
    intelligence: 9,
  },
};

// ==============================
// 📢 Exibindo informações
// Usamos template literals (``) para interpolar variáveis de forma clara.
// ==============================

console.log(
  `Hello! My name is ${character.name}. I am ${character.age} years old, ` +
  `my right eye is ${character.eyes[1]}, and I have ${character.attributes.strength} strength.`
);
