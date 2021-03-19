const resultado = document.querySelector('.resul')
const boton = document.querySelector('.btn')
const numero = 15

function fibo(numero) {
    let cuenta = [0, 1]
    for (let index = 0; index < numero; index++) {
        cuenta.push(cuenta[cuenta.length - 1] + cuenta[cuenta.length - 2])
    }
    resultado.innerHTML = cuenta
}
boton.addEventListener('click', fibo(numero))