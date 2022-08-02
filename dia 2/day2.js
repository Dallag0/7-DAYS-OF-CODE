let name = document.querySelector('.spanName')
let years = document.querySelector('.spanYears')
let language = document.querySelector('.spanLanguage')
let learning = document.querySelector('.spanEstudo')

let nome = prompt('Insira o seu nome')
name.innerHTML = nome
let anos = prompt('Insira a sua idade')
years.innerHTML = anos
let linguagem = prompt('Insira a linguagem que você está aprendendo agora')
language.innerHTML = linguagem

let estudo = prompt('Você gosta de estudar essa linguagem? ( 1 = sim, 2 = não)')
if (estudo == 1) {
  learning.innerHTML =
    'Muito bom! Continue estudando e você terá muito sucesso.'
} else if(estudo == 2) {
  learning.innerHTML = 'Ahh que pena... Já tentou aprender outras linguagens?'
}
