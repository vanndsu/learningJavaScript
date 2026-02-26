// Seleciona o elemento <input> da página
const input = document.querySelector("input");

// Seleciona o elemento <ul> da página
const ul = document.querySelector("ul");

// Adiciona um ouvinte de evento ao input
// O evento "keyup" é disparado quando uma tecla é solta
input.addEventListener("keyup", (event) => {

  // Verifica se a tecla pressionada foi a tecla Enter
  if (event.key === "Enter") {

    // Cria um novo elemento <li> dinamicamente
    let newElement = document.createElement("li");

    // Define o texto do <li> com o valor digitado no input
    newElement.innerText = input.value;

    // Adiciona o novo <li> ao final da lista <ul>
    ul.appendChild(newElement);

    // Limpa o campo de input após adicionar o item
    input.value = "";
  }
});
