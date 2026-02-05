// ==============================
// Trabalhando com tipos e operações
// ==============================

// Criamos a variável `x` com valor 0 (tipo number)
let x = 0;

// Criamos a variável `y` com valor "5" (tipo string)
// Mesmo que pareça um número, as aspas fazem dele uma string.
let y = "5";

// Agora somamos 9 ao valor atual de x (que era 0). Resultado: 9.
x = x + 9; // x agora vale 9

// Aqui ocorre uma operação entre um number (x = 9) e uma string ("5").
// No JavaScript, quando somamos um número com uma string, ele **converte tudo para string e concatena**.
// Resultado: "95"
y = x + y; // y agora vale "95" (string)

// ==============================
// Operações matemáticas com números
// ==============================

// Declaramos três variáveis numéricas
let n1 = 5;
let n2 = 6;
let n3 = 9;

// Fazemos uma expressão matemática:
// (2 * (n1 + n2)) - n3
// Passo a passo:
// n1 + n2 = 5 + 6 = 11
// 2 * 11 = 22
// 22 - n3 = 22 - 9 = 13
let sum = (2 * (n1 + n2)) - n3; // Resultado final: 13

// ==============================
// Exibindo os valores no console
// ==============================

console.log(x, y); 
// Saída: 9 "95"
// x é number, y é string

console.log(sum); 
// Saída: 13

// ==============================
// Concatenando nomes
// ==============================

// Declaramos duas variáveis com partes do nome
let firstName = "Vanderson";
let lastName = "Ribeiro";

// Criamos uma nova variável `fullName` juntando as duas com um espaço no meio
// Usamos o operador + para concatenar strings
fullName = firstName + " " + lastName; 
// Resultado: "Vanderson Ribeiro"

// Exibimos o nome completo no console
console.log(fullName); 
// Saída: Vanderson Ribeiro
