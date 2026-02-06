class Person {
  age = 0;

  constructor(name) {
    this.name = name;
  }

  sayHi() {
    console.log(`${this.name} diz oi!`);
  }
}

class Students extends Person {
  constructor(name, id) {
    super(name);
    this.id = id;
  }

  sayHello() {
    super.sayHi();
  }
}

let s1 = new Students("Adalberto", 1);
s1.age = 25;

s1.sayHello();
console.log(`${s1.name} tem ${s1.age} anos e matrícula #${s1.id}`);
