const resultado = document.querySelector('.resul')
const boton2 = document.querySelector('.btn2')
const boton1 = document.querySelector('.btn1')

boton1.addEventListener("click", function() {
    resultado.innerHTML = "Hola que tal"
})

boton2.addEventListener('click', function() {
    const numero = 12
    let cuenta = [0, 1]
    for (let index = 0; index < numero; index++) {
        cuenta.push(cuenta[cuenta.length - 1] + cuenta[cuenta.length - 2])
    }
    resultado.innerHTML = cuenta
})