// Função chamada quando o botão é clicado
function clicou() {

  // Seleciona o elemento <input> da página
  const input = document.querySelector("input");

  // Seleciona o elemento <button> da página
  const botao = document.querySelector("button");

  // Exibe no console o valor do atributo "type" do input
  console.log(input.getAttribute("type"));

  // Verifica se o input possui o atributo "placeholder"
  if (input.hasAttribute("placeholder")) {
    // Caso possua, exibe a mensagem no console
    console.log("Tem placeholder");
  } else {
    // Caso não possua, exibe a mensagem no console
    console.log("Não tem placeholder");
  }

  // Verifica se o tipo atual do input é "text"
  if (input.getAttribute("type") === "text") {

    // Altera o tipo do input para "password" (oculta o texto digitado)
    input.setAttribute("type", "password");

    // Atualiza o texto do botão para indicar a nova ação
    botao.innerText = "Mostrar senha";

  } else {

    // Altera o tipo do input para "text" (mostra o texto digitado)
    input.setAttribute("type", "text");

    // Atualiza o texto do botão para indicar a nova ação
    botao.innerText = "Ocultar senha";
  }
}
