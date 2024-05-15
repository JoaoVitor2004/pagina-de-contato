const fade = document.getElementById('fade')
const modal = document.getElementById('modal')
const form = document.getElementById('form')
const inputs = document.querySelectorAll('.input')

function exibirErro(indice) {
    fade.classList.toggle('hide')
    modal.classList.toggle('hide')
}

function limparErro() {
    fade.classList.add('hide')
    modal.classList.add('hide')
}

form.addEventListener('submit', (remove) => {

    remove.preventDefault()

    if (inputs[0].value === '') {
        exibirErro(0)
        modal.innerHTML = 'Digite seu nome'
        setTimeout(() => {
            limparErro()
        }, 2000)
        return
    }

    if (!emailValido(inputs[1].value)) {
        exibirErro(1)
        modal.innerHTML = 'Digite um email valido'
        setTimeout(() => {
            limparErro()
        }, 2000)
        return
    }

    if (inputs[2].value === '') {
        exibirErro(2)
        modal.innerHTML = 'Preencha este campo'
        setTimeout(() => {
            limparErro()
        }, 2000)
        return
    }

    if (inputs[3].value === '') {
        exibirErro(3)
        modal.innerHTML = 'Preencha este campo'
        setTimeout(() => {
            limparErro()
        }, 2000)
        return
    }

    if (inputs[4].value === '') {
        exibirErro(4)
        modal.innerHTML = 'Digite uma mensagem'
        setTimeout(() => {
            limparErro()
        }, 2000)
        return
    }

    form.submit()

})

function emailValido(email) {

    const emailValido = new RegExp(
        /^[a-zA-Z0-9._-]+@[a-zA-Z]+\.[a-zA-Z]{2,}$/
    )

    if (emailValido.test(email)) {
        return true
    }

    return false

}