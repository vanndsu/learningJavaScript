// ==============================
// Exemplo: Estrutura de decisão switch/case
// ==============================

// Criamos uma variável chamada `profession` com valor "Atleta"
// Tipo: string
let profession = "Atleta";

// Criamos uma variável chamada `wage` (salário) com valor inicial 0
// Tipo: number
let wage = 0;

// Estrutura switch para verificar o valor da variável `profession`
// O switch compara o valor de "profession" com cada "case" listado
switch (profession) {
  // Se profession for exatamente "Atleta"
  case "Atleta":
    wage = 10.7;   // atribui 10.7 ao salário
    break;         // encerra o switch para não executar os próximos casos

  // Se profession for exatamente "Medico"
  case "Medico":
    wage = 10.5;   // atribui 10.5 ao salário
    break;         // encerra aqui

  // Se não for nenhum dos casos acima, cai no "default"
  default:
    wage = 0.1;    // atribui 0.1 ao salário (valor padrão)
    break;
}

// Aqui exibimos o resultado no console
// Usamos template string (` `) para concatenar texto e variáveis
// ${profession} → insere o valor da profissão
// ${wage.toFixed(3)} → formata o número com 3 casas decimais
console.log(`Seu salário de ${profession} é $ ${wage.toFixed(3)}`);
