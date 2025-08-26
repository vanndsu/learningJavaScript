// ==============================
// Exemplo: Operador Ternário com boolean e número
// ==============================

// Criamos uma variável chamada `apto` com valor false
// Tipo: boolean (pode ser true ou false)
let apto = false;

// Usamos o operador ternário para verificar se "apto" é igual a true
// Estrutura: condição ? valorSeVerdadeiro : valorSeFalso
// - Se apto == true → retorna "Apto"
// - Se não → retorna "Não Apto"
// Como apto é false → condição é falsa → resultado: "Não Apto"
console.log(apto == true ? "Apto" : "Não Apto");


// Criamos uma variável chamada `age` com valor 18
// Tipo: number
let age = 18;

// Agora criamos a variável `adult` usando o operador ternário
// Condição: age >= 18
// - Se for verdadeira → "Adulto"
// - Se for falsa → "Criança"
// Como age é 18, a condição é verdadeira → resultado: "Adulto"
let adult = age >= 18 ? "Adulto" : "Criança";

// Exibimos no console o valor da variável `adult`
// Saída: "Adulto"
console.log(adult);
