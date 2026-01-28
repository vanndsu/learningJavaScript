// Função chamada quando uma tecla é solta (evento keyup)
function soltou(event) {

  // Exibe no console o valor real da tecla pressionada
  // Exemplo: "a", "Enter", "Shift"
  console.log(event.key);

  // Exibe o código físico da tecla no teclado
  // Exemplo: "KeyA", "Enter", "ShiftLeft"
  console.log("TECLA APERTADA: " + event.code);

  // Verifica se a tecla SHIFT estava pressionada
  // Retorna true ou false
  console.log("SHIFT? " + event.shiftKey);

  // Verifica se a tecla CTRL estava pressionada
  // Retorna true ou false
  console.log("CTRL? " + event.ctrlKey);

  // Verifica se a tecla ALT estava pressionada
  // Retorna true ou false
  console.log("ALT? " + event.altKey);

  // Separador visual no console para organizar os logs
  console.log("----------------");
}

// Seleciona o elemento <input> da página
const input = document.querySelector("input");

// Adiciona um ouvinte de evento ao input
// Sempre que uma tecla for solta dentro do input,
// a função `soltou` será executada
input.addEventListener("keyup", soltou);
