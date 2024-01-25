const imgBiscoito = document.getElementById('imagem1Biscoito')
const screen1 = document.querySelector('.screen1')
const screen2 = document.querySelector('.screen2')
const button = document.querySelector('button')
const paragraph = document.querySelector('.mensagem')

imgBiscoito.addEventListener('click', handleTryClick)
button.addEventListener('click', handleTryClick)
paragraph.addEventListener('open', showingMessage)

function handleTryClick() {
  screen1.classList.toggle('hide')
  screen2.classList.toggle('hide')
}

function showingMessage() {
  paragraph.scrollTop = 10
}