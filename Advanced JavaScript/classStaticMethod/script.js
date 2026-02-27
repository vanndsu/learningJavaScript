// Define a classe Person
class Person {
  // Propriedade estática: pertence à classe, não às instâncias
  static hands = 2;

  // Propriedade de instância com valor padrão
  age = 0;

  // Construtor chamado ao criar um novo objeto da classe
  constructor(name) {
    // Define o nome da pessoa
    this.name = name;
  }

  // Método estático: só pode ser chamado pela classe
  static sayHay() {
    // "this" aqui se refere à própria classe Person
    console.log(this.name + " diz oi");
  }
}

// Cria uma instância da classe Person
let p1 = new Person("Adalberto");

// Exibe o nome da instância e tenta acessar uma propriedade estática pela instância
// p1.hands será undefined, pois propriedades estáticas não pertencem ao objeto
console.log(p1.name, p1.hands);

// Acessa corretamente a propriedade estática pela classe
console.log(Person.hands);

// Chama o método estático da classe
Person.sayHay();
