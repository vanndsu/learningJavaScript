/*💡 Desafio: Verificador de Tipos (nível: simples/intermediário)
🎯 Objetivo:
Criar um verificador que mostre a diferença entre == e === com base em entradas do usuário.

📋 Regras:
Peça duas entradas do usuário (pode ser com prompt() se estiver no navegador, ou usando variáveis fixas para testes):

let valor1 = ...;
let valor2 = ...;
Implemente duas verificações:

Se valor1 == valor2, exiba:
"Os valores são iguais com =="

Se valor1 === valor2, exiba:
"Os valores e os tipos são iguais com ==="

Caso == seja true mas === seja false, exiba:
"Os valores são iguais, mas os tipos são diferentes"

🔍 Exemplo 1:
let valor1 = 5;
let valor2 = '5';

✅ Saída:
Os valores são iguais com ==
Os valores são iguais, mas os tipos são diferentes*/

let v1 = 10;
let v2 = 10;

if (v1 === v2) {
  console.log("Os valores de saída e os tipos são iguais.");
} else if (v1 == v2 && v1 !== v2) {
  console.log("Os valores de saída são iguais, mas os tipos são diferente");
} else {
  console.log("Os valores não são iguais.");
}
