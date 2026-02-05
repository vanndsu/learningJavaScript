// Função executada quando o botão principal é clicado
function clicou() {

  // Seleciona o elemento que possui o id "teste"
  const teste = document.querySelector("#teste");

  // Seleciona o primeiro elemento <ol> do documento
  const ol = document.querySelector("ol");

  // Cria dinamicamente um novo botão
  const newButton = document.createElement("button");

  // Cria dinamicamente um segundo botão
  const newButton2 = document.createElement("button");

  // Define o texto exibido no primeiro botão
  newButton.innerText = "Clique em mim";

  // Define o texto exibido no segundo botão
  newButton2.innerText = "Clique em mim";

  // Insere o primeiro botão APÓS o elemento <ol>
  ol.after(newButton);

  // Insere o segundo botão ANTES do elemento <ol>
  ol.before(newButton2);

  // Adiciona um evento de clique ao primeiro botão criado
  newButton.addEventListener("click", () => {

    // Cria dinamicamente uma nova lista <ul>
    let newList = document.createElement("ul");

    // Laço de repetição para criar 5 itens de lista
    for (let i = 0; i < 5; i++) {

      // Cria um novo elemento <li>
      let newList1 = document.createElement("li");

      // Define o texto do <li>, numerando os itens
      newList1.innerText = "item adicionado " + (i + 1);

      // Adiciona o <li> à lista <ul>
      newList.append(newList1);
    }

    // Insere a nova lista <ul> APÓS o elemento com id "teste"
    teste.after(newList);
  });
}
