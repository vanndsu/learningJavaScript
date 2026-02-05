// Define a classe Person
class Person {
  // Propriedade privada (por convenção) para armazenar a idade
  _age = 0;

  // Construtor da classe, executado ao criar um novo objeto
  constructor(name) {
    // Define o nome da pessoa
    this.name = name;
  }

  // Getter: permite acessar a idade de forma controlada
  get age() {
    return this._age;
  }

  // Setter: permite alterar a idade com validação
  set age(x) {
    // Verifica se o valor passado é do tipo número
    if (typeof x == "number") {
      this._age = x;
    }
  }
}

// Cria um novo objeto Person com o nome "Vandim"
let p1 = new Person("Vandim");

// Define a idade usando o setter
p1.age = 10;

// Exibe a idade no console usando o getter
console.log(p1.age);
