// Seleciona o primeiro elemento <button> encontrado no documento
const button = document.querySelector("button");

// Seleciona o elemento que possui a classe "button2"
const button2 = document.querySelector(".button2");

// Função executada quando o botão principal é clicado
function clicou() {

  // Exibe no console a lista de classes atuais do botão
  console.log(button.classList);

  // Adiciona a classe "verde" ao botão
  button.classList.add("verde");

  // Exibe novamente a lista de classes após a modificação
  console.log(button.classList);

  // Verifica se o botão possui a classe "azul"
  if (button.classList.contains("azul")) {

    // Se tiver "azul", substitui por "verde"
    button.classList.replace("azul", "verde");

  } else {

    // Caso não tenha "azul", substitui "verde" por "azul"
    button.classList.replace("verde", "azul");
  }
}

// Função executada para remover ou alternar classes
function remove() {

  // Alterna a classe "verde" no segundo botão
  // Se existir, remove; se não existir, adiciona
  button2.classList.toggle("verde");

  // Remove as classes "verde" e "azul" do primeiro botão
  button.classList.remove("verde", "azul");
}
