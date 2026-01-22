// Função executada quando ocorre o clique
function clicou() {

  // Seleciona o elemento que possui o id "teste"
  const teste = document.querySelector("#teste");

  // Seleciona o primeiro elemento <ol> do documento
  const ol = document.querySelector("ol");

  // Adiciona o texto " alterado" AO FINAL do conteúdo
  // do primeiro <li> da lista
  ol.children[0].append(" alterado");

  // Adiciona o texto "antes" NO INÍCIO do conteúdo
  // do segundo <li> da lista
  ol.children[1].prepend("antes");

  // Cria um novo elemento <li> (ainda não inserido no DOM)
  let newLi = document.createElement("li");

  // Define o texto do novo <li>
  newLi.innerText = "Item adicionado";

  // Cria outro elemento <li>
  let newLi2 = document.createElement("li");

  // Define o texto do segundo <li> criado
  newLi2.innerText = "Item 2";

  // Insere o newLi como PRIMEIRO filho do <ol>
  ol.prepend(newLi);

  // Insere o newLi2 como ÚLTIMO filho do <ol>
  ol.append(newLi2);

  // Move o elemento newLi para o FINAL do <ol>
  // (um elemento não pode existir em dois lugares ao mesmo tempo)
  ol.appendChild(newLi);
}
