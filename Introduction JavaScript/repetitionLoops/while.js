// Declaramos a variável `numero` e inicializamos com o valor 0
let numero = 0;

// Estrutura de repetição `while`
// O bloco será executado enquanto a condição `numero < 10` for verdadeira
while (numero < 10) {

  // Exibe no console o valor atual da variável `numero`
  console.log(`O numero da vez é: ${numero}`);

  // Incrementa o valor de `numero` em 1 a cada iteração
  // Isso garante que a condição do while será falsa em algum momento,
  // evitando um loop infinito
  numero++;
}
