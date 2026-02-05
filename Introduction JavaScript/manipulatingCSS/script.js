// Função chamada quando o botão é clicado
function clicou() {

  // Seleciona o primeiro elemento <li> encontrado no documento
  const li = document.querySelector("li");

  // Exibe o elemento <li> selecionado no console
  console.log(li);

  // Altera a cor de fundo do <li>
  li.style.backgroundColor = "black";

  // Altera a cor do texto do <li>
  li.style.color = "green";

  // Altera o tamanho da fonte do <li>
  li.style.fontSize = "10px";
}
