// ==============================
// Diferença entre let, const e var
// ==============================

// -------- LET --------
// 'let' declara uma variável com escopo de BLOCO (ou seja, só existe dentro de { chaves }).
// Você pode mudar (reatribuir) o valor depois, mas NÃO pode declarar a mesma variável duas vezes no mesmo escopo.
let namee = 'Vanderson' // Criamos uma variável 'namee' com valor inicial 'Vanderson'

// -------- VAR --------
// 'var' é a forma mais antiga de declarar variáveis em JavaScript (antes do ES6).
// Ela tem escopo de FUNÇÃO, ou seja:
// - Se você declarar 'var' dentro de uma função, ela só existe ali dentro.
// - Mas se declarar dentro de um bloco (como if ou for), ela *ignora* o bloco e continua acessível fora dele!
// Isso pode causar comportamentos inesperados se não souber disso.
//
// Além disso, diferente de 'let' e 'const':
// ✅ Você pode reatribuir o valor da variável declarada com 'var'.
// ⚠️ Você também pode redeclarar a mesma variável no mesmo escopo (o que pode causar bugs difíceis de detectar).
var name2 = 'Glau' // Criamos uma variável 'name2' com valor 'Glau'

// -------- CONST --------
// 'const' também tem escopo de BLOCO (como 'let'), mas seu valor não pode ser alterado depois de definido.
// Ou seja, é uma constante: o valor é fixo após a criação.
const name3 = 'Edi' // Criamos uma constante 'name3' com valor 'Edi'

// -------- Exibindo os valores --------
// O console.log abaixo imprime os três valores no terminal:
// Saída esperada: Vanderson Glau Edi
console.log(namee, name2, name3)
