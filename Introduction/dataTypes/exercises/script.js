/*💡 Exercício Proposto
Declare as variáveis abaixo com os valores correspondentes e use console.log() para imprimir o typeof de cada uma:

city → "Fortaleza"
temperature → 32.5
items → ["camisa", "calça", "sapato"]
isRaining → false
settings → objeto com 2 propriedades: volume: 10, brightness: 80
notDefined → não atribua valor algum
emptyValue → null
greet → uma função que retorna "Olá!"

✅ Objetivo
Você deve declarar cada variável e depois imprimir o tipo delas usando typeof, assim como fez no primeiro exemplo.*/

let city = "Fortaleza";
let temperature = 32.5;
let items = ["camisa", "calça", "sapato"];
let isRaining = false;
let settings = {
  volume: 10,
  brightness: 80,
};
let notDefined;
let emptyValue = null;
function greet() {
  return "Olá!";
}
console.log(typeof greet);
console.log(typeof city);
console.log(typeof temperature);
console.log(typeof items);
console.log(typeof isRaining);
console.log(typeof settings);
console.log(typeof notDefined);
console.log(typeof emptyValue);
