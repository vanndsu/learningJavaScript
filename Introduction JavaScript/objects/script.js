// ==============================
// 👤 OBJECT "character"
// Example of different data types inside an object:
// - Strings
// - Numbers
// - Arrays
// - Nested objects
// ==============================

let character = {
  // Character name
  name: "Vanderson",

  // Character age
  age: 25,

  // Eye colors (array with two options)
  eyes: ["blue", "green"],

  // Nested object containing character attributes
  attributes: {
    strength: 10,
    agility: 8,
    intelligence: 9,
  },
};

// ==============================
// ➕ Adding new properties dynamically
// Aqui estamos adicionando a propriedade "weight" dentro de "attributes".
// Você pode adicionar qualquer propriedade a qualquer momento em um objeto.
// ==============================

character.attributes.weight = [1, 2]; // adição dinâmica de uma nova propriedade

// ==============================
// 📢 Displaying character information
// Template literals allow inserting variables easily using ${}
// ==============================

console.log(
  `Hello! My name is ${character.name}. I am ${character.age} years old, ` +
    `my right eye is ${character.eyes[1]}, and I have ${character.attributes.strength} strength.`
);

// Exibe somente o objeto de atributos
console.log(character.attributes);
