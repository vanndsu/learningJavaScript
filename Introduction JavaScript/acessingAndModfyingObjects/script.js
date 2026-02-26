// Criamos um objeto chamado "personagem", que representa uma pessoa
let personagem = {
  // Propriedade: nome do personagem
  nome: "Vanderson",

  // Propriedade: idade do personagem
  idade: 25,

  // Propriedade: lista de carros (um array de objetos)
  carros: [
    {
      // Primeiro carro
      modelo: "Ferrari",
      cor: "Azul",
    },
    {
      // Segundo carro
      modelo: "Ford",
      cor: "Preto",
    },
  ],
};

// Aqui exibimos uma frase montada usando template literal (``)
// Acessamos:
// - O modelo do primeiro carro -> personagem.carros[0].modelo
// - A cor do segundo carro -> personagem.carros[1].cor
console.log(
  `Meu carro é um(a) ${personagem.carros[0].modelo} ${personagem.carros[1].cor}`
);
