// Define a classe Person
class Person {
  // Propriedade de instância com valor inicial
  age = 0;

  // Construtor da classe, recebe o nome da pessoa
  constructor(name) {
    this.name = name;
  }
}

// Função fábrica (factory function) para criar pessoas
function createPerson(name, age) {
  // Cria uma nova instância da classe Person
  let p = new Person(name);

  // Define a idade da pessoa
  p.age = age;

  // Retorna o objeto criado
  return p;
}

// Cria uma pessoa usando a função factory
let p1 = createPerson("Vandim", 25);

// Exibe o nome e a idade da pessoa criada
console.log(p1.name, p1.age);
