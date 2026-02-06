// Define a classe Person (classe base / classe pai)
class Person {
  // Propriedade padrão de idade
  age = 0;

  // Construtor que recebe o nome da pessoa
  constructor(name) {
    this.name = name;
  }

  // Método que imprime uma saudação no console
  sayHi() {
    console.log(`${this.name} diz oi!`);
  }
}

// Define a classe Students, que herda de Person
class Students extends Person {
  // Construtor da classe Students
  constructor(name, id) {
    // Chama o construtor da classe pai (Person)
    super(name);

    // Define o id (matrícula) do estudante
    this.id = id;
  }

  // Método que chama o método sayHi da classe pai
  sayHello() {
    super.sayHi();
  }
}

// Cria um novo objeto Students
let s1 = new Students("Adalberto", 1);

// Define a idade do estudante
s1.age = 25;

// Chama o método herdado via sayHello
s1.sayHello();

// Exibe informações do estudante no console
console.log(`${s1.name} tem ${s1.age} anos e matrícula #${s1.id}`);
