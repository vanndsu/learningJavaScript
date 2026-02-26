const dec = document.querySelector("#decr")
const inc = document.querySelector("#incr")
let value = document.querySelector('span')
let cont = 0

function decrement() {
    if (cont > 0) {
        cont--;
        console.log(cont)
        value.innerText = cont;
    }


}
function increment() {
    cont++;
    value.innerText = cont;
    console.log(cont)
}
