// ==============================
// Exemplo: Função que verifica se é adulto
// ==============================

// Criamos uma função chamada `anAdult`
// Ela recebe um parâmetro chamado `age` (idade)
function anAdult(age) {
  // Usamos uma estrutura condicional para verificar se a idade é maior ou igual a 18
  return age >= 18;
}

// Criamos uma variável chamada `age` e atribuimos o valor 17
let age = 18;

// Chamamos a função `anAdult()` e passamos a variável `age` como argumento
// O resultado (true ou false) será armazenado em `adult`
let adult = anAdult(age);

// Verificamos se `adult` é verdadeiro (true)
if (adult) {
  // Se for true, exibe "Adulto!"
  console.log("Adulto!");
} else {
  // Se for false, exibe "Dimenó!"
  console.log("Dimenó!");
}
