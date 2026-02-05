// ==============================
// Exemplo: Saudação personalizada com template string
// ==============================

// Aqui estamos usando a palavra-chave `let` para declarar uma variável chamada `cidade`.
// `let` permite que a variável tenha seu valor alterado depois, caso necessário.
// O valor inicial atribuído é a string "Aracati".
let cidade = "Aracati";

// Aqui usamos `var` para declarar a variável `estado`.
// Como vimos antes, `var` tem escopo de função (não de bloco) e permite redeclaração.
// A variável `estado` recebe o valor "Ceará".
var estado = "Ceará";

// Mais uma variável com `let`, chamada `nome`, que armazena a string "Vanderson".
let nome = "Vanderson";

// Agora, usamos `console.log()` para exibir uma mensagem no console.
// Dentro dos parênteses temos uma **template string**, iniciada com crase (`) ao invés de aspas (" ou ').
// A template string permite interpolar variáveis diretamente no meio do texto usando `${}`.
// Isso é mais limpo e legível do que concatenar com +, especialmente em frases longas.
console.log(
  `Olá! Me chamo ${nome}, moro em ${cidade}, cidade do estado do ${estado}`
);

// Saída esperada no console:
// Olá! Me chamo Vanderson, moro em Aracati, cidade do estado do Ceará
