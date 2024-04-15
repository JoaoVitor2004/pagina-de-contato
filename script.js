const fade = document.getElementById('fade')
const modal = document.getElementById('modal')
const botao_fchar = document.getElementById('fechar')
const botao_abrir = document.getElementById('enviar')

function limparClasse() {
    fade.classList.toggle('hide')
    modal.classList.toggle('hide')
    botao_fchar.classList.toggle('hide')
}

const listaElementos = [botao_abrir, botao_fchar].forEach((elemento) => {
    return elemento.addEventListener('click', () => limparClasse())
})