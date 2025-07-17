/*💡 Desafio: Controle de Acesso (nível: simples)
🎯 Objetivo:
Usar estruturas if, else if e else para criar um sistema simples de controle de acesso baseado na idade e permissão especial.

🧪 Regras:
Você deve criar um programa em JavaScript que:

Pergunte a idade do usuário (let idade = ...)

Pergunte se ele tem permissão especial (let temPermissao = ...) → deve ser true ou false

Com base nisso, o programa deve exibir:

Se a idade for maior ou igual a 18, imprimir:
"Entrada permitida"

Se a idade for menor que 18, mas tiver permissão especial, imprimir:
"Entrada permitida com permissão especial"

Se nenhuma das condições acima for verdadeira, imprimir:
"Entrada negada"*/

let age = 17;
let permission = true;

let person = [age, permission];

if (typeof age === "number" && typeof permission === "boolean") {
  if (person[0] >= 18 || person[1] == true) {
    console.log("DeMaior");
  } else console.log("Dimenó");
} else {
  console.log("Digite algo válido");
}
