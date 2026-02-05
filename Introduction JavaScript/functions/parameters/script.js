// ==============================
// Exemplo: Função com Parâmetros
// ==============================

// Criamos uma função chamada `fullName`
// Ela recebe dois PARÂMETROS: `name` e `lastName`
// Parâmetros são como variáveis internas que recebem valores
// quando a função é chamada
function fullName(name, lastName) {
  // Aqui usamos console.log() para exibir o nome completo
  // A vírgula dentro do log separa os dois valores com um espaço automaticamente
  console.log(name, lastName);
}

// ==============================
// Chamadas da Função
// ==============================

// Chamamos a função passando dois ARGUMENTOS:
// "Vanderson" será atribuído ao parâmetro `name`
// "Ribeiro" será atribuído ao parâmetro `lastName`
fullName("Vanderson", "Ribeiro"); // Saída: Vanderson Ribeiro

// Segunda chamada com outros valores
// "Marcos" → name
// "Vinicius" → lastName
fullName("Marcos", "Vinicius"); // Saída: Marcos Vinicius
