// Seleciona o primeiro botão encontrado no documento
// (neste código ele ainda não está sendo utilizado)
const button = document.querySelector("button");

// Declaração da classe Person
class Person {

  // Propriedade que controla a quantidade de passos da pessoa
  // Valor inicial padrão
  steps = 0;

  // Propriedade idade com valor inicial padrão
  age = 0;

  // Método constructor
  // Executado automaticamente ao criar uma nova instância com "new"
  constructor(name, age) {

    // Define o nome da pessoa
    this.name = name;

    // Define a idade recebida
    // Se não for número, ainda assim será atribuída
    // (a validação NÃO acontece aqui)
    this.age = age;
  }

  // Método que incrementa a quantidade de passos
  takeAStep() {
    this.steps++;
  }

  // Método para definir a idade de forma segura
  setAge(newAge) {

    // Verifica se o valor informado é do tipo number
    if (typeof newAge === "number") {

      // Se for número, atualiza a idade
      this.age = newAge;

    } else {
      // Caso contrário, exibe uma mensagem de erro
      console.log(
        "Por gentileza, digite um número para setar a idade..."
      );
    }
  }
}

// Cria uma instância passando uma string no lugar da idade
// Isso é permitido, pois o constructor não valida o tipo
let p1 = new Person("João", "fff");

// Cria uma instância passando apenas o nome
// age ficará undefined, sobrescrevendo o valor padrão
let p2 = new Person("José");

// Cria outra instância passando apenas o nome
let p3 = new Person("Maria");

// Incrementa os passos de p1 em 1
p1.takeAStep();

// Define a idade de p3 usando o método seguro
p3.setAge(54);

// Função que adiciona um passo ao p2
// e exibe a quantidade atual de passos
const step = () => {
  p2.takeAStep();
  console.log(`Passos de ${p2.name}: ${p2.steps}`);
};

// Exibe os dados de p1
console.log(
  `Passos de ${p1.name}: ${p1.steps}. Ele tem ${p1.age} anos`
);

// Exibe os dados de p2
console.log(`Passos de ${p2.name}: ${p2.steps}`);

// Exibe a idade de p3
console.log(`Idade de ${p3.name}: ${p3.age}`);
