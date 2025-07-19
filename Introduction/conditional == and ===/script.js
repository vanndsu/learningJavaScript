// ==============================
// Exemplo: Diferença entre valor e tipo com ===
// ==============================

// Criamos uma variável chamada `idade` com valor "20"
// ⚠️ Note que o valor está entre ASPAS, ou seja, é do tipo STRING, e não número.
let idade = "20"; // Tipo: string

// Agora usamos uma estrutura condicional com o operador ===
// O operador === compara **valor E tipo**
// Ou seja: ele só retorna true se os dois forem exatamente iguais

// Aqui estamos comparando se idade (que é "20", string) === 20 (número)
// Como os tipos são diferentes (string vs number), a comparação retorna false
if (idade === 20) {
  // Esse bloco NÃO será executado, porque a condição é falsa
  idade = idade + 20;
  console.log("Nova idade:", idade);
} else {
  // Como a condição é falsa, este bloco é executado
  console.log("Idade incorreta ou Tipo Inválido");
  // Saída: Idade incorreta ou Tipo Inválido
}

/*ALTERNATIVA

let idade = "20";

if (Number(idade) === 20) {
  idade = Number(idade) + 20;
  console.log("Nova idade:", idade); // Saída: 40
} else {
  console.log("Idade incorreta ou Tipo Inválido");
}*/
