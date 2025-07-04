// ==============================
// Exemplo: Usando template strings com variáveis e expressões
// ==============================

// Declaramos a variável `name1` com o valor "Vanderson".
// Essa variável vai representar o nome da pessoa.
let name1 = "Vanderson"; // Tipo: string

// Declaramos a variável `idade` com o valor 24.
// Representa a idade da pessoa.
let idade = 24; // Tipo: number

// Criamos uma nova variável chamada `variable` que vai conter uma frase personalizada.
// Aqui usamos TEMPLATE STRING, ou seja, uma string criada com crase (`` ` ``) ao invés de aspas.
// Dentro dela, usamos `${}` para inserir variáveis ou até expressões diretamente dentro do texto.

// Note que usamos `${idade + 1}` para somar 1 à idade.
// Isso simula uma situação como: "vou fazer aniversário", etc.
let variable = `Olá meu nome é ${name1} e tenho ${idade + 1} anos`;

// Resultado final da string:
// "Olá meu nome é Vanderson e tenho 25 anos"

// Agora exibimos a frase montada no console
console.log(variable);
