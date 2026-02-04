// Declaração da classe Person
class Person {

  // Propriedade da classe com valor padrão
  // Todo objeto criado a partir dessa classe começa com 0 carros
  cars = 0;

  // Método constructor
  // Executado automaticamente ao criar uma nova instância com "new"
  constructor(name, age) {

    // Define o nome da pessoa
    this.name = name;

    // Define a idade da pessoa
    // Se não for passada, o valor será undefined
    this.age = age;
  }
}

// Cria uma instância da classe Person passando apenas o nome
let p1 = new Person("João");

// Cria uma instância passando nome e idade
let p2 = new Person("José", 22);

// Cria uma instância passando apenas o nome
let p3 = new Person("Maria");

// Altera manualmente a idade de p1
p1.age = 21;

// Define a quantidade de carros de p2
p2.cars = 3;

// Exibe informações de p1
// cars permanece 0, pois não foi alterado
console.log(`${p1.name} tem ${p1.age} anos e tem ${p1.cars} carros`);

// Exibe informações de p2
console.log(`${p2.name} tem ${p2.age} anos e tem ${p2.cars} carros`);

// Exibe informações de p3
// age é undefined, pois não foi informado no constructor
console.log(`${p3.name} tem ${p3.age} anos e tem ${p3.cars} carros`);
