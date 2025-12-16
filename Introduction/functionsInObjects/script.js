// Criamos um objeto chamado `person`
let person = {
  // Propriedade que armazena o primeiro nome
  name: "Vanderson",

  // Propriedade que armazena o sobrenome
  lastName: "Ribeiro",

  // Propriedade que armazena a idade
  age: 25,

  // Método do objeto (função dentro de um objeto)
  // Ele serve para retornar o nome completo da pessoa
  completeName: function () {
    // `this` faz referência ao próprio objeto `person`
    // Ou seja:
    // this.name     → person.name
    // this.lastName → person.lastName
    return this.name + " " + this.lastName;
  },
};

// Chamamos o método `completeName()` do objeto `person`
// O valor retornado pela função é exibido no console
console.log(person.completeName());

let person2 = {
  name: "Vanderson",
  lastName: "Ribeiro",

  completeName: function () {
    // Arrow function herda o `this` da função normal acima
    const buildName = () => {
      return this.name + " " + this.lastName;
    };

    return buildName();
  },
};

console.log(person2.completeName());

 /*🧠 Aqui funciona porque:

completeName é uma função normal → tem this

buildName é arrow → herda esse this

🧠 RESUMÃO MENTAL (guarde isso):
Tipo de função	this aponta para
function()	Quem chamou
()=>{}	Escopo onde foi criada
⚠️ REGRA DE OURO

❌ Nunca use arrow function como método de objeto se precisar de this.
✅ Use arrow function dentro do método.

🤔 Por quê?

Porque arrow functions NÃO criam seu próprio this.

👉 O this dentro da arrow function não aponta para o objeto person.
Ele herda o this do escopo onde foi criado (escopo léxico).

No caso acima:

O this NÃO é o objeto person

No browser, ele pode apontar para window

No Node.js, pode ser {} ou undefined*/