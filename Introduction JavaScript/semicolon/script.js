// ==============================
// Exemplo: concatenação de nomes e uso do ponto e vírgula
// ==============================

// Aqui declaramos duas variáveis:
// - `firstName` com valor "Vanderson"
// - `lastname` com valor "Ribeiro"
// Ambas são do tipo string (texto).
// Note que estão na mesma linha, separadas por ponto e vírgula.
// O ponto e vírgula (`;`) indica o fim de uma instrução em JavaScript.
let firstName = "Vanderson"; 
let lastname = "Ribeiro"; // Isso é permitido porque cada instrução está separada por ponto e vírgula

// ==============================
// Explicação sobre o ponto e vírgula
// ==============================
// O ponto e vírgula finaliza uma linha de código. Com isso, é possível iniciar outra instrução na mesma linha.
// Exemplo abaixo:
// let x = 10; let y = 20; => Isso é válido, pois cada comando termina com ponto e vírgula.

// ==============================
// Exibindo o nome completo no console
// ==============================

// Aqui usamos console.log() para exibir o nome completo na tela.
// A string "Meu nome completo " é concatenada com a variável firstName usando o operador +.
// Porém, note que o segundo argumento (`lastname`) está separado por vírgula.
// No console.log, quando usamos vírgula entre argumentos, ele insere um ESPAÇO automaticamente entre os valores.
console.log("Meu nome completo " + firstName, lastname); 
// Saída gerada: Meu nome completo Vanderson Ribeiro

// ⚠️ OBS: Se você usasse + para tudo, ficaria assim:
// console.log("Meu nome completo " + firstName + " " + lastname);
// Isso daria mais controle sobre o formato final da string.
