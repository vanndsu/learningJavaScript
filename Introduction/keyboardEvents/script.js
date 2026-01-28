// Função chamada quando uma tecla é pressionada
function apertou() {
  // Exibe no console que a tecla foi pressionada
  console.log("Apertou");
}

// Função chamada enquanto a tecla está sendo mantida pressionada
function segurou() {
  // Exibe no console que a tecla está sendo segurada
  console.log("Segurou");
}

// Função chamada quando a tecla é solta
function soltou() {
  // Exibe no console que a tecla foi liberada
  console.log("Soltou");
}

// Adiciona um ouvinte de evento ao documento inteiro
// Sempre que QUALQUER tecla for solta (keyup),
// a função `soltou` será executada
document.addEventListener("keyup", soltou);
