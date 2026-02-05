// ==============================
// Exemplo: Função com retorno (return)
// ==============================

// Criamos uma função chamada `fullName`
// Ela recebe dois parâmetros: `firstName` (primeiro nome) e `lastName` (sobrenome)
function fullName(firstName, lastName) {
  // Usamos template string (` `) para juntar os dois nomes com um espaço entre eles
  // O resultado dessa junção será "PrimeiroNome Sobrenome"
  // A palavra-chave `return` devolve esse valor para quem chamou a função
  return `${firstName} ${lastName}`;
}

// Aqui criamos uma variável chamada `complete`
// Ela recebe o valor retornado pela função `fullName`
let complete = fullName("Vanderson", "Ribeiro");

// Exibimos o valor armazenado na variável `complete` no console
console.log(complete); // Saída: Vanderson Ribeiro
