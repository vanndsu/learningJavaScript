// ==============================
// Exemplo: Estrutura condicional com idade e aposentadoria
// ==============================

// Criamos uma variável chamada `idade` com valor 10
// Como não tem aspas, o tipo é NUMBER (número)
let idade = 10; // Tipo: number

// Criamos uma variável chamada `aposento` com valor false
// O tipo aqui é BOOLEAN, ou seja, só pode ser true (verdadeiro) ou false (falso)
let aposento = false; // Tipo: boolean

// Agora vamos usar uma estrutura condicional (if/else if/else)

// Primeiro caso: verificamos se a idade está entre 18 e 60 anos
// Usamos o operador lógico && (E), que só retorna true se as duas condições forem verdadeiras
// - idade >= 18 → a pessoa tem 18 anos ou mais
// - idade <= 60 → a pessoa tem até 60 anos
// Se as duas forem verdadeiras, a pessoa é considerada "adulta"
if (idade >= 18 && idade <= 60) {
  console.log("Você é adulto."); // Esse bloco só roda se a condição acima for verdadeira
} 

// Segundo caso: se a primeira condição for falsa, o código vem para cá
// Aqui testamos:
// - idade > 60 → significa que a pessoa tem mais de 60 anos
// OU (|| operador lógico OU) 
// - aposento == true → significa que a pessoa já é aposentada
// Se qualquer uma dessas duas for verdadeira, cai neste bloco
else if (idade > 60 || aposento == true) {
  console.log("Você é aposentado."); // Mensagem exibida para idosos ou aposentados
} 

// Caso nenhuma das condições acima seja satisfeita
// (ou seja: pessoa menor de 18 e não aposentada),
// cai no bloco do else
else {
  console.log("Você é uma criança sem aposento."); 
  // Saída neste caso: "Você é uma criança sem aposento."
}